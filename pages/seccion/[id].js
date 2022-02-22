import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import DistritoCard from '../../components/DistritoCard'
const Seccion = () => {
  const router = useRouter()
  const { id } = router.query
  const [datos, setDatos] = useState()
  useEffect(() => {
    if (id) {
      (async function () {
        const data = await fetch(`/api/${id}`)
        const json = await data.json()
        setDatos(json)
      })()
    }
  }, [id])
  return (
    <div className='h-full'>
      <div className='my-8'>.</div>
      <div className='h-full'>
      <div className='flex  m-8 gap-5'> 
        {datos && datos.distritos.map((d, i) =>{
          const prop = {seccionElectoral: id, data: d}

return <DistritoCard key={i} distrito={prop} className='md:w-auto'/>
        } 
          
        )}
        </div>
      </div>

    </div>

  )
}

export default Seccion
