import { Container, Typography, Box } from '@mui/material';
import React from 'react';
import './vybava.css';
import './textbox.css';


const Alchymie = () => {
  return (
    <Container className='main'>
      <Typography className="boxnadpis1">Dračí Alchymie</Typography>
       <Box className="textbox">
      <Typography className="boxnadpis2">Druhy Dračích Kamenů:</Typography>
      <Typography paragraph className="text1">
      Existuje sedm druhů Dračích Kamenů, každý s unikátními bonusy a vlastnostmi:
      </Typography>
      <div></div>
    </Box>
    </Container>
  );
};

export default Alchymie;