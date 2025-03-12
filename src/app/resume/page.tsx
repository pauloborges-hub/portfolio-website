'use client'

import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { motion } from 'framer-motion'
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'
// about data
const about = {
  title: 'About me',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quisquam odio nihil eveniet nobis minima neque hic.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Paulo Borges',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+55) 53 98458 2888',
    },
    {
      fieldName: 'Experience',
      fieldValue: '1+ Years',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Brazilian',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Portuguese, Spanish',
    },
  ],
}

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quasi minima fugiat distinctio officiis molestiae cum mollitia.',
  items: [
    {
      company: 'Fusion Web Solutions',
      position: 'Full Stack Developer & CEO',
      duration: '2024 - Present',
    },
    {
      company: 'MG-Tek Printing Company',
      position: 'Freelance Developer',
      duration: '2024',
    },
    {
      company: 'GB Gesso Company',
      position: 'Freelance Developer',
      duration: '2024',
    },
    {
      company: 'Smart PDF SaaS App',
      position: 'Freelance Developer',
      duration: '2025 - Present',
    },
  ],
}

// education data
const education = {
  icon: '/assets/resume/badge.svg',
  title: 'My education',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quasi minima fugiat distinctio officiis molestiae cum mollitia.',
  items: [
    {
      institution: 'IFSUL-RS',
      degree: 'Electronics Technician',
      duration: '2012 - 2017',
    },
    {
      institution: 'IFSUL-RS',
      degree: 'Electrical Engineering Bachelor',
      duration: '2018 - Present',
    },
    {
      institution: 'UniCesumar',
      degree: 'Systems Analysis and Development Technologist',
      duration: '2024 - Present',
    },
    {
      institution: 'MAB Idiomas',
      degree: 'English Course',
      duration: '2014 - 2018',
    },
  ],
}

//skills data
const skills = {
  title: 'My skills',
  description:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et atque quidem earum modi qui laborum ad vitae incidunt quaerat doloremque voluptates veniam adipisci amet illum cum placeat, temporibus dolor. Nisi?',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <FaReact />,
      name: 'react',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
    },
    {
      icon: <FaFigma />,
      name: 'figma',
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js',
    },
  ],
}

function ResumePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience" className="hover:cursor-pointer">
              Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="hover:cursor-pointer">
              Education
            </TabsTrigger>
            <TabsTrigger value="skills" className="hover:cursor-pointer">
              Skills
            </TabsTrigger>
            <TabsTrigger value="about" className="hover:cursor-pointer">
              About me
            </TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-[#00ff99]">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-[#00ff99]" />
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-[#00ff99]">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-[#00ff99]" />
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232339] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-[#00ff99] transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}
export default ResumePage
