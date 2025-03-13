'use client'

import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'
import { useSwiper } from 'swiper/react'

interface WorkSliderButtonsProps {
  containerStyles: string
  buttonStyles: string
  // iconsStyles: string
}

function WorkSliderButtons({
  containerStyles,
  buttonStyles,
  // iconsStyles,
}: WorkSliderButtonsProps) {
  const swiper = useSwiper()

  return (
    <div className={containerStyles}>
      <button
        className={buttonStyles}
        type="button"
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold />
      </button>
      <button
        className={buttonStyles}
        type="button"
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold />
      </button>
    </div>
  )
}
export default WorkSliderButtons
