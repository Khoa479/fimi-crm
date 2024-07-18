import { FormFieldType } from '@/lib/types'

export const loginFormFields = [
	{
		name: 'email',
		label: 'Email',
		type: 'email'
	},
	{
		name: 'password',
		label: 'Password',
		type: 'password'
	}
] satisfies FormFieldType[]
