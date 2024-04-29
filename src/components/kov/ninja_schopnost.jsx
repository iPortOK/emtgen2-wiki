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
    { obrazek: 'https://img3.m2icondb.com/eunhyeong_03.png', nazev: 'Zamaskování', popis: 'Zvyšuje PvM hodnotu útoku a učiní tě dočasně neviditelným, dokud nezautočíš, Zesílení pomocí POH.' },
    { obrazek: 'https://img3.m2icondb.com/amseup_03.png', nazev: 'Léčka', popis: 'Silné poškození s menším plošným účinkem, bonusové poškození se zamaskováním a zásahem zad soupeře' },
    { obrazek: 'https://img3.m2icondb.com/charyun_03.png', nazev: 'Víření kordů', popis: 'Přímé plošné poškození, bonusové poškození za odhození nepřítele a následnou aktivací schopnosti .' },
    { obrazek: 'https://img3.m2icondb.com/gungsin_03.png', nazev: 'Bleskový útok', popis: 'Teleport k nepříteli,  plošné poškození ' },
    { obrazek: 'https://img3.m2icondb.com/sangong_03.png', nazev: 'Jedovatý oblak', popis: 'Plošné poškození na dálku, šance na otrávení.' },
    { obrazek: 'https://img3.m2icondb.com/seomjeon_03.png', nazev: 'Záludný jed', popis: 'Skok na nepřítele s plošným poškozením.' },
  ];

  const warrior2Skills = [
    { obrazek: 'https://img3.m2icondb.com/gyeonggong_03.png', nazev: 'Našlapování polehoučku', popis: 'Zvyšuje PvM hodnotu útoku, zesílení pomocí POH..' },
    { obrazek: 'https://img3.m2icondb.com/seomgwang_03.png', nazev: 'Jiskra', popis: 'Silné plošné poškození na blízko.' },
    { obrazek: 'https://img3.m2icondb.com/hwajo_03.png', nazev: 'Ohnivý šíp', popis: 'Plošné poškození na dálku' },
    { obrazek: 'https://img3.m2icondb.com/yeonsa_03.png', nazev: 'Opakované výstřely', popis: 'Vystřelení několik šípů najednou na více nepřátel.' },
    { obrazek: 'https://img3.m2icondb.com/gigung_03.png', nazev: 'Otrávený šíp', popis: 'Plošné poškození na dálku.' },
    { obrazek: 'https://img3.m2icondb.com/gwangyeok_03.png', nazev: 'Smršť šípů', popis: 'Vystřelení vícero šípů na víc nepřátel najednou.' },
  ];

  return (
    <div>
      <WarriorSkills schopnosti={warrior1Skills} nadpis="Boj z blízka" />
      <WarriorSkills schopnosti={warrior2Skills} nadpis="Boj na dálku" />
    </div>
  );
};

export default WarSchopnost;
