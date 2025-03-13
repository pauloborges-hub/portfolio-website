'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowDownRight } from 'react-icons/bs'

const services = [
  {
    num: '01',
    title: 'Web Development',
    description:
      'I specialize in building high-quality custom websites and applications tailored to your business needs. From bespoke web applications to fully functional e-commerce platforms, I can ensure you a seamless user experience with modern, scalable, and secure solutions.',
    href: '',
  },
  {
    num: '02',
    title: 'AI-Powered Apps',
    description:
      'Supercharge your web applications with cutting-edge AI and automation. From smart chatbots that enhance customer interactions to predictive analytics that drive better decision-making, I can integrate next-gen AI features to make your apps more intelligent, efficient, and responsive.',
    href: '',
  },
  {
    num: '03',
    title: 'SaaS Apps & E-Commerce',
    description:
      'Empower your business with high-performance SaaS applications and dynamic e-commerce platforms. Whether you are launching a subscription-based service or an online store, I can build scalable, secure, and feature-rich solutions designed for seamless user experiences and long-term success.',
    href: '',
  },
  {
    num: '04',
    title: 'SEO & Performance',
    description:
      'Maximize your online presence with SEO-driven strategies and high-performance optimization. I will ensure your website is fast, search engine-friendly, and built for conversions, helping you rank higher and deliver a seamless user experience.',
    href: '',
  },
]

function ServicesPage() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-1 flex-col justify-center gap-6 group"
            >
              {/* top */}
              <div className="w-full flex justify-between items-center group">
                <div className="text-5xl font-extrabold text-outline text-transparent peer transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-[#00ff99] transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-[#1c1c22] text-3xl" />
                </Link>
              </div>

              {/* title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-[#00ff99] transition-all duration-500">
                {service.title}
              </h2>

              {/* description */}
              <p className="text-white/60">{service.description}</p>

              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
export default ServicesPage
