'use client'
import React from 'react'
import serviceData from "@/data/services.json";
import { BackgroundGradient } from './ui/background-gradient';
import Link from 'next/link';
interface Service{
  id: number,
  title: string,
  slug: string,
  description: string,
  isFeatured: boolean,     
}

function Services() {
  const featuredServices = serviceData.services.filter((service:Service) => service.isFeatured)
return (
  <div className="py-12 bg-gray-900">
      <div>
          <div className="text-center">
              <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED SERVICES</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Grow With the Best</p>
          </div>
      </div>
      <div className="mt-10 mx-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {featuredServices.map((service:Service)=> (
                  <div key={service.id} className="flex justify-center">
                      <BackgroundGradient
                      className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                          <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                              <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{service.title}</p>
                              <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{service.description}</p>
                              {/* <Link href={`/services/${service.slug}`}>
                               Learn More
                              </Link> */}
                          </div>
                      </BackgroundGradient>
                  </div>
              ))}
          </div>
      </div>
      <div className="mt-20 text-center">
          <Link href={"/services"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
          View All Services
          </Link>
      </div>
  </div>
)
}

export default Services