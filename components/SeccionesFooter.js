import fontColorContrast from 'font-color-contrast'
import { colores } from 'utils/seccionesElectorales'
export default function SeccionesFooter () {
  return (
    <footer className='fixed bottom-0 w-full'>
      <ul className='flex flex-row justify-center self-center place-items-center'>
        {Object.keys(colores).map((seccion, i) => (
          <li style={{ backgroundColor: colores[seccion], color: fontColorContrast(colores[seccion]) }} className='h-4 w-4 m-auto my-4 p-4 border-2 border-black' key={i}>{seccion}</li>
        ))}

      </ul>
    </footer>
  )
}
