import { Container } from '@/components/ui/container'
import Link from 'next/link'
import { MainNav } from '@/components/MainNav'
import { NavbarActions } from '@/components/NavbarActions'
import React from 'react'
import { getCategories } from '@/actions/get-categories'

export const revalidate = 0;

export const Navbar = async () => {
    const categories = await getCategories()
    return (
        <div className='border-b'>
            <Container>
                <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center'>
                    <Link
                        className='ml-4 flex lg:ml-0 gap-x-2'
                        href={'/'}
                    >
                        <p className='font-bold text-xl'>
                            STORE
                        </p>
                    </Link>
                    <MainNav data={categories} />
                    <NavbarActions />

                </div>
            </Container>
        </div>
    )
}

