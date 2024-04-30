import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import './textbox.css';
import React, { useState, useEffect } from 'react';

const DračíKamenTable = ({ data }) => {
  return (
    <TableContainer className='textbox2'>
      <Table>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell className='spodnicastfix' align="center" component="th" scope="row" style={{ verticalAlign: 'middle' }}>
                <div className="cell-container">
                  <img className='obrz' src={row.imgIcon} alt={row.nazev} />
                  <span className="cell-text boxnadpis3">{row.nazev}</span>
                </div>
              </TableCell>
              <TableCell align="right" className='spodnicastfix'>
                {row.bonusy.map((bonus, bonusIndex) => (
                  <div className='boxnadpis3' key={bonusIndex}>{bonus}</div>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const Serpa = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const switchMap = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const detailElement = document.querySelector('.xd');
    if (detailElement) {
      detailElement.classList.remove('animate__animated');
      void detailElement.offsetWidth;
      detailElement.classList.add('animate__animated');
    }
  }, [activeIndex]);

  // Data pro Dračí Kameny
  const dračíKamenyData = [
    { 
      nazev: 'Legendární diamant',
      imgIcon: 'https://img.m2icondb.com/114400.png',
      bonusy: ['Inteligence', 'Odolnost proti ledu', 'Odolnost proti ledu', 'Odolnost proti ledu']
    },
    { 
      nazev: 'Mýtická diamant',
      imgIcon: 'https://img.m2icondb.com/115400.png',
      bonusy: ['+15% šance na kritický zásah', '+10 obrana']
    },
    { 
      nazev: 'Legendární rubín',
      imgIcon: 'https://img.m2icondb.com/123400.png',
      bonusy: ['+10% šance na kritický zásah', '+5 obrana']
    },
    { 
      nazev: 'Mýtická rubín',
      imgIcon: 'https://img.m2icondb.com/125400.png',
      bonusy: ['+15% šance na kritický zásah', '+10 obrana']
    },
    { 
      nazev: 'Legendární nefrit',
      imgIcon: 'https://img.m2icondb.com/134400.png',
      bonusy: ['+10% šance na kritický zásah', '+5 obrana']
    },
    { 
      nazev: 'Mýtická nefrit',
      imgIcon: 'https://img.m2icondb.com/135400.png',
      bonusy: ['+15% šance na kritický zásah', '+10 obrana']
    },
    { 
      nazev: 'Legendární safír',
      imgIcon: 'https://img.m2icondb.com/144400.png',
      bonusy: ['+10% šance na kritický zásah', '+5 obrana']
    },
    { 
      nazev: 'Mýtická safír',
      imgIcon: 'https://img.m2icondb.com/145400.png',
      bonusy: ['+15% šance na kritický zásah', '+10 obrana']
    },
    { 
      nazev: 'Legendární granát',
      imgIcon: 'https://img.m2icondb.com/154400.png',
      bonusy: ['+10% šance na kritický zásah', '+5 obrana']
    },
    { 
      nazev: 'Mýtická granát',
      imgIcon: 'https://img.m2icondb.com/155400.png',
      bonusy: ['+15% šance na kritický zásah', '+10 obrana']
    },
    { 
      nazev: 'Legendární onyx',
      imgIcon: 'https://img.m2icondb.com/164400.png',
      bonusy: ['+10% šance na kritický zásah', '+5 obrana']
    },
    { 
      nazev: 'Mýtická onyx',
      imgIcon: 'https://img.m2icondb.com/165400.png',
      bonusy: ['+15% šance na kritický zásah', '+10 obrana']
    },
    { 
      nazev: 'Legendární ametyst',
      imgIcon: 'https://img.m2icondb.com/174400.png',
      bonusy: ['+10% šance na kritický zásah', '+5 obrana']
    },
    { 
      nazev: 'Mýtická ametyst',
      imgIcon: 'https://img.m2icondb.com/175400.png',
      bonusy: ['+15% šance na kritický zásah', '+10 obrana']
    },
  ];

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

      <div>
        <Box className="vedle">
          {dračíKamenyData.map((kámen, index) => (
            <div key={index} className={`boxik velikost ${index === activeIndex ? 'selected' : ''}`} onClick={() => switchMap(index)}>
              <div className='fixik'>
                <img src={kámen.imgIcon} alt={kámen.nazev} />
              </div>
            </div>
          ))}
        </Box>
      </div>
      {activeIndex !== null && <DračíKamenTable data={[dračíKamenyData[activeIndex]]} />} {/* Zobrazí tabulku pouze pokud je aktivní index nenulový */}
    </Container>
  );
};

export default Serpa;
