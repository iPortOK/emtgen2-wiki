import { Container, Typography, Box} from '@mui/material';
import '../kov/textbox.css';
import React, { useState, useEffect } from 'react';
import './faq.css';

const FAQ = () => {
  const [activeIndex] = useState(0);
  
  useEffect(() => {
    const detailElement = document.querySelector('.xd');
    if (detailElement) {
      detailElement.classList.remove('animate__animated');
      void detailElement.offsetWidth;
      detailElement.classList.add('animate__animated');
    }
  }, [activeIndex]);

  return (
    <Container className='main'>
      <Typography className="boxnadpis1" >Často kladené dotazy</Typography>
      <Box className="textbox" align="center">
        <Typography className="boxnadpis2">Info:</Typography>
        <Typography paragraph className="text1">
        Pro zobrazení odpovědi, stačí na otázku kliknout.
        </Typography><br></br>


        <Box className="faqbox"><details><summary>   
          <Typography className="boxnadpis2"> Jaké statusy vylepšovat na jakém charakteru?</Typography></summary><br></br>
          <img src="./imgs/staty.png" alt="" className='' width="300px"></img><br></br>
        </details></Box>

        <Box className="faqbox"><details><summary>   
          <Typography className="boxnadpis2"> Co se nejvíce vyplatí z IS?</Typography></summary><br></br>
            <Typography paragraph className="text1">
            Nejlépe se vyplatí Začátečnický balíček za 1.8k DM. Je levnější než všechny itemy v něm dohromady.
            </Typography>
        </details></Box>

        <Box className="faqbox"><details><summary>   
          <Typography className="boxnadpis2"> Jak vypadá set v Začátečnickém balíčku?</Typography></summary><br></br>
          <img src="./imgs/zacatecnickyKostym.png" alt="" className='' width="300px"></img><br></br>
        </details></Box>

        <Box className="faqbox"><details><summary>   
          <Typography className="boxnadpis2"> Kde sehnat x předmět?</Typography></summary><br></br>
          <Typography paragraph className="text1">
            Stačí daný item zadat do Tržnice ve wiki, a napíše ti, kde lze item získat.<br></br>
            Například zbraň od levelu 30, Úplňkový meč;<br></br><br></br>
            <img src="./imgs/fmsTrzka.png" alt="" className='' width="100%"></img><br></br>
            </Typography>
        </details></Box>

        <Box className="faqbox"><details><summary>   
          <Typography className="boxnadpis2"> Jak hrát na dvou postavách naráz na jednom monitoru?</Typography></summary><br></br>
          <Typography paragraph className="text1">
            Ve složce hry, najdi soubor config.cfg<br></br>
            <img src="./imgs/configcfg.png" alt="" className=''></img><br></br><br></br>
            V něm stačí vydělit první hodnotu (WIDTH) dvěmi, pro většinu 1920/2 = 960.<br></br>
            Vypadat to bude nějak takto:<br></br>
            <img src="./imgs/configOkno.png" alt="" className=''></img><br></br>
            </Typography>
        </details></Box>

        <Box className="faqbox"><details><summary>   
          <Typography className="boxnadpis2"> Kde se nachází opice / stromy / zloduši?</Typography></summary><br></br>
            <Typography paragraph className="text1">
            V chrámu bohatství, mapa od úrovně 45.
            </Typography>
        </details></Box>

        <Box className="faqbox"><details><summary>   
          <Typography className="boxnadpis2"> Jak nejlépe vydělat na nízkém levelu?</Typography></summary><br></br>
            <Typography paragraph className="text1">
            Udělat si dropa level 55 a dropovat v chrámu bohatství Masky, Texty a Ostří.<br></br>
            Poté z toho u kněze v obchodní mapě udělat plány zbroje a ty prodávat.<br></br><br></br>

            Plány zbroje se dají vytvořit zde, v Obchodní zóně;<br></br>
            <img src="./imgs/lokaceknez.png" alt="" className=''></img><br></br>
            </Typography>
        </details></Box>

        <Box className="faqbox"><details><summary>   
          <Typography className="boxnadpis2"> Jaké nejlepší bonusy lze natočit do kostýmů?</Typography></summary><br></br>
            <Typography paragraph className="text1">
            Nejlépe 5% silný proti meteorům a 5% silný proti bossům, <br></br>
            Ale pro nejvyšší DMG 5% meteory + 25 HÚ / 5% boss + 25HÚ<br></br>
            Nejlepší je však mít kostým na BOSSE a kostým na ŠUTRY zvlášť, jinak to stojí nespočet toček<br></br>
            </Typography>
        </details></Box>

        <Box className="faqbox"><details><summary>   
          <Typography className="boxnadpis2"> Přidávají bonusy z kostýmů bonusy šamance?</Typography></summary><br></br>
            <Typography paragraph className="text1">
            Nepřidávají, kostýmy jsou pouze visuální.<br></br>
            Inteligenci šamanky lze zvednout pomocí stromu dovedností, biologa a pomocí vylepšení šperků pro šamanku.<br></br>
            </Typography>
        </details></Box>

        <Box className="faqbox"><details><summary>   
          <Typography className="boxnadpis2">Jak funguje fronta na ničení meteorů?</Typography></summary><br></br>
            <Typography paragraph className="text1">
            Pro aktivování fronty meteorů je třeba mít vylepšenou frontu na kameny ve stromu dovedností. <br></br><br></br>
            Poté jen je třeba mít zapnutý strom dovedností nebo vlastnit Portsi colu, <br></br>
            držet SHIFT a kliknout pravým tlačítkem na meteory, přidáš je tím do fronty.<br></br>

            </Typography>
        </details></Box>

        <Box className="faqbox"><details><summary>   
          <Typography className="boxnadpis2">Co natočit abych zvládl Berana Setaou / Azraela?</Typography></summary><br></br>
            <Typography paragraph className="text1">
            Určitě musíš mít všude 3K ZB a 10% ABS, <br></br>
            Na draka odolnost proti blesku / ledu / odolnost proti poškození schopnosti,<br></br>
            U Azraela odolnost proti temnotě, silný proti nemrtvým.<br></br>

            </Typography>
        </details></Box>

        <Box className="faqbox"><details><summary>   
          <Typography className="boxnadpis2">Jak dlouho musím čekat po opuštění cechu?</Typography></summary><br></br>
            <Typography paragraph className="text1">
            Je třeba počkat 24 hodin po opuštění / vyhození z cechu.<br></br>
            </Typography>
        </details></Box>

        <Box className="faqbox"><details><summary>   
          <Typography className="boxnadpis2"> Kde najdu bosse v mapách 90?</Typography></summary><br></br>
          <img src="./imgs/boss90.png" alt="" className='' width="500px"></img><br></br>
        </details></Box>

        <Box className="faqbox"><details><summary>   
          <Typography className="boxnadpis2"> Kde najdu bosse v mapách 105?</Typography></summary><br></br>
          <img src="./imgs/boss105.png" alt="" className='' width="300px"></img><br></br>
        </details></Box>

        <Box className="faqbox"><details><summary>   
          <Typography className="boxnadpis2">Jak dám kouzla na S?</Typography></summary><br></br>
            <Typography paragraph className="text1">
            Jsou na to třeba speciální kameny duše, které padají v dungeonu od 105 a výš.<br></br>
            </Typography>
        </details></Box>

        <Box className="faqbox"><details><summary>   
          <Typography className="boxnadpis2">Kde seženu knihy na vylepšení buffky?</Typography></summary><br></br>
            <Typography paragraph className="text1">
            Přecraftíš je u NPC Soon v obchodce nebo prvním městě.<br></br><br></br>

            <img src="./imgs/soon.png" alt="" className=''></img><br></br>
            </Typography>
        </details></Box>

        <Box className="faqbox"><details><summary>   
          <Typography className="boxnadpis2">Jak si zobrazím vzhled křídel / záře v IS?</Typography></summary><br></br>
            <Typography paragraph className="text1">
            Stačí pouze posunout okno s IS a uvidíte křídla a záři na své postavě.<br></br>
            </Typography>
        </details></Box>

        <Box className="faqbox"><details><summary>   
          <Typography className="boxnadpis2">Kde zlepším prsten věčnosti?</Typography></summary><br></br>
            <Typography paragraph className="text1">
            Zabíjením příšer v Jeskyni věčnosti, což je dungeon od 105 levelu.<br></br>
            </Typography>
        </details></Box>

        <Box className="faqbox"><details><summary>   
          <Typography className="boxnadpis2">Kde seženu začarko na alchymii?</Typography></summary><br></br>
            <Typography paragraph className="text1">
            Začarko na alchymii (Dračí plamen) padá z truhly Kostlivého draka.<br></br>
            </Typography>
        </details></Box>

        <Box className="faqbox"><details><summary>   
          <Typography className="boxnadpis2">Na kolika postavách mohu maximálně farmit?</Typography></summary><br></br>
            <Typography paragraph className="text1">
            Maximálně lze farmit na dvou postavách zároveň.<br></br>
            </Typography>
        </details></Box>

        <Box className="faqbox"><details><summary>   
          <Typography className="boxnadpis2">Kolik počítačů může mít najednou přístup na jeden účet?</Typography></summary><br></br>
            <Typography paragraph className="text1">
            Maximálně lze mít povoleny dvě HWID počítačů zároveň.<br></br>
            </Typography>
        </details></Box>

        <Box className="faqbox"><details><summary>   
          <Typography className="boxnadpis2">Jak vylepším šanci na vytěžení rudy?</Typography></summary><br></br>
            <Typography paragraph className="text1">
            Za určitý počet kopání do rudy se ti automaticky těžba vylepší o 1 stupeň výš, každý stupeň přidává 1% šance na vytěžení rudy.<br></br>
            Šanci také můžeš zvýšit tím, že si u alchymisty v obchodní mapě vycraftíš lepší krumpáč, který ti může dát až 20% šanci na vytěžení rudy.<br></br>
            </Typography>
        </details></Box>

        <Box className="faqbox"><details><summary>   
          <Typography className="boxnadpis2">Kteří mounti jsou nejrychlejší?</Typography></summary><br></br>
            <Typography paragraph className="text1">
            <img src="./imgs/TOP5_MOUNTU.png" alt="" className=''></img><br></br>
            </Typography>
        </details></Box>

        <Box className="faqbox"><details><summary>   
          <Typography className="boxnadpis2">Čím prodloužím životnost mazlíčka?</Typography></summary><br></br>
            <Typography paragraph className="text1">
              <Typography paragraph className="text1">
              Prodloužit životnost lze pomocí ostatních pečetí mazlíčků/vajec, které prodlouží jeho život o 2 hodiny herního času a nebo pomocí proteinové tyčinky, která mu doplní polovinu života/dokáže ho oživit.<br></br>
              Proteinovou tyčinku lze získat z truhel za knihy misí, nebo z truhly cechovního dungeonu.<br></br>
              </Typography>
            </Typography>
        </details></Box>

        <Box className="faqbox"><details><summary>   
          <Typography className="boxnadpis2">Z kterého předmětu se při přecraftění převádí bonusy?</Typography></summary><br></br>
            <Typography paragraph className="text1">
              <Typography paragraph className="text1">
              Z toho předmětu, který umístíš na první slot.<br></br>
              </Typography>
            </Typography>
        </details></Box>





      </Box>
    </Container>
  );
};



export default FAQ;
