import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import './nabidka.css';
import { useNavigate } from 'react-router-dom';

const vybaveni = [
  { name: 'Helmy', path: 'helmy', imageSrc: 'https://img.m2icondb.com/12260.png' },
  { name: 'Boty', path: 'boty',imageSrc: 'https://img.m2icondb.com/15410.png' },
  { name: 'Štíty', path: 'stity',imageSrc: 'https://img.m2icondb.com/13160.png' },
  { name: 'Náušnice', path: 'nausnice',imageSrc: 'https://img.m2icondb.com/17220.png' },
  { name: 'Náramky', path: 'naramek',imageSrc: 'https://img.m2icondb.com/14220.png' },
  { name: 'Náhrdelníky', path: 'nahrdelnik', imageSrc: 'https://img.m2icondb.com/16220.png' },
  { name: 'Opasky', path: 'opasek', imageSrc: 'https://img.m2icondb.com/18080.png' },
  { name: 'Rukavice', path: 'rukavice', imageSrc: 'https://img.m2icondb.com/23000.png' },
  { name: 'Talismany', path: 'talisman', imageSrc: 'https://img.m2icondb.com/9830.png' },
  { name: 'Prsteny', path: 'prsten', imageSrc: './items/Prsten9.png' },
  { name: 'Šerpy', path: 'serpa', imageSrc: 'https://img.m2icondb.com/85004.png' },
  { name: 'Kostým Aury', path: 'aura', imageSrc: 'https://img.m2icondb.com/49006.png' },
  { name: 'Alchymie', path: 'alchymie', imageSrc: 'https://img.m2icondb.com/125400.png' },
];

const ostatni = [
  { name: 'Biolog', path: 'biolog', imageSrc: 'https://img.m2icondb.com/30006.png' },
  { name: 'Krystaly', path: 'krystaly', imageSrc: './items/Krystal Celestium.png' },
  { name: 'Denní úkoly', path: 'denni_ukoly', imageSrc: 'https://img.m2icondb.com/scroll_close.png' },
//  { name: 'Bonusy', path: 'bonusy', imageSrc: 'https://img.m2icondb.com/71084.png' },
//  { name: 'PVP - systém', path: 'pvp', imageSrc: 'https://img.m2icondb.com/71084.png' },
  { name: 'Tržnice', path: 'https://emtgen2.cc/item/search.php', imageSrc: 'https://img.m2icondb.com/50200.png' },
  { name: 'FAQ', path: 'faq', imageSrc: 'https://img.m2icondb.com/72060.png' },
];

const lovecke_ukoly = [
  { name: 'Mobologie', path: 'mobologie', imageSrc: 'https://img.m2icondb.com/scroll_close.png' },
  { name: 'Bossologie', path: 'bossologie', imageSrc: 'https://img.m2icondb.com/scroll_close.png' },
  { name: 'Kamenologie', path: 'kamenologie', imageSrc: 'https://img.m2icondb.com/scroll_close.png' },
];

const mapy = [
  { name: 'Základní mapy',path: 'zakladni_mapy', imageSrc: 'https://img.m2icondb.com/27988.png' },
  { name: 'Dungeony',path: 'dungeony', imageSrc: 'https://img2.m2icondb.com/2cb19463-6b7f-426f-83ab-3ffad50f8af4.png' },
];

const classes = [
  {
    id: 'c1',
    name: 'Válečník',
    images: [
      { src: 'https://img.m2icondb.com/00180.png', path: 'war_zbran' },
      { src: 'https://img.m2icondb.com/11290.png', path: 'war_brnko' },
      { src: 'https://img3.m2icondb.com/geomgyeong_03.png', path: 'war_schopnost' },
    ],
  },
  {
    id: 'c2',
    name: 'Sura',
    images: [
      { src: 'https://img.m2icondb.com/00190.png', path: 'sura_zbran' },
      { src: 'https://img.m2icondb.com/11690.png', path: 'sura_brnko' },
      { src: 'https://img3.m2icondb.com/gwigeom_03.png', path: 'sura_schopnost' },
    ],
  },
  {
    id: 'c3',
    name: 'Šaman',
    images: [
      { src: 'https://img.m2icondb.com/07120.png', path: 'saman_zbran' },
      { src: 'https://img.m2icondb.com/11890.png', path: 'saman_brnko' },
      { src: 'https://img3.m2icondb.com/gicheon_03.png', path: 'saman_schopnost' },
    ],
  },
  {
    id: 'c4',
    name: 'Ninja',
    images: [
      { src: 'https://img.m2icondb.com/01130.png', path: 'ninja_zbran' },
      { src: 'https://img.m2icondb.com/11490.png', path: 'ninja_brnko' },
      { src: 'https://img3.m2icondb.com/amseup_03.png', path: 'ninja_schopnost' },
    ],
  },
];


const CardContainer = ({ onClick }) => (
  <div className="container">
    {classes.map((character) => (
      <label
        key={character.id}
        htmlFor={character.id}
        className={`card ${character.id === 'c1' ? 'checked' : ''}`}
        onClick={onClick}
      >
        <div className="row">
          <div className="description">
            <h4>{character.name}</h4>
            <div className='zbranebrneni'>
              {character.images.map((image, index) => (
                <Button key={index} className='buttonzbrane' onClick={() => onClick(image.path)}>
                  <img src={image.src} alt="" className="vybava-image" />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </label>
    ))}
  </div>
);

const Nabidka = () => {

  const navigate = useNavigate();
  
  const handleItemButtonClick = (itemPath) => {
    if (typeof itemPath === 'string') {
      if (itemPath.slice(0,4) === "http"){
        window.location.href = itemPath
      } else {
        navigate(`/${itemPath.toLowerCase()}`);
      }
    }else {
      console.error('Invalid itemPath:', itemPath);
    }
  };

  return (
    <Container className='kontejnr'>
      <Typography className='title header' gutterBottom>
        VÝBAVA
      </Typography>

      <CardContainer onClick={handleItemButtonClick} />

    <Typography className='title header' gutterBottom>
    </Typography>

  <Box>
      <div className="vybava-container">
      {vybaveni.map((item, index) => (
        <div key={index} className='vybava-item' onClick={() => handleItemButtonClick(item.path)}>
          <img src={item.imageSrc} alt={item.name} className="vybava-image" />
          <Typography className='vybava button'>
            {item.name}
          </Typography>
        </div>
      ))}
    </div>
  </Box>

    <Typography className='title header' gutterBottom>Mapy
    </Typography>

    <Box>
      <div className="vybava-container">
      {mapy.map((item, index) => (
        <div key={index} className='vybava-item mapy' onClick={() => handleItemButtonClick(item.path)}>
          <img src={item.imageSrc} alt={item.name} className="vybava-image" />
          <Typography className='vybava button'>
            {item.name}
          </Typography>
        </div>
      ))}
    </div>
  </Box>

  <Typography className='title header' gutterBottom>Lovecké úkoly
    </Typography>

    <Box>
      <div className="vybava-container">
      {lovecke_ukoly.map((item, index) => (
        <div key={index} className='vybava-item'onClick={() => handleItemButtonClick(item.path)}>
          <img src={item.imageSrc} alt={item.name} className="vybava-image" />
          <Typography className='vybava button'>
            {item.name}
          </Typography>
        </div>
      ))}
    </div>
  </Box>

    <Typography className='title header' gutterBottom>Ostatní
    </Typography>

    <Box>
      <div className="vybava-container">
      {ostatni.map((item, index) => (
        <div key={index} className='vybava-item'onClick={() => handleItemButtonClick(item.path)}>
          <img src={item.imageSrc} alt={item.name} className="vybava-image" />
          <Typography className='vybava button'>
            {item.name}
          </Typography>
        </div>
      ))}
    </div>
  </Box>

    </Container>
  );
};

export default Nabidka;
