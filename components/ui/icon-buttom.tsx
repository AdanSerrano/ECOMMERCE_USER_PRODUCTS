import React, { MouseEventHandler } from 'react'

import { Button } from './button'
import { cn } from '@/lib/utils'

interface IconButtomProps {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
    icon: React.ReactElement
    className?: string
}

export const IconButtom = ({ onClick, icon, className }: IconButtomProps) => {
    return (
        <Button
            variant={'destructive'}
            size={'icon'}
            onClick={onClick}
            className={cn("rounded-full flex items-center justify-center bg-white hover:bg-white border shadow-md p-2 hover:scale-110 transition", className)}
        >
            {icon}
        </Button>
    )
}
