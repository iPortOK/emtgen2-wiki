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
    { obrazek: 'https://img3.m2icondb.com/gicheon_03.png', nazev: 'Pomoc draka', popis: 'Zvyšuje PvM hodnotu útoku a šanci na kritický zásah, možnost buffovat i jiné hráče.' },
    { obrazek: 'https://img3.m2icondb.com/hosin_03.png', nazev: 'Požehnání', popis: 'Snižuje poškození, které obdržíš v boji (neplatí proti kouzlům).' },
    { obrazek: 'https://img3.m2icondb.com/paeryong_03.png', nazev: 'Řev draků', popis: 'Plošné a silné poškození na dálku.' },
    { obrazek: 'https://img3.m2icondb.com/bipabu_03.png', nazev: 'Létající talisman', popis: 'Menší plošné poškození na dálku.' },
    { obrazek: 'https://img3.m2icondb.com/yongpa_03.png', nazev: 'Střílení na draky', popis: 'Přímé, plošné poškození.' },
    { obrazek: 'https://img3.m2icondb.com/meteo_03.png', nazev: 'Meteor', popis: 'Plošné poškození na dálku.' },
  ];

  const warrior2Skills = [
    { obrazek: 'https://img3.m2icondb.com/jeongeop_03.png', nazev: 'Ošetřit', popis: 'Zvyšuje PvM hodnotu útoku a regeneruje tvé životy, zesílení pomocí int.' },
    { obrazek: 'https://img3.m2icondb.com/jeungryeok_03.png', nazev: 'Útok+', popis: 'Zvyšuje magickou hodnotu útoku.' },
    { obrazek: 'https://img3.m2icondb.com/byeorak_03.png', nazev: 'Zaříkat blesk', popis: 'Plošné poškození na dálku.' },
    { obrazek: 'https://img3.m2icondb.com/pokroe_03.png', nazev: 'Bleskový dráp', popis: 'Řetězové poškození na dálku.' },
    { obrazek: 'https://img3.m2icondb.com/noejeon_03.png', nazev: 'Bleskový vrh', popis: 'Plošné poškození na dálku.' },
    { obrazek: 'https://img3.m2icondb.com/meteo_03.png', nazev: 'Meteor', popis: 'Plošné poškození na dálku.' },
  ];

  return (
    <div>
      <WarriorSkills schopnosti={warrior1Skills} nadpis="Dračí moc" />
      <WarriorSkills schopnosti={warrior2Skills} nadpis="Léčba" />
    </div>
  );
};

export default WarSchopnost;
