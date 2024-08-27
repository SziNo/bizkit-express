'use server'

import nodemailer from 'nodemailer'
import xss from 'xss'

const xssOptions = {
  whiteList: [], // Don't allow any tags
  stripIgnoreTag: true, // Remove all tags not in the whitelist
}

export async function sendMail({ from, name, message }) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  })

  // Sanitize user inputs
  const sanitizedFrom = xss(from, xssOptions)
  const sanitizedName = xss(name, xssOptions)
  const sanitizedMessage = xss(message, xssOptions)

  try {
    await transport.sendMail({
      from: sanitizedFrom,
      to: 'bizkit.express@gmail.com',
      subject: `A message sent by ${sanitizedName}<${sanitizedFrom}> from your website`,
      html: `
    <strong>Name:</strong> ${sanitizedName}<br>
    <strong>Email:</strong> ${sanitizedFrom}<br><br>
    <strong>Message:</strong> ${sanitizedMessage}<br><br>
    <i>This is an automated message from <a href="https://bizkitexpress.com">bizkitexpress.com</a>, please don't reply to this.</i>
  `,
    })
    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    if (error.code) {
      res.status(500).json({ error: 'Error sending email' })
    }
  }
}
