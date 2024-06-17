import React, { MouseEventHandler } from 'react'

import { Button } from './button'

interface IconButtomProps {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
    icon: React.ReactElement
    className?: string
}

export const IconButtom = ({ onClick, icon, className }: IconButtomProps) => {
    return (
        <Button
            variant={'outline'}
            size={'icon'}
        >
            {icon}
        </Button>
    )
}
