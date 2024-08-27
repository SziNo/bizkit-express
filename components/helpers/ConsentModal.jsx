'use client'

import { useState, useEffect } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import CustomLink from './CustomLink'

const ConsentModal = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Check if the user has already accepted the terms
    if (typeof document !== 'undefined') {
      const accepted = document.cookie
        .split('; ')
        .find((row) => row.startsWith('acceptedTerms='))
      setOpen(!accepted)
    }
  }, [])

  const handleAccept = () => {
    const days = 30
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    const expires = date.toUTCString()
    document.cookie = `acceptedTerms=true; expires=${expires}; path=/`
    setOpen(false)
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>User Consent Confirmation</AlertDialogTitle>
          <AlertDialogDescription>
            <p className='text-gray-700 dark:text-gray-300 font-medium'>
              By browsing our site, you&apos;re accepting our{' '}
              <CustomLink
                href='/terms'
                className='text-blue-500 font-semibold hover:underline'
              >
                terms and conditions
              </CustomLink>{' '}
              and{' '}
              <CustomLink
                href='/privacy'
                className='text-blue-500 font-semibold hover:underline'
              >
                privacy policy
              </CustomLink>
              .
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setOpen(false)}>
            Decline
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleAccept}>Accept</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ConsentModal
