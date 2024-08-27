'use client'

import { useTranslation } from 'react-i18next'
import copy from 'clipboard-copy'
import { toast } from 'sonner'

export function CopyToClipboard({ children, ...props }) {
  const { t } = useTranslation()
  const handleCopy = () => {
    copy(children)
    toast(t('contact:CopiedToClipboard'))
  }

  return (
    <p
      onClick={handleCopy}
      {...props}
      className='flex items-center justify-center gap-1 cursor-pointer text-sm'
    >
      <span className='hover:bg-primary hover:text-white px-2 rounded-xl'>
        {children}
      </span>
    </p>
  )
}
