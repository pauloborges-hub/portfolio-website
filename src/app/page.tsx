import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'

// Components
import Photo from '@/components/Photo'
import Social from '@/components/Social'
import Stats from '@/components/Stats'

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello, I{"'"}m <br />{' '}
              <span className="text-[#00ff99]">Paulo Borges</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Software developer with over 1 year of experience creating custom
              web applications on demand for various industries. I work
              throughout the entire development cycle, from designing responsive
              interfaces tailored to client needs to implementation and
              deployment, ensuring functional and efficient solutions.
            </p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                // href="https://drive.google.com/file/d/11BNjS4Ufa0kwrn09Abo6Dy_p8yJ-I1tx/view?usp=sharing"
                href="https://drive.google.com/uc?export=download&id=11BNjS4Ufa0kwrn09Abo6Dy_p8yJ-I1tx"
                download="sample.pdf"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 hover:cursor-pointer"
                >
                  <span>Download CV</span>
                  <FiDownload />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-[#00ff99] rounded-full flex justify-center items-center text-[#00ff99] text-base hover:bg-[#00ff99] hover:text-[#1c1c22] hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}
