import { datos_electorales } from '../datos_electorales'
function search (val) {
  const needle = val.toLowerCase()
  const normalize = (input)=> input.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  const result = Object.values(datos_electorales).map(({distritos}) => distritos.filter(i=>normalize(i.distrito).indexOf(needle) > -1))
  const seccionElectoral = result.findIndex(item=> item.length) + 1
  const data = result.flat()[0]
  return {seccionElectoral, data}
}

export default function hanler (req, res) {
    const { name } = req.query
    const result = search(name)
    res.status(200).json(result)
  }