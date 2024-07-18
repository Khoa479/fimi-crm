import { BadgeCheck, Ban, TriangleAlert } from 'lucide-react'
import { FC } from 'react'

import { cn } from '@/lib/utils'

interface FormStatusProps {
	message?: string
	type?: 'success' | 'warning' | 'error'
}

const FormStatus: FC<FormStatusProps> = ({ message, type = 'success' }) => {
	if (!message) return null

	const icon = () => {
		switch (type) {
			case 'warning':
				return <TriangleAlert className='h-4 w-4' />
			case 'error':
				return <Ban className='h-4 w-4' />
			default:
				return <BadgeCheck className='h-4 w-4' />
		}
	}

	return (
		<div
			className={cn(
				'flex items-center gap-x-2 rounded-md border-2 p-3 text-sm',
				{
					'border-emerald-500 bg-emerald-500/15 text-emerald-500':
						type === 'success',
					'border-yellow-500 bg-yellow-500/15 text-yellow-500':
						type === 'warning',
					'border-destructive bg-destructive/15 text-destructive':
						type === 'error'
				}
			)}
		>
			{icon()}
			<p>{message}</p>
		</div>
	)
}

export default FormStatus
