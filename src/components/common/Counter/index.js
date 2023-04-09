import { animate, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

function Counter({ from = 0, to, className }) {
  const number = Number(to.replace(/^\D+/g, ''))
  const ref = useRef()
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    const controls = animate(from, number, {
      duration: 1,
      onUpdate(value) {
        ref.current.textContent = value.toFixed()
      },
    })
    return () => controls.stop()
  }, [from, inView, number])

  return <p className={className} ref={ref} />
}

export default Counter
