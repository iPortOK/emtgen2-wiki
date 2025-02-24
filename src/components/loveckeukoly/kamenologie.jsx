import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import '../ostatni/biolog.css';

const KamenTable = ({ data }) => {
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
                                    <Box>
                                    <span className="cell-text boxnadpis4">{row.mob1}</span>
                                    <br />
                                    </Box>
                                    </TableCell>

                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);
};

const Kamenologie = () => {

  const kamenData = [
    {
        stupen: "Stupeň 1",
        odmeny: ["5kk"],	
        mob1: "10x Kámen smutku"
    },
    {
        stupen: "Stupeň 2",
        odmeny: ["20kk"],	
        mob1: "40x Kámen žárlivosti"
    },
    {
        stupen: "Stupeň 3",
        odmeny: ["40kk"],	
        mob1: "60x Kámen stínu"
    },
    {
        stupen: "Stupeň 4",
        odmeny: ["80kk"],	
        mob1: "100x Kámen tvrdosti"
    },
    {
        stupen: "Stupeň 5",
        odmeny: ["140kk"],	
        mob1: "175x Kámen ďábla"
    },
    {
        stupen: "Stupeň 6",
        odmeny: ["175kk"],	
        mob1: "250x Kámen pádu"
    },
    {
        stupen: "Stupeň 7",
        odmeny: ["250kk"],	
        mob1: "400x Kámen smrti"
    },
    {
        stupen: "Stupeň 8",
        odmeny: ["400kk"],	
        mob1: "700x Kámen vraždy"
    },
    {
        stupen: "Stupeň 9",
        odmeny: ["600kk"],	
        mob1: "1000x Kámen Jeon-Un"
    },
    {
        stupen: "Stupeň 10",
        odmeny: ["1kkk"],	
        mob1: "1500x Kámen žáru"
    },
    {
        stupen: "Stupeň 11",
        odmeny: ["1,25kkk"],	
        mob1: "1500x Kámen zloby"
    },
    {
        stupen: "Stupeň 12",
        odmeny: ["1,5kkk"],	
        mob1: "1500x Kámen soumraku"
    },
    {
        stupen: "Stupeň 13",
        odmeny: ["2,25kkk"],	
        mob1: "3000x Kámen lesů"
    },
    {
        stupen: "Stupeň 14",
        odmeny: ["3kkk"],	
        mob1: "2000x Kámen starověké škeble"
    },
    {
        stupen: "Stupeň 15",
        odmeny: ["3,5kkk"],	
        mob1: "2000x Kámen starověké džungle"
    },
    {
        stupen: "Stupeň 16",
        odmeny: ["5kkk, 3000x Střelný prach"],	
        mob1: "5000x Kámen vraku"
    },
    {
        stupen: "Stupeň 17",
        odmeny: ["50kkk"],	
        mob1: "3500x Hadí kámen"
    },
    {
        stupen: "Stupeň 18",
        odmeny: ["75kkk"],	
        mob1: "4500x Kámen Faraona"
    },
    {
        stupen: "Stupeň 19",
        odmeny: ["100kkk"],	
        mob1: "1000x Hadí kámen (Neobyčejný)"
    },
    {
        stupen: "Stupeň 20",
        odmeny: ["125kkk"],	
        mob1: "300x Hadí socha"
    },
    {
        stupen: "Stupeň 21",
        odmeny: ["150kkk"],	
        mob1: "250x Hadí kámen (Legendární)"
    },
    {
        stupen: "Stupeň 22",
        odmeny: ["200kkk"],	
        mob1: "300x Náhrobní kámen"
    }
];


  return (
    <Container className='main'>
      <Typography className="boxnadpis1">Kamenologie</Typography>
      <Box className="biologgg">
        <KamenTable data={kamenData} />
      </Box>
    </Container>
  );
};



export default Kamenologie;
