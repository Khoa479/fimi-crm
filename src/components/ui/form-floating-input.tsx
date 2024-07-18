'use client'

import { FC } from 'react'
import { Control } from 'react-hook-form'

import FloatingInput, {
	FloatingInputProps
} from '@/components/ui/floating-input'
import {
	FormControl,
	FormField,
	FormItem,
	FormMessage
} from '@/components/ui/form'

interface FormFloatingInputProps extends FloatingInputProps {
	control: Control<any, any>
	isMessage?: boolean
}

const FormFloatingInput: FC<FormFloatingInputProps> = ({
	control,
	isMessage,
	...props
}) => {
	return (
		<FormField
			control={control}
			name={props.name as string}
			render={({ field }) => (
				<FormItem>
					<FormControl>
						<FloatingInput
							{...field}
							{...props}
						/>
					</FormControl>
					{isMessage && <FormMessage />}
				</FormItem>
			)}
		/>
	)
}

export default FormFloatingInput
