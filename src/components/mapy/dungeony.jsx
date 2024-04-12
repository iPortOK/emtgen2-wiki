import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import './mapy.css';

const Dungeony = () => {
  return (
    <Container>
        <Box className='dungeony'>
          <Box className="obalovac">
            <Box className='dung'>
              <Typography className='nazev boss'>Brutální velitel</Typography>
            </Box>
            <Box className="hlavnicast">
              <Box className='img_boss'>
                  <img src='./imgs/boss.png' alt="" className='obrz_boss'></img>
              </Box>             
              <Box className="detaily">
                <Box className='seznam'>
                  <Box>
                  <Typography className='nazev'>Dostupné od úrovně</Typography>
                  <Box className='uroven'>
                    <Typography>75 - 105</Typography>
                  </Box>
                  </Box>
                </Box>
                <Box className='seznam'>
                  <Box>
                  <Typography className='nazev'>Doporučené bonusy</Typography>
                  <Box className='doporucene'>
                    <img src='https://img.m2icondb.com/53290.png' alt=""></img>
                    <Typography>Sila asjfdbsa</Typography>
                  </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className='drop'>
              <Box className='jj dropu'>
              <Typography className='nazev'>Lze dropnout</Typography>
              </Box>
              <Box className='jj'>
              <img src='https://img.m2icondb.com/06080.png' alt=""></img>
              <img src='https://img.m2icondb.com/13160.png' alt=""></img>
              </Box>
            </Box>
          </Box>
        </Box>
    </Container>
  );
};

export default Dungeony;
