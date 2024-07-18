import Image from 'next/image'
import { FC } from 'react'

import { cn } from '@/lib/utils'

interface LogoProps {
	className?: string
}

const Logo: FC<LogoProps> = ({ className }) => {
	return (
		<Image
			src='/logo/main-logo.png'
			alt='main logo'
			width={377}
			height={163}
			className={cn('aspect-[377/163] w-24', className)}
		/>
	)
}

export default Logo
