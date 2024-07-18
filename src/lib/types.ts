import { Department, Role } from '@prisma/client'
import { DefaultSession } from 'next-auth'
import { HTMLInputTypeAttribute } from 'react'

export type FormFieldType = {
	name: string
	type: HTMLInputTypeAttribute
	label: string
}

export type ActionResponseType<T = null> = {
	success?: string
	error?: string
	data?: T
}

export type ExtendedUser = DefaultSession['user'] & {
	role: Role
	departments: Department[]
}
