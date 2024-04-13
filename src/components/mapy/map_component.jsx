import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import './mapy.css';

const MapComponent = ({ nazev, imgSrc, pozadi, dostupneOd, doporuceneBonusy, dropItems }) => {
  return (
    <Container>
       <Box className='dungeony' style={{ backgroundImage: `url(${pozadi})` }}>
        <Box className="obalovac">
          <Box className='dung'>
            <Typography className='nazev boss'>{nazev}</Typography>
          </Box>
          <Box className="hlavnicast">
            <Box className='img_boss'>
              <img src={imgSrc} alt="" className='obrz_boss'></img>
            </Box>
            <Box className="detaily">
              <Box className='seznam'>
              <Box>
                <Typography className='nazev'>Dostupné od úrovně</Typography>
                <Box className='uroven'>
                  <Typography>{dostupneOd}</Typography>
                  </Box>
                </Box>
              </Box>
              <Box className='seznam'>
              <Box>
                <Typography className='nazev'>Doporučené bonusy</Typography>
                  {doporuceneBonusy.map((bonus, index) => (
                    <Box className='doporucene' key={index}>
                    <img className='iconka' src={bonus.imgSrc} alt=""></img>
                    <Typography>{bonus.text}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className='drop'>
            <Box className='jj dropu'>
              <Typography className='nazev'>Lze dropnout</Typography>
            </Box>
            <Box className='jj'>
              {dropItems.map((item, index) => (
                <img key={index} src={item.imgSrc} alt=""></img>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default MapComponent;