import { useState } from 'react'
import { fields as options } from '/utils/Fields'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle'
import Select from '@mui/material/Select'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import TextField from '@mui/material/TextField'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import * as MdIcons from 'react-icons/md'

const ITEM_HEIGHT = 24
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      minHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP * options.length,
      width: 200
    }
  }
}

export const FieldsCreator = ({  onCreate}) => {
  
  const [fields, setField] = useState({});
  
  const handleChange = (event) => {
    const {
      target: { value }
    } = event
    setField(value)
  }
  const create = () => {
    onCreate(fields)
  }
  const [optionName, setOptionName] = useState('')

  return (

    <div className='flex flex-col gap-3 m-3'>

      <div className='flex flex-col md:flex-row gap-3'>
        <TextField
        className='flex-1'
        id='outlined-uncontrolled'
        label='Nombre del campo'
        value={fields?.name ?? ''}
        onChange={({ target: { value } }) => setField({ ...fields, name: value })}
      />
        <Select
          displayEmpty
          value={fields}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(fields) => {
            if (Object.keys(fields).length>1) {
              return (
                <MenuItem
                  value={fields}
                  className='p-0 m-0'
                >
                  <ListItemIcon sx={{
                    fontSize: '1.5rem'
                  }}
                  >
                    <span className='p-0 m-0'>{fields.icon ? MdIcons[fields.icon]() : ''}</span>
                  </ListItemIcon>
                  <ListItemText primary={fields.label} />
  
                </MenuItem>
              )
              
            }
            return <div className=''> <em>Selecciona que tipo de campo queres agregar</em></div>
            
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value=''>
            <em>Placeholder</em>
          </MenuItem>
          {options.map((item, i) => (
            <MenuItem
              key={i}
              value={item}
            >
              <ListItemIcon sx={{
                fontSize: '2rem'
              }}
              >
                {MdIcons[item.icon]()}
              </ListItemIcon>
              <ListItemText primary={item.label} />

            </MenuItem>
          ))}
        </Select>

        {fields?.type === 'select' &&

          <TextField
            id='outlined-uncontrolled'
            label='Agrega una opcion'
            value={optionName}
            onChange={({ target: { value } }) => setOptionName(value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                setField({ ...fields, options: [...fields.options, optionName] })
                setOptionName('')
              }
            }}
          />}
        <Button 
        onClick={create} 
        variant="outlined" 
        startIcon={<AddCircleIcon />}>
        Agregar Campo
      </Button>
      </div>
      {fields?.type === 'select' &&
        <div className='flex flex-col gap-3'>
                <p className='
                text-sm italic
                '>Opciones para seleccionar</p>
        <Stack className='flex flex-row' direction='row' spacing={1}>

          {fields.options.length ? fields.options.map((item, i) => (
            <Chip key={i} label={item} onDelete={() => setField({ ...fields, options: fields.options.filter((_, j) => j !== i) })} />
          )): <em>No hay opciones</em>}
        </Stack>
        </div>}
    </div>
  )
}
