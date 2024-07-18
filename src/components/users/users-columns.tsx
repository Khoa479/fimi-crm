'use client'
import { Profile, User } from '@prisma/client'
import { ColumnDef } from '@tanstack/react-table'

export const UserColumns = [
	{
		accessorKey: 'name',
		header: 'Họ và tên'
	},
	{
		accessorKey: 'email',
		header: 'Email'
	},
	{
		accessorKey: 'profile',
		header: 'Số điện thoại',
		cell: ({ row }) => {
			const profile = row.getValue('profile') satisfies Profile

			return <p>{profile.phoneNumber}</p>
		}
	}
] satisfies ColumnDef<User>[]
