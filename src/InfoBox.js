import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
function InfoBox({title,cases,total}) {
  return (
    <Card className="infoBox">
      <CardContent>
        <Typography className="infoBox__title" color="text.secondary">
         {title}
        </Typography>
        <h2  className="infoBox__cases">{cases}</h2>
        <Typography className="infoBox__total" color="text.secondary">
         {total} Total
        </Typography>
      </CardContent>
    
  </Card>
  )
}

export default InfoBox
