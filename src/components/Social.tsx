import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/pauloborges-hub' },
  {
    icon: <FaLinkedinIn />,
    path: 'https://www.linkedin.com/in/paulo-victor-borges/',
  },
  {
    icon: <FaYoutube />,
    path: 'https://www.youtube.com/channel/UCzy8z3fHeMQdo3r6MH16ODg',
  },
  { icon: <FaInstagram />, path: 'https://www.instagram.com/paulovicborges/' },
]

interface SocialProps {
  containerStyles: string
  iconStyles: string
}

function Social({ containerStyles, iconStyles }: SocialProps) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  )
}
export default Social
