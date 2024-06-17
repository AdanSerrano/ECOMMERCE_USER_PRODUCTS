'use client'

import { TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

import { GalleryTab } from '@/components/gallery/GalleryTab'
import Image from 'next/image'
import { Image as ImageType } from '@/types'
import React from 'react'

interface GalleryProps {
    images: ImageType[]
}

export const Gallery = ({ images }: GalleryProps) => {
    return (
        <TabGroup as='div' className={'flex flex-col-reverse'}>
            <div className='mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none'>
                <TabList className={'grid grid-cols-4 gap-6'}>
                    {images.map((image) => (
                        <GalleryTab key={image.id} image={image} />
                    ))}
                </TabList>
            </div>
            <TabPanels className={"aspect-square w-full"}>
                {images.map((image) => (
                    <TabPanel key={image.id}>
                        <div className='aspect-square relative h-full w-full sm:rounded-lg overflow-hidden'>
                            <Image
                                fill
                                src={image.url}
                                alt='Image'
                                className='object-cover object-center'
                                width={500}
                                height={500}
                            />
                        </div>
                    </TabPanel>
                ))}
            </TabPanels>
        </TabGroup>
    )
}
