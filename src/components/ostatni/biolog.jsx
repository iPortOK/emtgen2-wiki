import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import React, { useState, useEffect } from 'react';
import './biolog.css';

const BiologTable = ({ data }) => {
return (
    <TableContainer className='textbox2 biolog'>
        <Table>
            <TableBody>
                {data.map((row, index) => (
                    <TableRow key={index}>
                            <TableCell className='spodnicastfix hello' align="center" component="th" scope="row" style={{ verticalAlign: 'middle' }}>
                                <div className="cell-container" style={{ textAlign: 'center' }}>
                                <div>
                                    <Box>
                                        <img className='obrz' src={row.imgIcon} alt={row.nazev} />
                                    </Box>
                                    <Box>
                                    <span className="cell-text boxnadpis3">{row.nazev}</span>
                                    <br />
                                    </Box>
                                    </div>
                                    </div>
                            </TableCell>
                        <TableCell align="left" className='spodnicastfix hello2'>
                        {row.bonusy.map((bonus, bonusIndex) => (
                                <div className='boxnadpis4' key={bonusIndex} style={{ color: row.barvy[bonusIndex] }}>{bonus}</div>
                            ))}
                        </TableCell>
                        <TableCell align="left" className='spodnicastfix hello'>
                        <div className='boxnadpis4' style={{ color: row.barvy }}>Od úrovně: <span style={{ color: '#dfd8c6' }}>{row.uroven}</span></div>
                                    <div className='boxnadpis4' style={{ color: row.barvy }}>Počet kusů: <span style={{ color: '#dfd8c6' }}>{row.kusy}</span></div>
                                    <div className='boxnadpis4'>Čekací doba: <span style={{ color: '#dfd8c6' }}>{row.cekacidoba}</span></div>
                            </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);
};

const Biolog = () => {

  const auraData = [
        {
        uroven: '20',
        nazev: 'Shuriken',
        imgIcon: './items/Shuriken.png',
        kusy: '10',
        cekacidoba: '30 minut',
        bonusy: ['Silný proti mobům +5%', 'Hodnota útoku: +25', 'Magická hodnota útoku: +25'],
        barvy: ['#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
        { 
        uroven: '40',
        nazev: 'Zub Orka',
        imgIcon: './items/Zub Orka.png',
        kusy: '15',
        cekacidoba: '30 minut',
        bonusy: ['Silný proti bossům +5%'],
        barvy: ['#dfd8c6', '#dfd8c6', '#dfd8c6']
      },
      { 
        uroven: '60',
        nazev: 'Pavoučí nohy',
        imgIcon: './items/Pavoučí noha.png',
        kusy: '20',
        cekacidoba: '60 minut',
        bonusy: ['Silný proti kamenům +5%'],
        barvy: ['#dfd8c6', '#dfd8c6', '#dfd8c6']
      },
      { 
        uroven: '65',
        nazev: 'Srdce Atlantídy',
        imgIcon: './items/Srdce Atlantídy.png',
        kusy: '25',
        cekacidoba: '60 minut',
        bonusy: ['Silný proti příšerám +5%'],
        barvy: ['#dfd8c6', '#dfd8c6', '#dfd8c6']
      },
      { 
        uroven: '75',
        nazev: 'Kapka krve',
        imgIcon: './items/Kapka krve.png',
        kusy: '30',
        cekacidoba: '120 minut',
        bonusy: ['Kritický zásah +10%', 'Pronikavý zásah +10%', 'Obrana +100', 'Průměrná odolnost proti škodě +10%'],
        barvy: ['#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
      },
      { 
        uroven: '75',
        nazev: 'Dračí šupiny',
        imgIcon: './items/Dračí šupiny.png',
        kusy: '30',
        cekacidoba: '120 minut',
        bonusy: ['VIT, INT, SIL, POH +15', 'Inteligence pro buffku +15'],
        barvy: ['#dfd8c6', '#dfd8c6', '#dfd8c6']
      },
      { 
        uroven: '90',
        nazev: 'Ohnivý kámen',
        imgIcon: './items/Ohnivý kámen.png',
        kusy: '30',
        cekacidoba: '240 minut',
        bonusy: ['Silný proti bossům +15%'],
        barvy: ['#dfd8c6', '#dfd8c6', '#dfd8c6']
      },
      { 
        uroven: '90',
        nazev: 'Ledový kámen',
        imgIcon: './items/Ledový kámen.png',
        kusy: '35',
        cekacidoba: '240 minut',
        bonusy: ['Silný proti lidem +15%'],
        barvy: ['#dfd8c6', '#dfd8c6', '#dfd8c6']
      },
      { 
        uroven: '105',
        nazev: 'Oxid titaničitý',
        imgIcon: './items/Oxid titaničitý.png',
        kusy: '40',
        cekacidoba: '360 minut',
        bonusy: ['ZB +3000', 'Hodnota útoku: +100', 'Magická hodnota útoku: +100'],
        barvy: ['#dfd8c6', '#dfd8c6', '#dfd8c6']
      },
      { 
        uroven: '105',
        nazev: 'Šupiny Hydry',
        imgIcon: './items/Šupiny Hydry.png',
        kusy: '40',
        cekacidoba: '360 minut',
        bonusy: ['Šance na obranu proti útokům válečníků +15%', 'Šance na obranu proti útokům surů +15%', 'Šance na obranu proti útokům šamanů +15%', 'Šance na obranu proti útokům ninjů +15%'],
        barvy: ['#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
      },
      { 
        uroven: '105',
        nazev: 'Ztracený list',
        imgIcon: './items/Ztracený list.png',
        kusy: '40',
        cekacidoba: '360 minut',
        bonusy: ['Průměrná škoda +8%', 'Poškození schopností +8%'],
        barvy: ['#dfd8c6', '#dfd8c6', '#dfd8c6']
      },
      { 
        uroven: '110',
        nazev: 'Skeletoní lebka',
        imgIcon: './items/Skeletoní lebka.png',
        kusy: '40',
        cekacidoba: '360 minut',
        bonusy: ['ZB +5000', 'Silný proti příšerám +15%'],
        barvy: ['#dfd8c6', '#dfd8c6', '#dfd8c6']
      },
      { 
        uroven: '115',
        nazev: 'Fénixův prapor',
        imgIcon: './items/Fénixův prapor.png',
        kusy: '50',
        cekacidoba: '720 minut',
        bonusy: ['Silný proti bossům +15%'],
        barvy: ['#dfd8c6', '#dfd8c6', '#dfd8c6']
      },
      { 
        uroven: '115',
        nazev: 'Světlo z jiné světa',
        imgIcon: './items/Světlo z jiného světa.png',
        kusy: '50',
        cekacidoba: '720 minut',
        bonusy: ['Magický útok/útok zbraní +5%'],
        barvy: ['#dfd8c6', '#dfd8c6', '#dfd8c6']
      },
      { 
        uroven: '115',
        nazev: 'Mince prokletého pokladu',
        imgIcon: './items/Mince prokletého pokladu.png',
        kusy: '200',
        cekacidoba: '60 minut',
        bonusy: ['Silný proti kamenům star. džungle +20%', 'Odolnost u Alastora +10%'],
        barvy: ['#dfd8c6', '#dfd8c6', '#dfd8c6']
      },
      { 
        uroven: '115',
        nazev: 'Esence ostrova',
        imgIcon: './items/Esence ostrova.png',
        kusy: '200',
        cekacidoba: '60 minut',
        bonusy: ['Silný proti kamenům star. škeble +20%', 'Průraznost v dungeonu Alastora +10%'],
        barvy: ['#dfd8c6', '#dfd8c6', '#dfd8c6']
      },
      { 
        uroven: '120',
        nazev: 'Stará mapa s pokladem',
        imgIcon: './items/Stará mapa pokladů.png',
        kusy: '200',
        cekacidoba: '60 minut',
        bonusy: ['Silný proti kamenům vraku +20%', 'Průraznost pirátům +5%'],
        barvy: ['#dfd8c6', '#dfd8c6', '#dfd8c6']
      },
      { 
        uroven: '120',
        nazev: 'Alastorova duše',
        imgIcon: './items/Alastorova duše.png',
        kusy: '60',
        cekacidoba: '720 minut',
        bonusy: ['Silný proti všem elementům +20%'],
        barvy: ['#dfd8c6', '#dfd8c6', '#dfd8c6']
      }
  ];

  return (
    <Container className='main'>
      <Typography className="boxnadpis1">Biologický výzkum</Typography>
      <Box className="biologgg">
        <BiologTable data={auraData} />
      </Box>
    </Container>
  );
};



export default Biolog;
