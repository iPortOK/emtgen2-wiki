
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
              <Typography className='nazev textos'>Lze dropnout</Typography>
            </Box>
            <Box className='jj'>
            {dropItems.map((item, index) => (
              <div key={index} className='tooltip-container inv' style={{ backgroundImage: `url('./imgs/inv.png')` }}>
                <img src={item.imgSrc} alt={item.imgSrc} className='objazek'/>
                <span className='tooltip'>{item.ks ? `${item.ks}x` : ''} {item.imgSrc.split('/').pop().replace('.png', '')}</span>
                <span className='pocet' >{item.ks}</span>
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