'use client'

import { useState, useEffect } from 'react'
import { Button } from '../ui/button'
import { ArrowUpToLine } from 'lucide-react'

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    }

    window.addEventListener('scroll', checkScroll)

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', checkScroll)
    }
  }, [])

  const goToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
    })
    window.location.hash = ''
  }

  return (
    <>
      {showTopBtn && (
        <Button
          onClick={goToTop}
          className='fixed bottom-10 right-4 opacity-80 border border-secondary shadow-md z-10'
          size='icon'
        >
          <ArrowUpToLine className='h-4 w-4 text-white' />
        </Button>
      )}
    </>
  )
}
