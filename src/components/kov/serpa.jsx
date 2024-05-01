import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import './textbox.css';
import React, { useState, useEffect } from 'react';

const SerpaTable = ({ data }) => {
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

  const serpaData = [
    { 
      nazev: 'Obyčejné',
      imgIcon: 'https://img.m2icondb.com/85001.png',
      bonusy: ['Hodnota absorbace: 1%'],
      barvy: ['', '', '']
    },
    { 
      nazev: 'Jemné',
      imgIcon: 'https://img.m2icondb.com/85002.png',
      bonusy: ['Hodnota absorbace: 5%'],
      barvy: ['', '', '#dfd8c6']
    },
    { 
      nazev: 'Noblesní',
      imgIcon: 'https://img.m2icondb.com/85003.png',
      bonusy: ['Hodnota absorbace: 10%'],
      barvy: ['', '', '#dfd8c6']
    },
    { 
      nazev: 'Uživatelské',
      imgIcon: 'https://img.m2icondb.com/85004.png',
      bonusy: ['Hodnota absorbace: 11-25%'],
      barvy: ['', '', '#dfd8c6']
    },
    { 
      nazev: 'Zesilovač šerpy (5%)',
      imgIcon: './items/ZesilovačŠ.png',
      bonusy: ['Hodnota absorbace: +5%'],
      barvy: ['', '', '#dfd8c6']
    },
    
  ];

  return (
    <Container className='main'>
      <Typography className="boxnadpis1">Systém Šerp</Typography>
      <Box className="textbox">
        <Typography className="boxnadpis2">Co jsou šerpy?</Typography>
        <Typography paragraph className="text1">
        Podobně jako kostýmy, i šerpy můžou propůjčovat postavám bonusy, které vylepšují jejich vlastnosti. Na rozdíl od kostýmů ale šerpy tyto bonusy nezískávají automaticky.
        Tyto bonusy se aktivují absorbováním jiného předmětu.
        </Typography>
        <Typography className="boxnadpis2">Vylepšování šerp</Typography>
        <Typography paragraph className="text1">
        Šerpy se dají vylepšovat do 4 úrovní kvality. Pro dosažení vyšší úrovně je potřeba sloučit dvě šerpy o úroveň nižší.<br></br><br></br>
        &times; Při kombinaci šerp je šance na neúspěch, v takovém případě se spodní šerpa zničí.<br></br>
        &times; Uživatelské šerpy se dají dále vylepšovat pro navýšení absorpčního bonusu kombinací s jinou uživatelskou šerpou. Riziko neúspěchu nehrozí, šerpa si ponechá stávající bonus nebo se o 1-5% zlepší (maximálně na 25%).
        </Typography>

        <div>
        <Box className="vedle">
          {serpaData.map((kámen, index) => (
            <div key={index} className={`boxik velikost ${index === activeIndex ? 'selected' : ''}`} onClick={() => switchMap(index)}>
              <div className='fixik'>
                <img src={kámen.imgIcon} alt={kámen.nazev} />
              </div>
            </div>
          ))}
        </Box>
      </div>
      {activeIndex !== null && <SerpaTable data={[serpaData[activeIndex]]} />}

        <Typography className="boxnadpis2"><br></br>Absorpce bonusů</Typography>
        <Typography paragraph className="text1">
        Šerpy můžou absorbovat část vlastností z jiného předmětu (brnění, zbraně). Množství absorbovaných vlastností závisí na typu šerpy a její úrovni:
        </Typography>


      <Typography paragraph className="text1">
      &times; Absorbované vlastnosti nelze upravovat. Jediná možnost je je smazat certifikátem zrušení a absorbovat je znovu.
      </Typography>

      <Typography className="boxnadpis2">Hodnota absorpce bonusů</Typography>
        <Typography paragraph className="text1">
        Každá šerpa má unikátní hodnotu absorpce bonusů, která určuje, kolik procent z původního bonusu předmětu bude zachováno.<br></br><br></br>
        <b>Příklad:</b><br></br>
        &times; Šerpa mistra (noblesní) s 10% absorpčním bonusem<br></br>
        &times; Úplňkový meč s 30% průměrnou škodou, -11% poškození schopností a o 20% silnější proti nemrtvým<br></br><br></br>
        <b>Výsledek:</b><br></br>
        &times; Průměrná škoda: 10% z 30% = 3%<br></br>
        &times; Poškození schopností: 10% z -11% = -1,1% (zaokrouhleno na 1%)<br></br>
        &times; Síla proti nemrtvým: 10% z 20% = 2%
        </Typography>

        <Typography className="boxnadpis2">Výroba:</Typography>
        <Typography paragraph className="text1">
        Vytvoření <img src="https://img.m2icondb.com/85001.png" alt="" className=''></img> obyčejné šerpy je možné u Theowahdana.<br></br>
        <Box className="uppkybox">
        &#x2022; 1x <img src="./items/Kus Šerpy.png" alt="" className=''></img> Kus Šerpy <br></br>
        &#x2022; 25x <img src="./items/Runa III.png" alt="" className=''></img> Runa III. <br></br>
        &#x2022; 5x <img src="./items/Magický kámen.png" alt="" className=''></img> Magický kámen <br></br>
        &#x2022; 5x <img src="./items/Plán zbroje.png" alt="" className=''></img> Plán zbroje <br></br>
        &#x2022; 4x <img src="./items/Božské ovoce.png" alt="" className=''></img> Božské ovoce<br></br>
        &#x2022; <img src="./items/Yang.png" alt="" className=''></img>10.000.000 yangů
        </Box>   
        </Typography>
      </Box>
    
    </Container>
  );
};



export default Serpa;
