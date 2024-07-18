import Link from 'next/link'
import { FC } from 'react'

import Logo from '@/components/shared/logo'

interface LogoLinkProps {
	href?: string
	className?: string
}

const LogoLink: FC<LogoLinkProps> = ({ href = '/', className }) => {
	return (
		<Link href={href}>
			<Logo className={className} />
		</Link>
	)
}

export default LogoLink
