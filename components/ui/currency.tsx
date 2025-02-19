'use client'

import { useEffect, useState } from "react"

const formatter = new Intl.NumberFormat("en-US", {
    style: 'currency',
    currency: 'USD'
})

interface CurrencyProps {
    value?: string | number
}

export const Currency = ({ value }: CurrencyProps) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!setIsMounted) return null

    return (
        <div className="font-semibold">
            {formatter.format(Number(value))}
        </div>
    )
}
