import { useEffect, useState, useRef } from 'react'
import Maps from '/components/Maps'
import SeccionesFooter from 'components/SeccionesFooter'

const Home = () => {
  const divRef = useRef()
  const [height, setHeight] = useState(0)
  useEffect(() => {
    // console.log('div ref', divRef.current.clientHeight)

  }, [divRef])
  return (
    <div className='h-full'>
      <div ref={divRef} className='h-full'>
        <Maps className='h-full' />
      </div>

      <SeccionesFooter />

    </div>

  )
}

export default Home
