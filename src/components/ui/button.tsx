import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import type * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset white transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-[#00ff99] text-[#1c1c22] hover:bg-[#00ff99]-hover',
        primary: 'bg-primary text-white',
        outline:
          'border border-[#00ff99] bg-transparent text-[#00ff99] hover:bg-[#00ff99] hover:text-[#1c1c22]',
      },
      size: {
        default: 'h-[44px] px-6',
        sm: 'h-[48px] px-6',
        lg: 'h-[56px] px-8 text-sm uppercase tracking-[2px]',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
