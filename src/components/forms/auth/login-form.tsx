'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { login } from '@/actions/auth/login'
import FormStatus from '@/components/shared/forms/form-status'
import FormWrapper from '@/components/shared/forms/form-wrapper'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import FormFloatingInput from '@/components/ui/form-floating-input'
import { loginFormFields } from '@/constanst/auth'
import { loginSchema } from '@/schemas/auth/schema'
import { LoginSchema } from '@/schemas/auth/types'

const LoginForm = () => {
	const form = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: ''
		},
		mode: 'onSubmit'
	})

	const [success, setSuccess] = useState<string | undefined>()
	const [error, setError] = useState<string | undefined>()

	const { isPending, mutate: onSubmit } = useMutation({
		mutationFn: async (values: LoginSchema) => {
			setSuccess('')
			setError('')

			return await login(values)
		},
		onSuccess: data => {
			if (data.success) {
				form.reset()
				setSuccess(data.success)
			}

			if (data.error) {
				setError(data.error)
			}
		}
	})

	return (
		<FormWrapper header='Login'>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(values => onSubmit(values))}
					className='space-y-6'
				>
					<div className='space-y-6'>
						{loginFormFields.map(field => (
							<FormFloatingInput
								key={field.name}
								control={form.control}
								placeholder={field.label}
								disabled={isPending}
								{...field}
							/>
						))}
					</div>
					<FormStatus message={success} />
					<FormStatus
						type='error'
						message={error}
					/>
					<Button
						className='w-full font-bold tracking-wide'
						type='submit'
						disabled={isPending}
					>
						{isPending && <Loader2 className='h-5 w-5 animate-spin' />}
						Đăng Nhập
					</Button>
				</form>
			</Form>
		</FormWrapper>
	)
}

export default LoginForm
