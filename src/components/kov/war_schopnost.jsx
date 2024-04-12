import React from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';
import './textheader.css';
import './tabulka.css';

const WarriorSkills = ({ schopnosti, nadpis }) => {
  return (
    <Container className='main schopnostifix'>
      <div className='cara niz'>
        <Typography className="carik text nadpis"> {nadpis}</Typography>
      </div>
      
      <TableContainer className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className='nazevtabulky one'>Název</TableCell>
              <TableCell className='nazevtabulky two'>Popis</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schopnosti.map((schopnost, index) => (
              <TableRow key={index}>
                <TableCell className='radecek one'>
                  <div className='fix'>
                    <img src={schopnost.obrazek} alt={''} style={{ width: '32px', height: '32px', marginRight: "10px" }} />
                    {schopnost.nazev}
                  </div>
                </TableCell>
                <TableCell className='radecek two'>{schopnost.popis}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

const WarSchopnost = () => {
  const warrior1Skills = [
    { obrazek: 'https://img3.m2icondb.com/geomgyeong_03.png', nazev: 'Aura meče', popis: 'Zvyšuje hodnotu útoku, zesílení pomocí síly.' },
    { obrazek: 'https://img3.m2icondb.com/jeongwi_03.png', nazev: 'Bojové zuření', popis: 'Zvyšuje rychlost útoku a odolnost proti mobům.' },
    { obrazek: 'https://img3.m2icondb.com/tanhwan_03.png', nazev: 'Pádit', popis: 'Rychlý a prorážecí útok.' },
    { obrazek: 'https://img3.m2icondb.com/gihyeol_03.png', nazev: 'Síla života', popis: ' Silné plošné poškození.' },
    { obrazek: 'https://img3.m2icondb.com/palbang_03.png', nazev: 'Smršť meče', popis: 'Silné plošné poškození.' },
    { obrazek: 'https://img3.m2icondb.com/samyeon_03.png', nazev: 'Trojcestný střih', popis: 'Prorážecí útok 3x za sebou, plošné poškození.' },
  ];

  const warrior2Skills = [
    { obrazek: 'https://img3.m2icondb.com/cheongeun_03.png', nazev: 'Silné tělo', popis: 'Přidá  PvM hodnotu útoku a obranu , Zesílení pomocí síly. ' },
    { obrazek: 'https://img3.m2icondb.com/gigongcham_03.png', nazev: 'Průraz', popis: 'Silné plošné poškození.' },
    { obrazek: 'https://img3.m2icondb.com/daejin_03.png', nazev: 'Dupnutí', popis: 'Plošné poškození.' },
    { obrazek: 'https://img3.m2icondb.com/geompung_03.png', nazev: 'Rána mečem', popis: 'Poškození na dálku.' },
    { obrazek: 'https://img3.m2icondb.com/gyeoksan_03.png', nazev: 'Prudká rána', popis: 'Přímé plošné poškození.' },
    { obrazek: 'https://img3.m2icondb.com/noegeom_03.png', nazev: 'Žhnoucí meč', popis: 'Plošné poškození v těsné blízkosti.' },
  ];

  return (
    <div>
      <WarriorSkills schopnosti={warrior1Skills} nadpis="Tělesný válečník" />
      <WarriorSkills schopnosti={warrior2Skills} nadpis="Mentální válečník" />
    </div>
  );
};

export default WarSchopnost;
