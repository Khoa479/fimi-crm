'use server'

import { AuthError } from 'next-auth'

import { signIn } from '@/lib/auth'
import { db } from '@/lib/db'
import { ActionResponseType } from '@/lib/types'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { loginSchema } from '@/schemas/auth/schema'
import { LoginSchema } from '@/schemas/auth/types'

export const login = async (
	values: LoginSchema
): Promise<ActionResponseType> => {
	const validatedFields = loginSchema.safeParse(values)

	if (!validatedFields.success)
		return {
			error: 'Thông tin đăng nhập không chính xác'
		}

	const { email, password } = validatedFields.data

	const existingUser = await db.user.findUnique({ where: { email } })

	if (!existingUser)
		return {
			error: 'Email hoặc mật khẩu không chính xác'
		}

	try {
		await signIn('credentials', {
			email,
			password,
			redirectTo: DEFAULT_LOGIN_REDIRECT
		})

		return {
			success: 'Đăng nhập thành công'
		}
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case 'CredentialsSignin':
					return { error: 'Email hoặc mật khẩu không chính xác' }
				default:
					return { error: 'Lỗi server, vui lòng thử lại sau' }
			}
		}

		throw error
	}
}
