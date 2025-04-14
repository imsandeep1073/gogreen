import React from 'react'
// import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import BenifitsofPick from '../pickdrop/BenifitsofPick'

const Carouselbox = () => {
    const datacarousel = [
        {
            img: "/slider_biker.png",
            title: "Speed that delivers",
            // description: "Our delivery partners are trained to deliver your orders quickly and efficiently."
        },
        {
            img: "/slider_pickup.png",
            title: "Flexible Scheduling",
            // description: "We offer flexible scheduling options to suit your busy lifestyle."
        },
        {
            img: "/slider_dliver.png",
            title: "Pick & Drop Made Easy",
            description: "Need to send documents, packages, or items across town? Our Pick & Drop service is just a tap away."
        },
        {
            img: "/slider_biker.png",
            title: "Speed that delivers",
            // description: "Our delivery partners are trained to deliver your orders quickly and efficiently."
        },
        {
            img: "/slider_pickup.png",
            title: "Flexible Scheduling",
            // description: "We offer flexible scheduling options to suit your busy lifestyle."
        },
        {
            img: "/slider_dliver.png",
            title: "Pick & Drop Made Easy",
            description: "Need to send documents, packages, or items across town? Our Pick & Drop service is just a tap away."
        }
    ]

    return (
        <div className='max-w-[1500px] mx-auto'>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="our_carouselCustom max-w-[1200px] ml-auto mt-20"
            >
                <CarouselContent>
                    {datacarousel.map((data, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="relative rounded-xl overflow-hidden shadow-lg">
                                <img
                                    src={data.img}
                                    alt={data.title}
                                    className="w-full h-auto object-cover"
                                />

                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="bg-white/30 backdrop-blur-md border border-white rounded-lg px-4 py-2 text-white text-[21px] font-medium">
                                        <p className="font-bold uppercase text-left"> {data.title}</p>
                                        {data.description && (
                                            <p className="text-sm mt-1 font-light uppercase">
                                                {data.description}
                                            </p>
                                        )}
                                    </div>


                                </div>
                            </div>

                        </CarouselItem>

                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>
    )
}

export default Carouselbox


