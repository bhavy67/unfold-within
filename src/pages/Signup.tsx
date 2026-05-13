import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { AuthLayout } from '@/components/auth/AuthLayout'
import { AuthInput } from '@/components/auth/AuthInput'
import { PasswordInput } from '@/components/auth/PasswordInput'
import { Button } from '@/components/ui'
import { useAuthStore } from '@/store/auth'

const signupSchema = z.object({
  name: z.string().min(1, 'Name is required').min(2, 'Name must be at least 2 characters'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  password: z.string().min(1, 'Password is required').min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(1, 'Please confirm your password'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
})

type SignupForm = z.infer<typeof signupSchema>

export function Signup() {
  const navigate = useNavigate()
  const signup = useAuthStore((state) => state.signup)
  const isLoading = useAuthStore((state) => state.isLoading)
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
  })

  const onSubmit = async (data: SignupForm) => {
    setError('')
    const success = await signup(data.email, data.password, data.name)
    if (success) {
      navigate('/')
    } else {
      setError('Something went wrong. Please try again.')
    }
  }

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Start your wellness journey today"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {error && (
          <div className="p-3 rounded-xl bg-red-50 text-sm text-red-600">
            {error}
          </div>
        )}

        <AuthInput
          label="Full name"
          type="text"
          placeholder="Enter your name"
          error={errors.name?.message}
          {...register('name')}
        />

        <AuthInput
          label="Email"
          type="email"
          placeholder="you@example.com"
          error={errors.email?.message}
          {...register('email')}
        />

        <PasswordInput
          label="Password"
          placeholder="Create a password"
          error={errors.password?.message}
          {...register('password')}
        />

        <PasswordInput
          label="Confirm password"
          placeholder="Confirm your password"
          error={errors.confirmPassword?.message}
          {...register('confirmPassword')}
        />

        <p className="text-xs text-brand-500">
          By signing up, you agree to our{' '}
          <Link to="/terms" className="underline hover:text-brand-700">Terms of Service</Link>
          {' '}and{' '}
          <Link to="/privacy" className="underline hover:text-brand-700">Privacy Policy</Link>.
        </p>

        <Button
          type="submit"
          size="lg"
          className="w-full justify-center"
          disabled={isLoading}
        >
          {isLoading ? 'Creating account...' : 'Create account'}
        </Button>

        <p className="text-center text-sm text-brand-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-brand-700 hover:text-brand-900">
            Sign in
          </Link>
        </p>
      </form>
    </AuthLayout>
  )
}