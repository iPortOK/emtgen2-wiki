import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import React, { useState, useEffect } from 'react';
import '../ostatni/biolog.css';

const MobTable = ({ data }) => {
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
                                            <span className="cell-text boxnadpis3"> {row.stupen} </span>
                                            <br />
                                        </Box>
                                    </div>
                                </div>
                            </TableCell>

                        <TableCell align="left" className='spodnicastfix hello2'>
                        {row.odmeny.map((odmena, odmenaIndex) => (
                                <div className='boxnadpis4' key={odmenaIndex}>Odměna: <span style={{ color: '#dfd8c6' }}>{odmena}</span></div>
                            ))}
                        </TableCell>

                        <TableCell align="left" className='spodnicastfix hello'>
                        {row.mob.map((mob, mobIndex) => (
                                <div className='boxnadpis4' key={mobIndex}>{mob}</div>
                            ))}
                        </TableCell>

                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);
};

const Mobologie = () => {

    const mobData = [
        {
            stupen: "Stupeň 1",
            odmeny: ["25x Začarovat předmět","2x Mramor požehnání"],	
            mob: ["50x Hladový vlk"],
        },
        {
            stupen: "Stupeň 2",
            odmeny: ["50x Začarovat předmět","3x Zelený lektvar (V)"],	
            mob: ["200x Divoký pěšák"],
        },
        {
            stupen: "Stupeň 3",
            odmeny: ["75x Začarovat předmět","3x Požehnaný pergamen"],	
            mob: ["500x Silný ork"],
        },
        {
            stupen: "Stupeň 4",
            odmeny: ["125x Začarovat předmět","1x Začarovat jezdeckou pečeť"],	
            mob: ["2000x Zlý opičí bojovník"],
        },
        {
            stupen: "Stupeň 5",
            odmeny: ["175x Začarovat předmět","1x Začarovat kostým"],	
            mob: ["3000x Zloduch"],
        },
        {
            stupen: "Stupeň 6",
            odmeny: ["250x Začarovat předmět","1x Certifikát změny mazlíčka"],	
            mob: ["5000x Brutál.spár. jed. pavouk"],
        },
        {
            stupen: "Stupeň 7",
            odmeny: ["325x Začarovat předmět","3x Biologovy poznámky"],	
            mob: ["5000x Vrba duchů"],
        },
        {
            stupen: "Stupeň 8",
            odmeny: ["500x Začarovat předmět","3x Výzkumníkův elixír"],	
            mob: ["6000x Bojový tygr"],
        },
        {
            stupen: "Stupeň 9",
            odmeny: ["750x Začarovat předmět","3x Cor Draconis (legend.)"],	
            mob: ["15000x Červený zlý strom"],
        },
        {
            stupen: "Stupeň 10",
            odmeny: ["1250x Začarovat předmět","3x Magický kámen"],	
            mob: ["10000x Gigantický řezník"],
        },
        {
            stupen: "Stupeň 11",
            odmeny: ["1750x Začarovat předmět","1x Duše pravdy"],	
            mob: ["10000x Lemuří voják"],
        },
        {
            stupen: "Stupeň 12",
            odmeny: ["2250x Začarovat předmět","1x Kámen duše (S)"],	
            mob: ["50000x Válečník Gnollů"],
        },
        {
            stupen: "Stupeň 13",
            odmeny: ["5000x Začarovat předmět","1x Šerpa mistra (obyčejná)"],	
            mob: ["200000x Silný En-Tai Válečník"],
        },
        {
            stupen: "Stupeň 14",
            odmeny: ["7500x Začarovat předmět","1x Dračí plamen"],	
            mob: ["200000x Skřetí dělník"],
        },
        {
            stupen: "Stupeň 15",
            odmeny: ["9999x Začarovat předmět","2x Druhá šance"],	
            mob: ["200000x Aquafínský šermíř"],
        },
        {
            stupen: "Stupeň 16",
            odmeny: ["100x Cor Draconis (ametyst)","1x Krystal (Legendární)"],	
            mob: ["5000x Utopený golem","10000x Utopený kuchař pirátské lodi","10000x Utopený velitel přídě lodi","25000x Utopený pirátský kněz"],
        },
        {
            stupen: "Stupeň 17",
            odmeny: ["3x Krystal (Mýtický)"],	
            mob: ["33000x Stvoření pokušení"],
        },
        {
            stupen: "Stupeň 18",
            odmeny: ["1000x Kodex Faraona"],	
            mob: ["33333x Charybdis","33333x Šakalí válečník","33333x Hadí škorpión"],
        },
        {
            stupen: "Stupeň 19",
            odmeny: ["50x Hadí hlava"],	
            mob: ["33333x Krellith","33333x Mornath","33333x Mocný hadí válečník"],
        },
        {
            stupen: "Stupeň 20",
            odmeny: ["3x Magický kámen soucitu"],	
            mob: ["33333x Zyphorax","33333x Strážný brouk","33333x Špinavý válečník"],
        },
        {
            stupen: "Stupeň 21",
            odmeny: ["1x Prsten Odyssea(IS)"],	
            mob: ["33333x Pouštní mumie","33333x Zyntharok","33333x Wendigo"],
        },
        {
            stupen: "Stupeň 22",
            odmeny: ["2x Třetí šance"],	
            mob: ["33333x Pouštní přízrak","33333x Písečný plíživec","33333x Gryndorax"],
        }
    
    ];
        
    

  return (
    <Container className='main'>
      <Typography className="boxnadpis1">Mobologie</Typography>
      <Box className="biologgg">
        <MobTable data={mobData} />
      </Box>
    </Container>
  );
};



export default Mobologie;
