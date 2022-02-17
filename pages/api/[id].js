import { datos_electorales } from './datos_electorales'
export default function hanler (req, res) {
  const { id } = req.query
  res.status(200).json(datos_electorales[id])
}
