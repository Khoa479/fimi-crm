import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { FC, PropsWithChildren } from 'react'

import FormHeader from '@/components/shared/forms/form-header'
import Logo from '@/components/shared/logo'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface FormWrapperProps extends PropsWithChildren {
	header: string
}

const FormWrapper: FC<FormWrapperProps> = ({ header, children }) => {
	return (
		<Card className='relative w-[450px] shadow-lg'>
			<Logo className='absolute left-2 top-2 w-14' />
			<ModeSwitcher className='absolute right-2 top-2' />
			<CardHeader>
				<FormHeader header={header} />
			</CardHeader>
			<CardContent>{children}</CardContent>
		</Card>
	)
}

const ModeSwitcher: FC<{ className?: string }> = ({ className }) => {
	const { resolvedTheme, setTheme } = useTheme()

	const switchTheme = () =>
		setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')

	return (
		<button
			className={cn(
				'text-foreground/50 transition-all duration-200 ease-out',
				'hover:text-foreground/70',
				'active:text-foreground/90',
				className
			)}
			onClick={switchTheme}
		>
			<Sun className='hidden h-5 w-5 dark:block' />
			<Moon className='h-5 w-5 dark:hidden' />
		</button>
	)
}

export default FormWrapper
