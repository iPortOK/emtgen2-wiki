
import { Container, Box, Typography } from '@mui/material';
import './mapy.css';

const MapComponent2 = ({ nazev, imgSrc, metins, pozadi, dostupneOd, doporuceneBonusy, dropItems, activeIndex }) => {

  return (
    <Container className='celek map'>
       <Box className='dungeony' style={{ backgroundImage: `url(${pozadi})` }}>
        <Box className="obalovac">
          <Box className='dung'>
            <Typography className='nazev boss'>{nazev}</Typography>
          </Box>
          <Box className="hlavnicast">
            <Box className="detaily">
              <Box className='seznam'>
              <Box>
                <Typography className='nazev textos'>Dostupné od</Typography>
                <Box className='uroven'>
                  <Typography>{dostupneOd} lv</Typography>
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
              <Box className='seznam'>
              <Box>
                <Typography className='nazev textos'>Metiny</Typography>
                  {metins.map((bonus, index) => (
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
                <div key={index} className='tooltip-container'>
                  <img src={item.imgSrc} alt="" className='objazek' />
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

export default MapComponent2;