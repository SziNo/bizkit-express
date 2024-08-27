'use client'

import { useTranslation } from 'react-i18next'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { sendMail } from '@/lib/mail'
import { getCurrentDateTime } from '@/lib/constants'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '../ui/textarea'
import { toast } from 'sonner'
import HoverBorderGradient from '../ui/hover-border-gradient'

const ContactForm = () => {
  const { t } = useTranslation()
  const formSchema = z.object({
    name: z.string().min(2, {
      message: t('contact:InvalidName'),
    }),
    email: z.string().email({
      message: t('contact:InvalidEmail'),
    }),
    message: z.string().min(1, {
      message: t('contact:InvalidMessage'),
    }),
  })
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  async function onSubmit(values) {
    try {
      await sendMail({
        from: values.email,
        name: values.name,
        message: values.message,
      })
      toast(t('contact:SuccesfullMessageSent'), {
        description: getCurrentDateTime(),
      })
      form.reset()
    } catch (error) {
      toast(t('contact:FailedMessageSent'), {
        description: getCurrentDateTime(),
      })
    }
  }

  return (
    <div className='w-full h-auto flex flex-1 flex-grow flex-shrink-0 flex-col px-4 dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1]'>
      <h2 className='text-xl sm:text-2xl text-center font-bold mb-4 mt-2 sm:mt-8 sm:pb-6 text-neutral-600 dark:text-white max-w-[100vw] sm:max-w-full break-words'>
        {t('contact:ContactFormTitle')}
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='flex flex-col space-y-2'>
                <FormLabel className='text-lg font-semibold'>
                  {t('contact:ContactFormName')}:
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={
                      t('contact:ContactFormName').toLowerCase() + '...'
                    }
                    {...field}
                    className='border p-2 rounded'
                  />
                </FormControl>
                <FormMessage className='text-red-500' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='flex flex-col space-y-2'>
                <FormLabel className='text-lg font-semibold'>
                  {t('contact:ContactFormEmail')}:
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={
                      t('contact:ContactFormEmail').toLowerCase() + '...'
                    }
                    {...field}
                    className='border p-2 rounded'
                  />
                </FormControl>
                <FormMessage className='text-red-500' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem className='flex flex-col space-y-2'>
                <FormLabel className='text-lg font-semibold'>
                  {t('contact:ContactFormMessage')}:
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={
                      t('contact:ContactFormMessage').toLowerCase() + '...'
                    }
                    {...field}
                    className='border p-2 rounded h-20'
                  />
                </FormControl>
                <FormMessage className='text-red-500' />
              </FormItem>
            )}
          />
          <div className='flex w-1/2 mx-auto justify-center pt-1 sm:pt-2'>
            <HoverBorderGradient
              ariaLabel='Submit the form'
              containerClassName='w-full py-[0.15rem] rounded-full'
              className='flex justify-center items-center font-semibold px-4 text-center text-xs sm:text-sm tracking-wider uppercase'
              decoratorClassName='rounded-full'
              as='button'
              type='submit'
              disabled={form.formState.isSubmitting}
            >
              {t('contact:ContactFormButton')}
            </HoverBorderGradient>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default ContactForm
