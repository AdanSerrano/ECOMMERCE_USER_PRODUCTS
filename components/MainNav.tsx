'use client'

import { Category } from '@/types'
import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

interface MainNavProps {
    data: Category[]
}

export const MainNav = ({ data }: MainNavProps) => {
    const pathname = usePathname()
    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`
    }))
    return (
        <nav>
            {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                        'text-sm font-medium transition-colors hover:text-black',
                        route.active ? 'text-black' : 'text-neutral-500'
                    )}
                >
                    {route.label}
                </Link>
            ))}
        </nav>
    )
}
