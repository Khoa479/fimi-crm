'use client'

import { Eye, EyeOff } from 'lucide-react'
import { forwardRef, InputHTMLAttributes, useId, useState } from 'react'
import { MouseEvent } from 'react'

import { cn } from '@/lib/utils'

export interface FloatingInputProps
	extends InputHTMLAttributes<HTMLInputElement> {}

const FloatingInput = forwardRef<HTMLInputElement, FloatingInputProps>(
	({ type = 'text', ...props }, ref) => {
		const elId = useId()
		const [showPassword, setShowPassword] = useState<boolean>(false)

		return (
			<div className='relative'>
				<input
					type={showPassword ? 'text' : type}
					id={elId}
					ref={ref}
					{...props}
					className={cn(
						'peer block w-full appearance-none rounded-lg border border-foreground/20 bg-transparent px-2.5 pb-2.5 pt-4 text-base font-medium tracking-wide text-foreground/80',
						'focus:border-primary/60 focus:outline-none focus:ring-0'
					)}
					placeholder=' '
				/>
				<label
					htmlFor={elId}
					className={cn(
						'absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-background px-2 text-base font-medium tracking-wide text-foreground/50 duration-300',
						'rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4',
						'peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100',
						'peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-90 peer-focus:px-2 peer-focus:text-primary/60'
					)}
				>
					{props.placeholder}
				</label>
				{type === 'password' && (
					<button
						onClick={e => {
							e.preventDefault()
							setShowPassword(!showPassword)
						}}
						className={cn(
							'absolute right-2 top-1/2 -translate-y-1/2 text-foreground/50 outline-none ring-0 transition-all duration-200 ease-out',
							'hover:text-foreground/70',
							'active:text-foreground/90 active:outline-none active:ring-0'
						)}
					>
						<Eye className={cn('h-6 w-6', { ['hidden']: showPassword })} />
						<EyeOff className={cn('h-6 w-6', { ['hidden']: !showPassword })} />
					</button>
				)}
			</div>
		)
	}
)

FloatingInput.displayName = 'FloatingInput'

export default FloatingInput
