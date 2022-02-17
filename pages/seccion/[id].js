import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { distritos } from '../../utils/seccionesElectorales'

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
        {datos && datos.distritos.map((d, i) => <div key={i} className='flex flex-row gap-4'>
          <p>Distrito: {d.distrito}</p>
          <p>Intendencia: {d.intendencia}</p>
                                                </div>
        )}
      </div>

    </div>

  )
}

export default Seccion
