import { distritos } from './seccionesElectorales.js'

import * as fs from 'fs'
console.log(distritos)
const finder = distrito => {
  const pairs = Object.entries(distritos)
  const toUpperCase = pairs.map(pair => [pair[0], pair[1].map(i => i.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''))])
  const finded = toUpperCase.map(seccion => seccion[1].includes(distrito) ? seccion[0] : null).filter(i => i).join('')
  return finded
}
// http://geojson.io/ para pasar de geo a topo y biceversa
const rawdata = fs.readFileSync('../public/departamentos-buenos_aires.topojson')
const mapa = JSON.parse(rawdata)
const parsedDistritos = mapa.objects['departamentos-buenos_aires'].geometries.map(i => ({ ...i, properties: { ...i.properties, seccion_electoral: finder(i.properties.departamento) } }))
mapa.objects['departamentos-buenos_aires'].geometries = parsedDistritos
fs.writeFileSync('mapa-con-secciones-electorales.topojson', JSON.stringify(mapa))

// process.argv.slice(2).forEach((val, index) => {
//     console.log(`${index}: ${val}`)
//   })
