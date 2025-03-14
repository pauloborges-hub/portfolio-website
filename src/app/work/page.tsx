'use client'

import { motion } from 'framer-motion'
import React, { useState } from 'react'

import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { BsGithub, BsPlayCircle } from 'react-icons/bs'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import WorkSliderButtons from '@/components/WorkSliderButtons'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    num: '01',
    category: 'front-end',
    title: 'project 1',
    description:
      'Fusion Web Solutions website, built with Next.js and Tailwind CSS, leveraging the best SEO practices. It utilizes Next.js features like Server-Side Rendering (SSR) to maximize performance and minimize client-side JavaScript, ensuring a fast, efficient, and optimized user experience. Additionally, TypeScript is used throughout the entire application to enhance code stability and provide strong type protection.',
    stack: [
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
      { name: 'Typescript' },
    ],
    image: '/assets/work/thumb1.png',
    live: 'https://fusionweb.dev.br/',
    github: '',
  },
  {
    num: '02',
    category: 'full-stack',
    title: 'project 1',
    description:
      'Smart PDF is a powerful SaaS application that enables intelligent chat interactions with PDF documents. Users can upload PDFs, query their content through an AI-driven chat interface, and receive precise, contextualized responses. The platform offers secure authentication, dynamic content processing, seamless payment integration, and a responsive, accessibility-focused design to enhance the user experience.',
    stack: [{ name: 'Next.js' }, { name: 'Firebase' }, { name: 'LangChain' }],
    image: '/assets/work/thumb2.png',
    live: 'https://chat-to-pdf-ochre.vercel.app/',
    github: '',
  },
  {
    num: '03',
    category: 'front-end',
    title: 'project 1',
    description:
      'Fusion Web Solutions website, built with Next.js and Tailwind CSS, leveraging the best SEO practices. It utilizes Next.js features like Server-Side Rendering (SSR) to maximize performance and minimize client-side JavaScript, ensuring a fast, efficient, and optimized user experience. Additionally, TypeScript is used throughout the entire application to enhance code stability and provide strong type protection.',
    stack: [{ name: 'React' }, { name: 'CSS' }, { name: 'Javascript' }],
    image: '/assets/work/thumb3.png',
    live: 'https://gbgesso.com.br/',
    github: '',
  },
  {
    num: '04',
    category: 'full-stack',
    title: 'project 1',
    description:
      'A full-featured e-commerce application using Next.js, TypeScript, Sanity (headless CMS), Clerk (authentication), Stripe (payment processing), Zustand (state management), and Tailwind CSS (styling). The project includes robust e-commerce features such as secure sign-up and login, a dynamic shopping cart, seamless payment integration, CMS-powered product management, and afully responsive design focused on accessibility and user experience.',
    stack: [{ name: 'Next.js' }, { name: 'Sanity' }, { name: 'Typescript' }],
    image: '/assets/work/thumb4.png',
    live: 'https://ecommerce-sanity-six-zeta.vercel.app/',
    github: '',
  },
  {
    num: '05',
    category: 'front-end',
    title: 'project 1',
    description:
      'A six-page website for MG-Tek Gráfica, featuring interactive carousels and a fully responsive design optimized for mobile devices. The project emphasizes usability and performance, delivering an intuitive user experience. Future plans include expanding the application into a full-stack e-commerce platform to enhance features and customer interaction.',
    stack: [{ name: 'React' }, { name: 'CSS' }, { name: 'Javascript' }],
    image: '/assets/work/thumb5.png',
    live: 'https://mgtekgrafica.com.br/',
    github: '',
  },
]

function WorkPage() {
  const [project, setProject] = useState(projects[0])

  function handleSlideChange(swiper: SwiperType) {
    // get current slide index
    const currentIndex = swiper.activeIndex

    // update project state based on current slide index
    setProject(projects[currentIndex])
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-[#00ff99] transition-all duration-500 capitalize">
                {project.category} project
              </h2>

              {/* project description */}
              <p className="text-white/60">{project.description}</p>

              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-[#00ff99]">
                    {item.name}
                    {/* removes the last comma */}
                    {index !== project.stack.length - 1 && ','}
                  </li>
                ))}
              </ul>

              {/* border */}
              <div className="border border-white/20" />

              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:cursor-pointer">
                        <BsPlayCircle className="text-white text-3xl group-hover:text-[#00ff99]" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}
                {/* <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-[#00ff99]" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link> */}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full h-[460px]">
                  <div className="h-[460px] relative group flex justify-center items-center">
                    {/* Overlay */}
                    <div className="absolute inset-0 z-10" />

                    {/* Image Container */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt="Project Image"
                        quality={100}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* slider buttons */}
              <WorkSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                buttonStyles="bg-[#00ff99] hover:bg-[#00ff99]-hover text-[#1c1c22] text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all hover:cursor-pointer"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
export default WorkPage
