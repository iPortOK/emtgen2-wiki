import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import React, { useState, useEffect } from 'react';
import './biolog.css';

const UkolyTable = ({ data }) => {
return (
    <TableContainer className='textbox2 biolog'>
        <Table>
            <TableBody>
                {data.map((row, index) => (
                    <TableRow key={index}>
                            <TableCell className='spodnicastfix hello' align="center" component="th" scope="row" style={{ verticalAlign: 'middle' }}>
                            <img src='https://img.m2icondb.com/scroll_open.png' alt='' ></img>
                            </TableCell>
                        <TableCell align="left" className='spodnicastfix hello2'>
                        {row.bonusy.map((bonus, bonusIndex) => (
                                <div className='boxnadpis4' key={bonusIndex} style={{ color: row.barvy[bonusIndex] }}>{bonus}</div>
                            ))}
                        </TableCell>
                        <TableCell align="left" className='spodnicastfix hello'>
                        <div className='boxnadpis4'>Obtížnost: 
                        <Typography  style={{ color: getColorByDifficulty(row.obtiznost) }}>{row.obtiznost}</Typography></div>
                            </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);
};

const getColorByDifficulty = (difficulty) => {
    switch (difficulty) {
        case 'Jednoduchá':
            return 'green';
        case 'Střední':
            return 'orange';
        case 'Těžká':
            return 'red';
        case 'Extrémní':
            return 'red';
        default:
            return '#dfd8c6';
    }
};

const Ukoly = () => {

  const ukolyData = [
    {
        obtiznost: 'Jednoduchá',
        bonusy: ['Otevři 2x Truhla Velitele.'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Jednoduchá',
        bonusy: ['Otevři 2x Truhlu Vrchního orka.'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Jednoduchá',
        bonusy: ['Otevři 2x Truhlu Baronky.'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Jednoduchá',
        bonusy: ['Otevři 2x Truhlu Atlantisu.'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Jednoduchá',
        bonusy: ['Otevři 2x Truhlu Azraela.'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Jednoduchá',
        bonusy: ['Otevři 2x Truhlu Berana.'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Jednoduchá',
        bonusy: ['Otevři 5x Truhlu Razadora.'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Jednoduchá',
        bonusy: ['Otevři 5x Truhlu Nemera.'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Střední',
        bonusy: ['Otevři 5x Truhlu Jotuna.'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Střední',
        bonusy: ['Otevři 5x Truhlu Hydry.'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Střední',
        bonusy: ['Otevři 5x Truhlu Zvěrokruhu.'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Těžká',
        bonusy: ['Otevři 5x Truhlu Skeletoního draka.'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Těžká',
        bonusy: ['Otevři 5x Truhlu Wukonga.'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Těžká',
        bonusy: ['Otevři 5x Truhlu Džina.'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Těžká',
        bonusy: ['Otevři 1x Truhlu Alastora.'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Jednoduchá',
        bonusy: ['Vylíhni dvě vejce.'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Jednoduchá',
        bonusy: ['Natěž 500 libovolné rudy.'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Střední',
        bonusy: ['Použij 5x Magické koule.'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Střední',
        bonusy: ['Použij 15 000x Začarovat předmět'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Jednoduchá',
        bonusy: ['Daruj opilci 3x rukavice +0.'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Střední',
        bonusy: ['Splň 5x knihu misí.'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Jednoduchá',
        bonusy: ['Nakup 20 předmětů ze stánku jiného hráče.'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Střední',
        bonusy: ['Znič 500 libovolných kamenů tvé úrovně. '],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Jednoduchá',
        bonusy: ['Zabij 10 000 příšer.'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Střední',
        bonusy: ['Získej 70 bodů v denních eventech (rybaření, těžení, tanaka).'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Těžká',
        bonusy: ['Zabij 20 hráčů v PvP eventu.'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Jednoduchá',
        bonusy: ['Poraž 10x hráče v PvP duelu.'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Jednoduchá',
        bonusy: ['Napiš 50x libovolný text do zavolat'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Jednoduchá',
        bonusy: ['Chyť 25 ryb.'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Jednoduchá',
        bonusy: ['Použij 1x raritní kámen.'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Jednoduchá',
        bonusy: ['Vylepši 50x předmět zapomocí Požehnaného pergamenu.'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Střední',
        bonusy: ['Otevři 1000x Cor Draconis.'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Střední',
        bonusy: ['Daruj opilci 2x šperk +9 od úrovně 41-64'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Střední',
        bonusy: ['Daruj opilci 2x helmu, boty a nebo brnění +9 od úrovně 41-64'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Střední',
        bonusy: ['Daruj opilci 2x šperk +9 od úrovně 41-64'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Střední',
        bonusy: ['Daruj opilci 1x šperk +9 od úrovně 54'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Těžká',
        bonusy: ['Daruj opilci 1x helmu, boty a nebo brnění +9 od úrovně 65+'],
        barvy: ['#dfd8c6', '', '']
    },
    {
        obtiznost: 'Těžká',
        bonusy: ['Daruj opilci 1x zbraň +9 od úrovně 65+'],
        barvy: ['#dfd8c6', '', '']
    },
];

ukolyData.sort((a, b) => {
    const obtiznostOrder = { 'Jednoduchá': 0, 'Střední': 1, 'Těžká': 2, 'Extrémní': 3 };
    return obtiznostOrder[a.obtiznost] - obtiznostOrder[b.obtiznost];
});

  return (
    <Container className='main ukoly'>
      <Typography className="boxnadpis1">Denní úkoly</Typography>

        <Typography paragraph className="text1">
        Hráči se každý den setkávají s novými výzvami v podobě denních úkolů. Tyto úkoly se resetují vždy ve 3:00 ráno, čímž dávají hráčům šanci znovu se pustit do akce. Na úvod hry jsou k dispozici pouze tři úkoly, ale jejich počet lze snadno navýšit vylepšením ve stromu dovedností. 
        </Typography>
        <Typography paragraph className="text1">
        Za úspěšné splnění úkolu hráč obdrží odměnu v podobě <img src="./items/Duše pravdy.png" alt="" className=''></img> Duše pravdy.
        Předmět slouží k rozvoji postavy, a to především v rámci stromu dovedností.
        </Typography>

        <Typography className="boxnadpis2 stred mezera">Seznam denních úkolů</Typography>
      <Box className="biologgg">
        <UkolyTable data={ukolyData} />
      </Box>
    </Container>
  );
};



export default Ukoly;
