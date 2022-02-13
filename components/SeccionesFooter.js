import {colores} from 'utils/seccionesElectorales'
export default function SeccionesFooter (){
    return(
        <footer className="fixed bottom-0 w-full">
            <ul className="flex flex-row gap-3 justify-center self-center">
                {Object.keys(colores).map((seccion, i)=> (
                <li style={{backgroundColor: colores[seccion]}} className='h-4 w-4 m-4 p-4 text-white border-2 border-black' key={i}>{seccion}</li>
                ))}
                
            </ul>
        </footer>
    )
}

