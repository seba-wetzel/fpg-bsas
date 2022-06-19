import { useEffect, useState, useRef } from 'react'
import { useFirestore, useFirestoreAdd } from '../hooks/firestoreHooks'
import { FieldsCreator } from '/components/FildsCreator'
import IconButton from '@mui/material/Button'
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { Divider } from '@mui/material'

const NewFieldElement = ({ field }) => {
  const [value, setValue] = useState(field.type === 'checkbox' ? field.value : '')
  switch (field.type) {
    case 'text': return <input name={field.name} className='w-full h-12 p-2 mr-8 bg-transparent' type='text' value={value} onChange={(e) => setValue(e.target.value)} placeholder={field.placeholder} />
    case 'number': return <input name={field.name} className='w-full h-12 p-2 mr-8 bg-transparent' type='number' value={value} onChange={(e) => setValue(e.target.value)} label={field.placeholder} placeholder={field.placeholder} />
    case 'date': return <input name={field.name} className='w-full h-12 p-2 mr-8 bg-transparent' type='date' value={value} onChange={(e) => setValue(e.target.value)} />
    case 'time': return <input name={field.name} className='w-full h-12 p-2 mr-8 bg-transparent' type='time' value={value} onChange={(e) => setValue(e.target.value)} />
    case 'text-area': return <textarea name={field.name} className='w-full h-12 p-2 mr-8 bg-transparent' value={value} onChange={(e) => setValue(e.target.value)} placeholder={field.placeholder} />
    case 'select': return <select name={field.name} className='w-full h-12 p-2 mr-8 bg-transparent' value={value} onChange={(e) => setValue(e.target.value)}>{field.options.map(option => <option key={option} value={option}>{option}</option>)}</select>
    case 'checkbox': return <label className='w-full h-12 p-2 mr-8 bg-transparent'><input name={field.name} type='checkbox' value={value} onChange={(e) => setValue(e.target.value)} /> {field.label} </label>
    default: return null
  }
}
const createFieldElement = (field) => (
  <NewFieldElement field={field} key={crypto.randomUUID()} />

)
const CargarDatos = () => {
  // Ejemplo de como leer y guardar datos en Firestore con hooks
  // const snapshot = useFirestore("distritos");
  // const [distritos, setDistritos] = useFirestoreAdd("distritos");
  // useEffect(() => {
  //     console.log(distritos);
  //     setDistritos({nombre: "Moreno"});
  // }
  // , [])

  // useEffect(() => {
  //     console.log(snapshot);
  // }
  // , [snapshot]);

  const [field, setField] = useState({})
  const [fields, setFields] = useState([])
  const formRef = useRef()
  const handleAddField = () => {
    if (Object.keys(field).length > 0) {
      const newField = createFieldElement(field)
      setFields([...fields, newField])
    }
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    const filterElements = [...formRef.current.elements].filter(e => e.type !== 'submit')
    const formElements = filterElements.map((e) => ({ type: e.type, name: e.name, value: e.value, options: e?.options }))
    const formElementsWithOptions = formElements.map(e => e.type === 'select-one' ? { ...e, options: [...e.options].map(o => o.value) } : e)
    console.log(formElementsWithOptions)
  }
  return (
    <div>
      <h1 className='flex flex-col  '>
        Campos:

      </h1>
      <form ref={formRef} onSubmit={handlerSubmit} className='flex flex-col'>
        {fields.map((field, i) => (
          <div key={i} className='flex flex-row border-2 rounded-lg  m-2 relative hover:border-gray-600'>

            {field}
            <button className='absolute right-1 top-2 ' onClick={() => setFields(fields.filter((x, y) => i !== y))}>
              <HighlightOffIcon className='hover:bg-red-600  hover:text-white rounded-full' />
            </button>

          </div>
        ))}
        <button type='submit'> Enviar</button>
      </form>
      <Divider />
      <div className='flex flex-row justify-start content-center items-center '>
        <Divider />
        <FieldsCreator fields={field} handleChange={setField} />

        <Button onClick={handleAddField} variant="outlined" startIcon={<AddCircleIcon />}>
        Agregar Campo
      </Button>
      </div>

    </div>
  )
}
export default CargarDatos
