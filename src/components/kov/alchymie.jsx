import { Container, Typography, Box } from '@mui/material';
import React from 'react';
import './vybava.css';
import './textbox.css';


const Alchymie = () => {
  return (
    <Container className='main'>
      <Typography className="boxnadpis1">Alchymie</Typography>
       <Box className="textbox">
      <Typography className="boxnadpis2">Obecné</Typography>
      <Typography paragraph className="text1">
        Dračí alchymie (nebo také Alchymie Dračích kamenů) je vytvořený systém s cílem zvýšit sílu postav v určitém směru. Každá postava s úrovní 30 a výš obdrží úkol – Příchod Úlomků Dračího kamene, který tě nasměruje k Alchymistovi. Ten ti dá za úkol nasbírat 10 Úlomků Dračího kamene. Zároveň obdržíš 250x sílu dračího oka, která zapříčiní, že desetkrát po nasbírání dalších deseti úlomků nebudeš muset dojít za Alchymistou, jelikož Cor Draconis (surové) obdržíš automaticky. Jakmile klikneš pravým tlačítkem myši na Cor Draconis, obdržíš Surový dračí kámen (diamantový, rubínový, nefritový, safírový, granátový, anebo onyxový), který se zobrazí v okně Alchymie Dračích kamenů nebo můžete po nasbírání 250x Cor Draconis (surové) vytvořit u Alchymisty 1x Cor Draconis (legendární). Poté když ho rozkliknete, dostanete rovnou Legendární dračí kámen.
      </Typography>
      <Typography className="boxnadpis2">Poznámky</Typography>
      <Typography paragraph className="text1">
        Do alchymie se můžeš dostat kliknutím v inventáři na tlačítko nebo klávesové zkratky O.
      </Typography>
    </Box>
    </Container>
  );
};

export default Alchymie;