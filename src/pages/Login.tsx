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

const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  password: z.string().min(1, 'Password is required').min(6, 'Password must be at least 6 characters'),
})

type LoginForm = z.infer<typeof loginSchema>

export function Login() {
  const navigate = useNavigate()
  const login = useAuthStore((state) => state.login)
  const isLoading = useAuthStore((state) => state.isLoading)
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginForm) => {
    setError('')
    const success = await login(data.email, data.password)
    if (success) {
      navigate('/')
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Enter your details to access your account"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {error && (
          <div className="p-3 rounded-xl bg-red-50 text-sm text-red-600">
            {error}
          </div>
        )}

        <AuthInput
          label="Email"
          type="email"
          placeholder="you@example.com"
          error={errors.email?.message}
          {...register('email')}
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          error={errors.password?.message}
          {...register('password')}
        />

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-brand-300 text-brand-700 focus:ring-brand-500"
            />
            <span className="text-sm text-brand-600">Remember me</span>
          </label>
          <Link
            to="/forgot-password"
            className="text-sm font-medium text-brand-700 hover:text-brand-900"
          >
            Forgot password?
          </Link>
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full justify-center"
          disabled={isLoading}
        >
          {isLoading ? 'Signing in...' : 'Sign in'}
        </Button>

        <p className="text-center text-sm text-brand-600">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-brand-700 hover:text-brand-900">
            Sign up
          </Link>
        </p>
      </form>
    </AuthLayout>
  )
}