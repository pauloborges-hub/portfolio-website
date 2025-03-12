import { motion } from 'framer-motion'

const stairAnimation = {
  initial: {
    top: '0%',
  },
  animate: {
    top: '100%',
  },
  exit: {
    top: ['100%', '0%'],
  },
}

// Calculate the reverse index
function reverseIndex(index: number) {
  const totalSteps = 6
  return totalSteps - index - 1
}

function Stairs() {
  return (
    <>
      {/* Render 6 motion divs, each represents a step.
      Each div will have the same animation defined by the stairAnimation object.
      The delay for each div is calculated dinamically based on it's reversed index, creating the stair effect. */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-white relative"
        />
      ))}
    </>
  )
}
export default Stairs
