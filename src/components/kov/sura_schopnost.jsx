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
    { obrazek: 'https://img3.m2icondb.com/heuksin_03.png', nazev: 'Temná ochrana', popis: 'Přidá  PvM hodnotu útoku a obranu , zesílení pomocí INT.' },
    { obrazek: 'https://img3.m2icondb.com/muyeong_03.png', nazev: 'Duch plamene', popis: 'Vyvolání ducha plamene, které způsobuje dodatečné poškození.' },
    { obrazek: 'https://img3.m2icondb.com/tusok_03.png', nazev: 'Rána ducha', popis: ' Menší plošné poškození na dálku.' },
    { obrazek: 'https://img3.m2icondb.com/hwayeom_03.png', nazev: 'Rána plameny', popis: 'Plošné poškození na blízko.' },
    { obrazek: 'https://img3.m2icondb.com/maryeong_03.png', nazev: 'Temná rána', popis: ' Menší plošné poškození na dálku.' },
    { obrazek: 'https://img3.m2icondb.com/geomhwan_03.png', nazev: 'Tmavý kámen', popis: 'Silné a plošné poškození na dálku.' },
  ];

  const warrior2Skills = [
    { obrazek: 'https://img3.m2icondb.com/gwigeom_03.png', nazev: 'Začarovaná čepel', popis: ' Přidá hodnotu útoku a absorbaci ZB, zesílení pomocí INT. ' },
    { obrazek: 'https://img3.m2icondb.com/jumagap_03.png', nazev: 'Začarované brnění', popis: 'Zvyšuje obranu a šanci na přímé odrážení útoku.' },
    { obrazek: 'https://img3.m2icondb.com/gongpo_03.png', nazev: 'Strach', popis: 'Snížení poškození, které obdržíš v boji.' },
    { obrazek: 'https://img3.m2icondb.com/yonggwon_03.png', nazev: 'Dračí vír', popis: 'Efektivní plošné poškození.' },
    { obrazek: 'https://img3.m2icondb.com/swaeryeong_03.png', nazev: 'Rána prstem', popis: 'Silné přímé poškození.' },
    { obrazek: 'https://img3.m2icondb.com/pabeop_03.png', nazev: 'Zrušit kouzlo', popis: 'Odstraníš všechny užitečné efekty z nepřátel.' },
  ];

  return (
    <div>
      <WarriorSkills schopnosti={warrior1Skills} nadpis="Černá magie" />
      <WarriorSkills schopnosti={warrior2Skills} nadpis="Magické zbraně" />
    </div>
  );
};

export default WarSchopnost;
