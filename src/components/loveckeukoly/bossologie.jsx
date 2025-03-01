import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import '../ostatni/biolog.css';

const BossTable = ({ data }) => {
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
                        {row.boss.map((boss, bossIndex) => (
                                <div className='boxnadpis4' key={bossIndex}>{boss}</div>
                            ))}
                        </TableCell>

                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);
};

const Bossologie = () => {

    const bossData = [
        {
            stupen: "Stupeň 1",
            odmeny: ["2x Shuriken"],	
            boss: ["10x Brutální velitel"],
        },
        {
            stupen: "Stupeň 2",
            odmeny: ["2x Zub Orka"],
            boss: ["15x Silný vrchní ork"],
        },
        {
            stupen: "Stupeň 3",
            odmeny: ["2x Pavoučí nohy"],
            boss: ["20x Pavoučí baronka"],
        },
        {
            stupen: "Stupeň 4",
            odmeny: ["2x Srdce Atlantídy"],
            boss: ["25x Morkhot"],
        },
        {
            stupen: "Stupeň 5",
            odmeny: ["3x Kapka krve"],
            boss: ["30x Azrael"],
        },
        {
            stupen: "Stupeň 6",
            odmeny: ["3x Dračí šupiny"],
            boss: ["30x Beran-Setaou"],
        },
        {
            stupen: "Stupeň 7",
            odmeny: ["3x Ohnivý kámen"],
            boss: ["30x Razador"],
        },
        {
            stupen: "Stupeň 8",
            odmeny: ["3x Ledový kámen"],
            boss: ["30x Nemere"],
        },
        {
            stupen: "Stupeň 9",
            odmeny: ["3x Oxid titaničitý"],
            boss: ["25x Jotun Thrym"],
        },
        {
            stupen: "Stupeň 10",
            odmeny: ["3x Šupiny Hydry"],
            boss: ["25x Garm"],
        },
        {
            stupen: "Stupeň 11",
            odmeny: ["3x Ztracený list"],
            boss: ["25x Poklad hydry"],
        },
        {
            stupen: "Stupeň 12",
            odmeny: ["10x Magický kámen"],
            boss: ["50x En-Tai Vládce"],
        },
        {
            stupen: "Stupeň 13",
            odmeny: ["3x Fénixův prapor"],
            boss: ["25x Wukong"],
        },
        {
            stupen: "Stupeň 14",
            odmeny: ["3x Světlo z jiného světa"],
            boss: ["25x Džin"],
        },
        {
            stupen: "Stupeň 15",
            odmeny: ["3x Dračí kovadlina", "1x Vejce bílého draka"],
            boss: ["25x Blizzard"],
        },
        {
            stupen: "Stupeň 16",
            odmeny: ["300x Lebka piráta"],
            boss: ["250x Pirátský baron", "250x Obří kuchařka", "250x Přízrak vraku lodi", "250x Obří aquafin"],
        },
        {
            stupen: "Stupeň 17",
            odmeny: ["3x Stínový klenot"],
            boss: ["100x Truhla stínu"],
        },
        {
            stupen: "Stupeň 18",
            odmeny: ["5x Truhla s kusy knih"],
            boss: ["150x Nethis", "150x Seraphis"],
        },
        {
            stupen: "Stupeň 19",
            odmeny: ["3x Kapka jedu"],
            boss: ["50x Naga"],
        },
        {
            stupen: "Stupeň 20",
            odmeny: ["1000x Kodex Faraona"],
            boss: ["100x Ra", "100x Anubis", "100x Sfinga", "100x Scarab"],
        },
        {
            stupen: "Stupeň 21",
            odmeny: ["3x Prsten bohů egypta"],
            boss: ["40x Faraon"],
        },
        {
            stupen: "Stupeň 22",
            odmeny: ["3x Energetické jádro Sfingy"],
            boss: ["100x Zlatá Sfinga"],
        },
      ];
    
    

  return (
    <Container className='main'>
      <Typography className="boxnadpis1">Bossologie</Typography>
      <Box className="biologgg">
        <BossTable data={bossData} />
      </Box>
    </Container>
  );
};



export default Bossologie;
