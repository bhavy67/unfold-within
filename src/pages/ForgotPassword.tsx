import { useState } from 'react'
import { Link } from 'react-router'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { AuthLayout } from '@/components/auth/AuthLayout'
import { AuthInput } from '@/components/auth/AuthInput'
import { Button } from '@/components/ui'

const forgotSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
})

type ForgotForm = z.infer<typeof forgotSchema>

export function ForgotPassword() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotForm>({
    resolver: zodResolver(forgotSchema),
  })

  const onSubmit = async (_data: ForgotForm) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <AuthLayout title="Check your email">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-100">
            <svg className="h-6 w-6 text-brand-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="mt-4 text-brand-600">
            We've sent password reset instructions to your email.
          </p>
          <p className="mt-2 text-sm text-brand-500">
            Didn't receive the email? Check your spam folder or{' '}
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="font-medium text-brand-700 hover:text-brand-900"
            >
              try again
            </button>
          </p>
          <Link
            to="/login"
            className="mt-6 inline-block text-sm font-medium text-brand-700 hover:text-brand-900"
          >
            Back to Sign in
          </Link>
        </div>
      </AuthLayout>
    )
  }

  return (
    <AuthLayout
      title="Reset your password"
      subtitle="Enter your email and we'll send you reset instructions"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <AuthInput
          label="Email"
          type="email"
          placeholder="you@example.com"
          error={errors.email?.message}
          {...register('email')}
        />

        <Button
          type="submit"
          size="lg"
          className="w-full justify-center"
        >
          Send reset instructions
        </Button>

        <p className="text-center text-sm text-brand-600">
          Remember your password?{' '}
          <Link to="/login" className="font-medium text-brand-700 hover:text-brand-900">
            Sign in
          </Link>
        </p>
      </form>
    </AuthLayout>
  )
}