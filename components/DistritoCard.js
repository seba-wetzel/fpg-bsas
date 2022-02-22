import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function capitalize(word) {
    return word
      .split(' ')
      .map((letter) =>{
      const firstLetter = letter.charAt(0).toUpperCase()
      return firstLetter.concat(letter.slice(1))
    }
        
      )
      .join(' ');
  }
  

export default function DistritoCard({distrito}) {
  return (
    <Card variant="outlined" sx={{ minWidth: 275 }} >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <Link href={`/seccion/${distrito.seccionElectoral}`}>
            <a> Seccion electoral: {distrito.seccionElectoral}</a>
        </Link>
        </Typography>
        <Typography variant="h5" component="div">
        <Link href={`/distrito/${distrito.data.distrito}`}>
            <a> {capitalize(distrito.data.distrito)} {bull} {distrito.data.fuerza_gobierno.toUpperCase()}</a>
            </Link>
          
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {distrito.data.intendencia}
        </Typography>
        <Typography variant="body2">
          Cantidad de Consejales: {distrito.data.concejalias}
        </Typography>
        <Typography variant="body2">
          Cantidad de Consejeros Escolares: {distrito.data.consejalias_escolares}
         
        </Typography>
        <Typography variant="body2">
          Poblacion: {new Intl.NumberFormat().format(distrito.data.poblacion)}
        </Typography>
      </CardContent>

    </Card>
  );
}