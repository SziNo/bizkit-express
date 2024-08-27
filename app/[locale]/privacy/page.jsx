import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const metadata = () => {
  return {
    title: 'Privacy Policy',
  }
}

const page = () => {
  return (
    <section className='max-w-7xl mx-auto flex flex-col p-4'>
      <h1 className='text-3xl text-center m-6'>PRIVACY POLICY</h1>
      <p className='font-bold mb-4'>Last updated March 01, 2024</p>
      <p className='mb-4'>
        This privacy notice for BizKit Express, describes how and why we might
        collect, store, use, and/or share (&quot;process&quot;) your information
        when you use our services (&quot;Services&quot;), such as when you:
        Visit our website at{' '}
        <a href={'http://www.bizkitexpress.com'}>www.bizkitexpress.com</a>, or
        any website of ours that links to this privacy notice Engage with us in
        other related ways, including any sales, marketing, or events Questions
        or concerns? Reading this privacy notice will help you understand your
        privacy rights and choices. If you do not agree with our policies and
        practices, please do not use our Services. If you still have any
        questions or concerns, please contact us at{' '}
        <a href={'mailto:info@bizkitexpress.com'}>info@bizkitexpress.com</a>.
      </p>
      <h2 className='font-semibold mt-4'>SUMMARY OF KEY POINTS</h2>
      <p className='mb-4'>
        This summary provides key points from our privacy notice, but you can
        find out more details about any of these topics by clicking the
        accordions below.
      </p>
      <h3 className='font-semibold mt-4'>
        What personal information do we process?
      </h3>
      <p className='mb-4'>
        When you visit, use, or navigate our Services, we may process limited
        information related to your language preference. This is the only
        personal information we process.
      </p>
      <h3 className='font-semibold mt-4'>
        Do we process any sensitive personal information?
      </h3>
      <p className='mb-4'>We do not process sensitive personal information.</p>
      <h3 className='font-semibold mt-4'>What are your rights?</h3>
      <p className='mb-4'>
        Depending on where you are located geographically, the applicable
        privacy law may mean you have certain rights regarding your personal
        information. Learn more about your privacy rights.
      </p>
      <h3 className='font-semibold mt-4'>How do you exercise your rights?</h3>
      <p className='mb-4'>
        The easiest way to exercise your rights is by submitting a data subject
        access request, or by contacting us. We will consider and act upon any
        request in accordance with applicable data protection laws. Want to
        learn more about what we do with any information we collect? Review the
        privacy notice in full.
      </p>

      <Accordion
        type='single'
        collapsible
        className='w-full md:w-4/5 p-4 md:p-8 mx-auto'
      >
        <AccordionItem value='item-1'>
          <AccordionTrigger>
            1. WHAT INFORMATION DO WE COLLECT?
          </AccordionTrigger>
          <AccordionContent>
            <p className='mb-4'>
              In Short: We only collect minimal data necessary for the
              functionality of our Services. We only collect cookie data for
              language preferences and user consent to our terms and privacy
              policy. We do not collect or store any personal information,
              payment data, device data, or location data.
            </p>
            <h3 className='font-semibold my-4'>
              How Do We Use Your Information?
            </h3>
            <p className='mb-4'>
              In Short: We use your information to improve your experience with
              our Services. The information we collect is used to enhance your
              user experience, such as remembering your language preference.
            </p>
            <h3 className='font-semibold my-4'>Sensitive Information.</h3>
            <p className='mb-4'>We do not process sensitive information.</p>
            <h3 className='font-semibold my-4'>Third-Party Services</h3>
            <p className='mb-4'>
              In Short: We use third-party services for certain functionalities,
              but we do not share your information with them. For booking
              appointments, we use Cal.com. All data related to bookings is
              handled by Cal.com. For payments, we use Stripe. All payment data
              is processed and stored by Stripe. We do not collect or store any
              data related to bookings or payments.
            </p>
            <h3 className='font-semibold my-4'>Log and Usage Data.</h3>
            <p className='mb-4'>
              In Short: Certain third-party services we use may automatically
              collect diagnostic, usage, and performance information. If we
              deploy your website using services like Vercel, these services may
              automatically collect certain information for diagnostic, usage,
              and performance purposes. This information does not reveal your
              specific identity but may include device and usage information,
              such as your IP address, browser and device characteristics,
              operating system, language preferences, referring URLs, device
              name, country, location, information about how and when you use
              our Services, and other technical information.
            </p>
            <h3 className='font-semibold my-4'>Device Data.</h3>
            <p className='mb-4'>
              In Short: Certain third-party services we use may collect device
              data. Services like Vercel may collect device data such as
              information about your computer, phone, tablet, or other device
              you use to access the Services. This device data may include
              information such as your IP address (or proxy server), device and
              application identification numbers, location, browser type,
              hardware model, Internet service provider and/or mobile carrier,
              operating system, and system configuration information.
            </p>
            <h3 className='font-semibold my-4'>Location Data.</h3>
            <p className='mb-4'>
              In Short: Certain third-party services we use may collect location
              data. Services like Vercel may collect location data such as
              information about your device&apos;s location, which can be either
              precise or imprecise. How much information they collect depends on
              the type and settings of the device you use to access the
              Services. You can opt out of allowing these services to collect
              this information either by refusing access to the information or
              by disabling your Location setting on your device. However, if you
              choose to opt out, you may not be able to use certain aspects of
              the Services.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>
            2. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
          </AccordionTrigger>
          <AccordionContent>
            <ul className='list-disc pl-5 mb-4'>
              <li className='mb-2'>
                If it is reasonable to expect collection and use with consent
                would compromise the availability or the accuracy of the
                information and the collection is reasonable for purposes
                related to investigating a breach of an agreement or a
                contravention of the laws of Canada or a province
              </li>
              <li className='mb-2'>
                If disclosure is required to comply with a subpoena, warrant,
                court order, or rules of the court relating to the production of
                records
              </li>
              <li className='mb-2'>
                If it was produced by an individual in the course of their
                employment, business, or profession and the collection is
                consistent with the purposes for which the information was
                produced
              </li>
              <li className='mb-2'>
                If the collection is solely for journalistic, artistic, or
                literary purposes
              </li>
              <li className='mb-2'>
                If the information is publicly available and is specified by the
                regulations
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>3. WHAT ARE YOUR PRIVACY RIGHTS?</AccordionTrigger>
          <AccordionContent>
            <p className='mb-4'>
              In Short: In some regions, such as the European Economic Area
              (EEA), United Kingdom (UK), Switzerland, and Canada, you have
              rights that allow you greater access to and control over your
              personal information. You may review, change, or terminate your
              account at any time.
            </p>
            <p className='mb-4'>
              In some regions (like the EEA, UK, Switzerland, and Canada), you
              have certain rights under applicable data protection laws. These
              may include the right (i) to request access and obtain a copy of
              your personal information, (ii) to request rectification or
              erasure; (iii) to restrict the processing of your personal
              information; (iv) if applicable, to data portability; and (v) not
              to be subject to automated decision-making. In certain
              circumstances, you may also have the right to object to the
              processing of your personal information. You can make such a
              request by contacting us by using the contact details provided in
              the section &quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot;
              below. We will consider and act upon any request in accordance
              with applicable data protection laws.
            </p>
            <p className='mb-4'>
              If you are located in the EEA or UK and you believe we are
              unlawfully processing your personal information, you also have the
              right to complain to your Member State data protection authority
              or UK data protection authority.If you are located in Switzerland,
              you may contact the Federal Data Protection and Information
              Commissioner.
            </p>
            <h3 className='font-semibold my-4'>Withdrawing your consent:</h3>
            <p className='mb-4'>
              If we are relying on your consent to process your personal
              information, which may be express and/or implied consent depending
              on the applicable law, you have the right to withdraw your consent
              at any time. You can withdraw your consent at any time by
              contacting us by using the contact details provided in the section
              &quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot; below.
              However, please note that this will not affect the lawfulness of
              the processing before its withdrawal nor, when applicable law
              allows, will it affect the processing of your personal information
              conducted in reliance on lawful processing grounds other than
              consent.
            </p>

            <h2 className='font-semibold my-4'>Account Information</h2>
            <p className='mb-4'>
              If you would at any time like to review or change the information
              in your account or terminate your account, you can:
            </p>
            <ul className='list-disc pl-5 mb-4'>
              <li className='mb-2'>
                Log in to your account settings and update your user account.
              </li>
              <li className='mb-2'>
                Upon your request to terminate your account, we will deactivate
                or delete your account and information from our active
                databases. However, we may retain some information in our files
                to prevent fraud, troubleshoot problems, assist with any
                investigations, enforce our legal terms and/or comply with
                applicable legal requirements.
              </li>
            </ul>
            <p className='mb-4'>
              If you have questions or comments about your privacy rights, you
              may email us at{' '}
              <a href={'mailto:info@bizkitexpress.com'}>
                info@bizkitexpress.com
              </a>
              .
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-4'>
          <AccordionTrigger>
            4. CONTROLS FOR DO-NOT-TRACK FEATURES
          </AccordionTrigger>
          <AccordionContent>
            <p className='mb-4'>
              Most web browsers and some mobile operating systems and mobile
              applications include a Do-Not-Track (&quot;DNT&quot;) feature or
              setting you can activate to signal your privacy preference not to
              have data about your online browsing activities monitored and
              collected. At this stage no uniform technology standard for
              recognizing and implementing DNT signals has been finalized. As
              such, we do not currently respond to DNT browser signals or any
              other mechanism that automatically communicates your choice not to
              be tracked online. If a standard for online tracking is adopted
              that we must follow in the future, we will inform you about that
              practice in a revised version of this privacy notice.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-5'>
          <AccordionTrigger>
            5. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
          </AccordionTrigger>
          <AccordionContent>
            <p className='mb-4'>
              In Short: If you are a resident of , you are granted specific
              rights regarding access to your personal information.
            </p>
            <p className='mb-4'>
              What categories of personal information do we collect? We have
              collected the following categories of personal information in the
              past twelve (12) months:
            </p>
            <ul className='list-disc pl-5 mb-4'>
              <li className='mb-2'>
                A. Identifiers Contact details, such as real name, alias, postal
                address, telephone or mobile contact number, unique personal
                identifier, online identifier, Internet Protocol address, email
                address, and account name: NO
              </li>
              <li className='mb-2'>
                B. Protected classification characteristics under state or
                federal law Gender and date of birth: NO
              </li>
              <li className='mb-2'>
                C. Commercial information Transaction information, purchase
                history, financial details, and payment information: NO
              </li>
              <li className='mb-2'>
                D. Biometric information Fingerprints and voiceprints: NO
              </li>
              <li className='mb-2'>
                E. Internet or other similar network activity Browsing history,
                search history, online behavior, interest data, and interactions
                with our and other websites, applications, systems, and
                advertisements: NO
              </li>
              <li className='mb-2'>F. Geolocation data Device location: NO</li>
              <li className='mb-2'>
                G. Audio, electronic, visual, thermal, olfactory, or similar
                information Images and audio, video or call recordings created
                in connection with our business activities: NO
              </li>
              <li className='mb-2'>
                H. Professional or employment-related information Business
                contact details in order to provide you our Services at a
                business level or job title, work history, and professional
                qualifications if you apply for a job with us: NO
              </li>
              <li className='mb-2'>
                I. Education Information Student records and directory
                information: NO
              </li>
              <li className='mb-2'>
                J. Inferences drawn from collected personal information
                Inferences drawn from any of the collected personal information
                listed above to create a profile or summary about, for example,
                an individual&apos;s preferences and characteristics: NO
              </li>
              <li className='mb-2'>K. Sensitive personal Information: NO</li>
            </ul>
            <p className='mb-4'>
              We may also collect other personal information outside of these
              categories through instances where you interact with us in person,
              online, or by phone or mail in the context of:
            </p>
            <ul className='list-disc pl-5 mb-4'>
              <li className='mb-2'>
                Receiving help through our customer support channels
              </li>
              <li className='mb-2'>
                Participation in customer surveys or contests
              </li>
              <li className='mb-2'>
                Facilitation in the delivery of our Services and to respond to
                your inquiries
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-6'>
          <AccordionTrigger>
            6. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?
          </AccordionTrigger>
          <AccordionContent>
            <p className='mb-4'>
              In Short: You may have additional rights based on the country you
              reside in.
            </p>
            <p className='mb-4'>Australia and New Zealand</p>
            <p className='mb-4'>
              We collect and process your personal information under the
              obligations and conditions set by Australia&apos;s Privacy Act
              1988 and New Zealand&apos;s Privacy Act 2020 (Privacy Act). This
              privacy notice satisfies the notice requirements defined in both
              Privacy Acts, in particular: what personal information we collect
              from you, from which sources, for which purposes, and other
              recipients of your personal information.If you do not wish to
              provide the personal information necessary to fulfill their
              applicable purpose, it may affect our ability to provide our
              services, in particular:
            </p>
            <ul className='list-disc pl-5 mb-4'>
              <li className='mb-2'>
                Offer you the products or services that you want
              </li>
              <li className='mb-2'>Respond to or help with your requests</li>
              <li className='mb-2'>Manage your account with us</li>
              <li className='mb-2'>
                Confirm your identity and protect your account
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-7'>
          <AccordionTrigger>
            7. DO WE MAKE UPDATES TO THIS NOTICE?
          </AccordionTrigger>
          <AccordionContent>
            <p className='mb-4'>
              In Short: Yes, we will update this notice as necessary to stay
              compliant with relevant laws.
            </p>
            <p className='mb-4'>
              We may update this privacy notice from time to time. The updated
              version will be indicated by an updated &quot;Revised&quot; date
              and the updated version will be effective as soon as it is
              accessible. If we make material changes to this privacy notice, we
              may notify you either by prominently posting a notice of such
              changes or by directly sending you a notification.
            </p>
            <p className='mb-4'>
              We encourage you to review this privacy notice frequently to be
              informed of how we are protecting your information.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-8'>
          <AccordionTrigger>
            8. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </AccordionTrigger>
          <AccordionContent>
            <p className='mb-4'>
              If you have questions or comments about this notice, you may email
              us at
              <a href={'mailto:info@bizkitexpress.com'}>
                info@bizkitexpress.com
              </a>
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default page
