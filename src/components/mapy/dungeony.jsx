import React, { useState, useEffect } from 'react';
import './mapy.css';
import MapComponent from './map_component';
import '../kov/vybava';
import 'animate.css';
import { Container, Box } from '@mui/material';

const Dungeony = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const maps = [
    {
      nazev: "Brutální velitel",
      imgSrc: "./imgs/boss_1.png",
      imgIcon: "./imgs/boss_1.png",
      pozadi: "./imgs/dung_1.png",
      dostupneOd: "20 - 57",
      doporuceneBonusy: [
        { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti pololidem' },
        { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
      ],
      dropItems: [
        { imgSrc: 'https://img.m2icondb.com/00290.png' },
        { imgSrc: 'https://img.m2icondb.com/11290.png' },
      ]
    },
    {
      nazev: "Vrchní Ork",
      imgSrc: "./imgs/boss_2.png",
      imgIcon: "./imgs/boss_2.png",
      pozadi: "./imgs/dung_2.png",
      dostupneOd: "20 - 57",
      doporuceneBonusy: [
        { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti pololidem' },
        { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
      ],
      dropItems: [
        { imgSrc: 'https://img.m2icondb.com/00290.png' },
        { imgSrc: 'https://img.m2icondb.com/11290.png' },
      ]
    },
    {
      nazev: "Pavoučí baronka",
      imgSrc: "./imgs/boss_3.png",
      imgIcon: "./imgs/boss_3.png",
      pozadi: "./imgs/dung_3.png",
      dostupneOd: "20 - 57",
      doporuceneBonusy: [
        { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti pololidem' },
        { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
      ],
      dropItems: [
        { imgSrc: 'https://img.m2icondb.com/00290.png' },
        { imgSrc: 'https://img.m2icondb.com/11290.png' },
      ]
    },
    {
      nazev: "Morkhot",
      imgSrc: "./imgs/boss_4.png",
      imgIcon: "./imgs/boss_4.png",
      pozadi: "./imgs/dung_4.png",
      dostupneOd: "20 - 57",
      doporuceneBonusy: [
        { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti pololidem' },
        { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
      ],
      dropItems: [
        { imgSrc: 'https://img.m2icondb.com/00290.png' },
        { imgSrc: 'https://img.m2icondb.com/11290.png' },
      ]
    },
    {
      nazev: "Azrael",
      imgSrc: "./imgs/boss_5.png",
      imgIcon: "./imgs/boss_5.png",
      pozadi: "./imgs/dung_5.png",
      dostupneOd: "20 - 57",
      doporuceneBonusy: [
        { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti pololidem' },
        { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
      ],
      dropItems: [
        { imgSrc: 'https://img.m2icondb.com/00290.png' },
        { imgSrc: 'https://img.m2icondb.com/11290.png' },
      ]
    },
    {
      nazev: "Baren Setaou",
      imgSrc: "./imgs/boss_6.png",
      imgIcon: "./imgs/boss_6.png",
      pozadi: "./imgs/dung_6.png",
      dostupneOd: "20 - 57",
      doporuceneBonusy: [
        { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti pololidem' },
        { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
      ],
      dropItems: [
        { imgSrc: 'https://img.m2icondb.com/00290.png' },
        { imgSrc: 'https://img.m2icondb.com/11290.png' },
      ]
    },
    {
      nazev: "Razador",
      imgSrc: "./imgs/boss_7.png",
      imgIcon: "./imgs/boss_7.png",
      pozadi: "./imgs/dung_7.png",
      dostupneOd: "20 - 57",
      doporuceneBonusy: [
        { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti pololidem' },
        { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
      ],
      dropItems: [
        { imgSrc: 'https://img.m2icondb.com/00290.png' },
        { imgSrc: 'https://img.m2icondb.com/11290.png' },
      ]
    },
    {
      nazev: "Nemere",
      imgSrc: "./imgs/boss_7.png",
      imgIcon: "./imgs/boss_7.png",
      pozadi: "./imgs/dung_8.png",
      dostupneOd: "20 - 57",
      doporuceneBonusy: [
        { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti pololidem' },
        { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
      ],
      dropItems: [
        { imgSrc: 'https://img.m2icondb.com/00290.png' },
        { imgSrc: 'https://img.m2icondb.com/11290.png' },
      ]
    },
    {
      nazev: "Jotun Thrym",
      imgSrc: "./imgs/boss_8.png",
      imgIcon: "./imgs/boss_8.png",
      pozadi: "./imgs/dung_9.png",
      dostupneOd: "20 - 57",
      doporuceneBonusy: [
        { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti pololidem' },
        { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
      ],
      dropItems: [
        { imgSrc: 'https://img.m2icondb.com/00290.png' },
        { imgSrc: 'https://img.m2icondb.com/11290.png' },
      ]
    },
    {
      nazev: "Hydra",
      imgSrc: "./imgs/boss_9.png",
      imgIcon: "./imgs/boss_9.png",
      pozadi: "./imgs/dung_10.png",
      dostupneOd: "20 - 57",
      doporuceneBonusy: [
        { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti pololidem' },
        { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
      ],
      dropItems: [
        { imgSrc: 'https://img.m2icondb.com/00290.png' },
        { imgSrc: 'https://img.m2icondb.com/11290.png' },
      ]
    },
    {
      nazev: "Garm",
      imgSrc: "./imgs/boss_1.png",
      imgIcon: "./imgs/boss_1.png",
      pozadi: "./imgs/dung_11.png",
      dostupneOd: "20 - 57",
      doporuceneBonusy: [
        { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti pololidem' },
        { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
      ],
      dropItems: [
        { imgSrc: 'https://img.m2icondb.com/00290.png' },
        { imgSrc: 'https://img.m2icondb.com/11290.png' },
      ]
    },
    {
      nazev: "Kostilivý drak",
      imgSrc: "./imgs/boss_1.png",
      imgIcon: "./imgs/boss_1.png",
      pozadi: "./imgs/dung_12.png",
      dostupneOd: "20 - 57",
      doporuceneBonusy: [
        { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti pololidem' },
        { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
      ],
      dropItems: [
        { imgSrc: 'https://img.m2icondb.com/00290.png' },
        { imgSrc: 'https://img.m2icondb.com/11290.png' },
      ]
    },
    {
      nazev: "Wukong",
      imgSrc: "./imgs/boss_1.png",
      imgIcon: "./imgs/boss_1.png",
      pozadi: "./imgs/dung_13.png",
      dostupneOd: "20 - 57",
      doporuceneBonusy: [
        { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti pololidem' },
        { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
      ],
      dropItems: [
        { imgSrc: 'https://img.m2icondb.com/00290.png' },
        { imgSrc: 'https://img.m2icondb.com/11290.png' },
      ]
    },
    {
      nazev: "Džin",
      imgSrc: "./imgs/boss_1.png",
      imgIcon: "./imgs/boss_1.png",
      pozadi: "./imgs/dung_14.png",
      dostupneOd: "20 - 57",
      doporuceneBonusy: [
        { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti pololidem' },
        { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
      ],
      dropItems: [
        { imgSrc: 'https://img.m2icondb.com/00290.png' },
        { imgSrc: 'https://img.m2icondb.com/11290.png' },
      ]
    },
    {
      nazev: "Alastor",
      imgSrc: "./imgs/boss_1.png",
      imgIcon: "./imgs/boss_1.png",
      pozadi: "./imgs/dung_15.png",
      dostupneOd: "20 - 57",
      doporuceneBonusy: [
        { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti pololidem' },
        { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
      ],
      dropItems: [
        { imgSrc: 'https://img.m2icondb.com/00290.png' },
        { imgSrc: 'https://img.m2icondb.com/11290.png' },
      ]
    },
  ];

  const switchMap = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const detailElement = document.querySelector('.celek');
    if (detailElement) {
      detailElement.classList.remove('animate__animated');
      void detailElement.offsetWidth;
      detailElement.classList.add('animate__animated');
    }
  }, [activeIndex]);

  return (
    <Container className='maindung'>
    <div>
      <Box className="vedle">
        {maps.map((map, index) => (
          <div key={index} className={`boxik velikost ${index === activeIndex ? 'selected' : ''}`} onClick={() => switchMap(index)}>
            <div className='fixik'>
              <img src={map.imgIcon} alt={map.nazev} className={`mapaboss boss_${index + 1}`} />
            </div>
          </div>
        ))}
      </Box>
  <MapComponent {...maps[activeIndex]} />
    </div>
    </Container>
  );
};

export default Dungeony;
