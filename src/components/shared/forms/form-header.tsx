import { FC } from 'react'

interface FormHeaderProps {
	header: string
}

const FormHeader: FC<FormHeaderProps> = ({ header }) => {
	return (
		<div className='flex w-full items-center justify-center gap-x-4 opacity-70'>
			<h1 className='text-3xl font-black tracking-wider'>{header}</h1>
		</div>
	)
}

export default FormHeader
