import React from 'react'

interface ContainerProps {
    children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <div className='mx-auto max-w-7xl'>{children}</div>
    )
}
