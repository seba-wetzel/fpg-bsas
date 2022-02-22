import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import DistritoCard from 'components/DistritoCard'
const Seccion = () => {
  const router = useRouter()
  const { nombre } = router.query
  const [datos, setDatos] = useState()
  useEffect(() => {
    if (nombre) {
      (async function () {
        const data = await fetch(`/api/distrito/${nombre}`)
        const json = await data.json()
        setDatos(json)
      })()
    }
  }, [nombre])
  return (
    <div className='h-full'>
      <div className='my-8'>.</div>
      <div className='h-full'>
          <div className='flex flex-row  m-8 justify-center'> 
          {datos && <DistritoCard distrito={datos} className='md:w-auto'/>}
          </div>
      </div>

    </div>

  )
}

export default Seccion
