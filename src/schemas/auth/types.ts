import { z } from 'zod'

import { loginSchema } from '@/schemas/auth/schema'

export type LoginSchema = z.infer<typeof loginSchema>
