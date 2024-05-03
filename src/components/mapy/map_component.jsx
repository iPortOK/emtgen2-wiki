
import { Container, Box, Typography } from '@mui/material';
import './mapy.css';

const MapComponent = ({ nazev, imgSrc, pozadi, cekacidoba, dostupneOd, doporuceneBonusy, dropItems, activeIndex }) => {

  return (
    <Container className='celek'>
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
                <Typography className='nazev textos'>Dostupné od úrovně</Typography>
                <Box className='uroven'>
                  <Typography>{dostupneOd}</Typography>
                  </Box>
                </Box>
              </Box>
              <Box className='seznam'>
              <Box>
                <Typography className='nazev textos'>Čekací doba</Typography>
                <Box className='uroven'>
                  <Typography>{cekacidoba} minut</Typography>
                  </Box>
                </Box>
              </Box>
              <Box className='seznam'>
              <Box>
                <Typography className='nazev textos'>Doporučené bonusy</Typography>
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
                <div key={index} className='tooltip-container inv'  >
                  <img src={item.imgSrc} alt="" className='objazek' style={{ backgroundImage: `url('./imgs/inv.png')` }}/>
                  <span className='tooltip'>{item.imgSrc.split('/').pop().replace('.png', '')}</span>
                </div>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default MapComponent;