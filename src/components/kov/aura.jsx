import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import './textbox.css';
import React, { useState, useEffect } from 'react';

const AuraTable = ({ data }) => {
  return (
    <TableContainer className='textbox2'>
      <Table>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell className='spodnicastfix hello' align="center" component="th" scope="row" style={{ verticalAlign: 'middle' }}>
                <div className="cell-container">
                  <img className='obrz' src={row.imgIcon} alt={row.nazev} />
                  <span className="cell-text boxnadpis3">{row.nazev}</span>
                </div>
              </TableCell>
              <TableCell align="left" className='spodnicastfix hello2'>
              {row.bonusy.map((bonus, bonusIndex) => (
                  <div className='boxnadpis4' key={bonusIndex} style={{ color: row.barvy[bonusIndex] }}>{bonus}</div>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const Aura = () => {
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

  const auraData = [
    { 
      nazev: 'Ledová runa s aurou',
      imgIcon: 'https://img.m2icondb.com/49990.png',
      bonusy: ['Item sloužící k vylepšování kostýmu s aurou', 'Lze jej získat v mapě od úrovně 115'],
      barvy: ['', '', '']
    },
    { 
      nazev: 'Běžný kostým s aurou',
      imgIcon: 'https://img.m2icondb.com/49001.png',
      bonusy: ['Hodnota absorbace: 1%', 'Magický útok/útok zbraní +1%', 'Úroveň aury: 0-49'],
      barvy: ['', '', '#dfd8c6']
    },
    { 
      nazev: 'Prostý kostým s aurou',
      imgIcon: 'https://img.m2icondb.com/49002.png',
      bonusy: ['Hodnota absorbace: 5%', 'Magický útok/útok zbraní +2%', 'Úroveň aury: 50-99'],
      barvy: ['', '', '#dfd8c6']
    },
    { 
      nazev: 'Vznešený kostým s aurou',
      imgIcon: 'https://img.m2icondb.com/49003.png',
      bonusy: ['Hodnota absorbace: 10%', 'Magický útok/útok zbraní +4%', 'Úroveň aury: 100-149'],
      barvy: ['', '', '#dfd8c6']
    },
    { 
      nazev: 'Zářivý kostým s aurou',
      imgIcon: 'https://img.m2icondb.com/49004.png',
      bonusy: ['Hodnota absorbace: 15%', 'Magický útok/útok zbraní +6%', 'Úroveň aury: 150-199'],
      barvy: ['', '', '#dfd8c6']
    },
    { 
      nazev: 'Úžasný kostým s aurou',
      imgIcon: 'https://img.m2icondb.com/49005.png',
      bonusy: ['Hodnota absorbace: 20%', 'Magický útok/útok zbraní +8%', 'Úroveň aury: 200-249'],
      barvy: ['', '', '#dfd8c6']
    },
    { 
      nazev: 'Zářivý kostým s aurou',
      imgIcon: 'https://img.m2icondb.com/49006.png',
      bonusy: ['Hodnota absorbace: 25%', 'Magický útok/útok zbraní +10%', 'Úroveň aury: 250'],
      barvy: ['', '', '#dfd8c6']
    },
    { 
      nazev: 'Zesilovač aury (3%)',
      imgIcon: './items/Zesilovač3.png',
      bonusy: ['Hodnota absorbace: +3%', 'Lze vyrobit u pirátského čističe.'],
      barvy: ['', '', '']
    },
    { 
      nazev: 'Zesilovač aury (5%)',
      imgIcon: './items/Zesilovač5.png',
      bonusy: ['Hodnota absorbace: +5%', 'Lze vyrobit u pirátského čističe.'],
      barvy: ['', '', '']
    },
    { 
      nazev: 'Zesilovač aury (10%)',
      imgIcon: './items/Zesilovač10.png',
      bonusy: ['Hodnota absorbace: +10%', 'Lze dropnout z Worldbosse, který se nachází na ostrově přeludů.'],
      barvy: ['', '', '']
    },
  ];

  return (
    <Container className='main'>
      <Typography className="boxnadpis1">Kostým s aurou</Typography>
      <Box className="textbox">
        <Typography className="boxnadpis2">Základní informace:</Typography>
        <Typography paragraph className="text1">
        Kostým s aurou patří k systémům, se kterými se setkáváme až v pozdější části hry. Lze ho používát od úrovně 90+, avšak material na vylepšování lze získat až od úrovně 115.
        Kostým s aurou funguje na stejném principu jako šerpa, s tím rozdílem, že místo absorbace zbraně absorbujete buď štít, náhrdelník, náušnice nebo náramek.
        Navíc, jako bonus, má kostým s aurou v základu procentuální Magický útok / útok zbraní. Hodnota se zvyšuje s úrovní aury. S úrovní aury se mění i její vzhled.
        </Typography>
       
        <Typography className="boxnadpis2">Výroba:</Typography>
        <Typography paragraph className="text1">
        Vytvoření <img src="https://img.m2icondb.com/49001.png" alt="" className=''></img>běžného kostýmu s aurou je možné u Spisovatele.<br></br>
          <Box className="uppkybox">
        &#x2022; 25x <img src="./items/Oxid titaničitý.png" alt="" className=''></img> Oxid titaničitý <br></br>
        &#x2022; 25x <img src="./items/Šupiny Hydry.png" alt="" className=''></img> Šupiny Hydry <br></br>
        &#x2022; 25x <img src="./items/Ztracený list.png" alt="" className=''></img> Ztracený list <br></br>
        &#x2022; 300x <img src="./items/Zelená dračí fazole.png" alt="" className=''></img> Zelená dračí fazole <br></br>
        &#x2022; 100x <img src="./items/Kus Šerpy.png" alt="" className=''></img> Kus Šerpy<br></br>
        &#x2022; <img src="./items/Yang.png" alt="" className=''></img> 2.000.000.000 yangů
        </Box>
        </Typography>
      </Box>

      <div>
        <Box className="vedle">
          {auraData.map((kámen, index) => (
            <div key={index} className={`boxik velikost ${index === activeIndex ? 'selected' : ''}`} onClick={() => switchMap(index)}>
              <div className='fixik'>
                <img src={kámen.imgIcon} alt={kámen.nazev} />
              </div>
            </div>
          ))}
        </Box>
      </div>
      {activeIndex !== null && <AuraTable data={[auraData[activeIndex]]} />}
    
    </Container>
  );
};



export default Aura;
