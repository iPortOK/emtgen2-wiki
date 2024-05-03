import React, { useState, useEffect } from 'react';
import './mapy.css';
import MapComponent2 from './map_component2';
import '../kov/vybava';
import 'animate.css';
import { Container, Box, Typography } from '@mui/material';

const ZakladniMapy = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const maps = [
    {
      nazev: "Chrám bohatství",
      imgSrc: "",
      imgIcon: "./imgs/m1.png",
      pozadi: "./imgs/m1.png",
      dostupneOd: "45",
      doporuceneBonusy: [
        { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
      ],
      metins: [
        { imgSrc: 'https://img.m2icondb.com/31161.png', text: 'Krystal opic [Lv 60]' },
        { imgSrc: 'https://img.m2icondb.com/31181.png', text: 'Krystal žab [Lv 60]' },
        { imgSrc: 'https://img.m2icondb.com/30613.png', text: 'Krystal stromů [Lv 60]' },
      ],
      dropItems: [
        { imgSrc: './items/Božské ovoce.png', ks: '' },
        { imgSrc: './items/Božské ovoce.png', ks: '' },
      ]
    },
    {
      nazev: "Údolí orků",
      imgSrc: "",
      imgIcon: "./imgs/m2.png",
      pozadi: "./imgs/m2.png",
      dostupneOd: "1",
      doporuceneBonusy: [
        { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti orkům' },
        { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
      ],
      metins: [
        { imgSrc: './imgs/kamen.png', text: 'Silný protsadi pololidem' },
        { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
      ],
      dropItems: [
        { imgSrc: './items/Božské ovoce.png', ks: '' },
        { imgSrc: './items/Božské ovoce.png', ks: '' },
      ]
    },
    {
        nazev: "Poušť Yongbi",
        imgSrc: "",
        imgIcon: "./imgs/m3.png",
        pozadi: "./imgs/m3.png",
        dostupneOd: "1",
        doporuceneBonusy: [
          { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti orkům' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        metins: [
          { imgSrc: 'https://img.m2icondb.com/71080.png', text: 'Silný protsadi pololidem' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        dropItems: [
          { imgSrc: './items/Božské ovoce.png', ks: '' },
          { imgSrc: './items/Božské ovoce.png', ks: '' },
        ]
      },
      {
        nazev: "Hora Sohan",
        imgSrc: "",
        imgIcon: "./imgs/m4.png",
        pozadi: "./imgs/m4.png",
        dostupneOd: "1",
        doporuceneBonusy: [
          { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti orkům' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        metins: [
          { imgSrc: 'https://img.m2icondb.com/71080.png', text: 'Silný protsadi pololidem' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        dropItems: [
          { imgSrc: './items/Božské ovoce.png', ks: '' },
          { imgSrc: './items/Božské ovoce.png', ks: '' },
        ]
      },
      {
        nazev: "Chrám Hwang",
        imgSrc: "",
        imgIcon: "./imgs/m5.png",
        pozadi: "./imgs/m5.png",
        dostupneOd: "40",
        doporuceneBonusy: [
          { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti orkům' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        metins: [
          { imgSrc: 'https://img.m2icondb.com/71080.png', text: 'Silný protsadi pololidem' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        dropItems: [
          { imgSrc: './items/Božské ovoce.png', ks: '' },
          { imgSrc: './items/Božské ovoce.png', ks: '' },
        ]
      },
      {
        nazev: "Pavoučí dungeon",
        imgSrc: "",
        imgIcon: "./imgs/m6.png",
        pozadi: "./imgs/m6.png",
        dostupneOd: "40",
        doporuceneBonusy: [
          { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti orkům' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        metins: [
          { imgSrc: 'https://img.m2icondb.com/71080.png', text: 'Silný protsadi pololidem' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        dropItems: [
          { imgSrc: './items/Božské ovoce.png', ks: '' },
          { imgSrc: './items/Božské ovoce.png', ks: '' },
        ]
      },
      {
        nazev: "Ohnivá země",
        imgSrc: "",
        imgIcon: "./imgs/m7.png",
        pozadi: "./imgs/m7.png",
        dostupneOd: "1",
        doporuceneBonusy: [
          { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti orkům' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        metins: [
          { imgSrc: 'https://img.m2icondb.com/71080.png', text: 'Silný protsadi pololidem' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        dropItems: [
          { imgSrc: './items/Božské ovoce.png', ks: '' },
          { imgSrc: './items/Božské ovoce.png', ks: '' },
        ]
      },
      {
        nazev: "Červený les",
        imgSrc: "",
        imgIcon: "./imgs/m8.png",
        pozadi: "./imgs/m8.png",
        dostupneOd: "65",
        doporuceneBonusy: [
          { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti orkům' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        metins: [
          { imgSrc: 'https://img.m2icondb.com/71080.png', text: 'Silný protsadi pololidem' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        dropItems: [
          { imgSrc: './items/Božské ovoce.png', ks: '' },
          { imgSrc: './items/Božské ovoce.png', ks: '' },
        ]
      },
      {
        nazev: "Jeskyně vyhnanství",
        imgSrc: "",
        imgIcon: "./imgs/m9.png",
        pozadi: "./imgs/m9.png",
        dostupneOd: "75",
        doporuceneBonusy: [
          { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti orkům' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        metins: [
          { imgSrc: 'https://img.m2icondb.com/71080.png', text: 'Silný protsadi pololidem' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        dropItems: [
          { imgSrc: './items/Božské ovoce.png', ks: '' },
          { imgSrc: './items/Božské ovoce.png', ks: '' },
        ]
      },
      {
        nazev: "Bouřné hory",
        imgSrc: "",
        imgIcon: "./imgs/m10.png",
        pozadi: "./imgs/m10.png",
        dostupneOd: "90",
        doporuceneBonusy: [
          { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti orkům' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        metins: [
          { imgSrc: 'https://img.m2icondb.com/71080.png', text: 'Silný protsadi pololidem' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        dropItems: [
          { imgSrc: './items/Božské ovoce.png', ks: '' },
          { imgSrc: './items/Božské ovoce.png', ks: '' },
        ]
      },
      {
        nazev: "Nefritový záliv",
        imgSrc: "",
        imgIcon: "./imgs/m11.png",
        pozadi: "./imgs/m11.png",
        dostupneOd: "90",
        doporuceneBonusy: [
          { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti orkům' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        metins: [
          { imgSrc: 'https://img.m2icondb.com/71080.png', text: 'Silný protsadi pololidem' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        dropItems: [
          { imgSrc: './items/Božské ovoce.png', ks: '' },
          { imgSrc: './items/Božské ovoce.png', ks: '' },
        ]
      },
      {
        nazev: "Záliv dračího ohně",
        imgSrc: "",
        imgIcon: "./imgs/m12.png",
        pozadi: "./imgs/m12.png",
        dostupneOd: "90",
        doporuceneBonusy: [
          { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti orkům' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        metins: [
          { imgSrc: 'https://img.m2icondb.com/71080.png', text: 'Silný protsadi pololidem' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        dropItems: [
          { imgSrc: './items/Božské ovoce.png', ks: '' },
          { imgSrc: './items/Božské ovoce.png', ks: '' },
        ]
      },
      {
        nazev: "Zakletý les",
        imgSrc: "",
        imgIcon: "./imgs/m13.png",
        pozadi: "./imgs/m13.png",
        dostupneOd: "105",
        doporuceneBonusy: [
          { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti orkům' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        metins: [
          { imgSrc: 'https://img.m2icondb.com/71080.png', text: 'Silný protsadi pololidem' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        dropItems: [
          { imgSrc: './items/Božské ovoce.png', ks: '' },
          { imgSrc: './items/Božské ovoce.png', ks: '' },
        ]
      },
      {
        nazev: "Ostrov přeludů",
        imgSrc: "",
        imgIcon: "./imgs/m14.png",
        pozadi: "./imgs/m14.png",
        dostupneOd: "115",
        doporuceneBonusy: [
          { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti orkům' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        metins: [
          { imgSrc: 'https://img.m2icondb.com/71080.png', text: 'Silný protsadi pololidem' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        dropItems: [
          { imgSrc: './items/Božské ovoce.png', ks: '' },
          { imgSrc: './items/Božské ovoce.png', ks: '' },
        ]
      },
      {
        nazev: "Rybářská zátoka",
        imgSrc: "",
        imgIcon: "./imgs/m15.png",
        pozadi: "./imgs/m15.png",
        dostupneOd: "1",
        doporuceneBonusy: [
          { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti orkům' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        metins: [
          { imgSrc: 'https://img.m2icondb.com/71080.png', text: 'Silný protsadi pololidem' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        dropItems: [
          { imgSrc: './items/Božské ovoce.png', ks: '' },
          { imgSrc: './items/Božské ovoce.png', ks: '' },
        ]
      },
      {
        nazev: "Těžební důl",
        imgSrc: "",
        imgIcon: "./imgs/m16.png",
        pozadi: "./imgs/m16.png",
        dostupneOd: "30",
        doporuceneBonusy: [
          { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti orkům' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        metins: [
          { imgSrc: 'https://img.m2icondb.com/71080.png', text: 'Silný protsadi pololidem' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        dropItems: [
          { imgSrc: './items/Božské ovoce.png', ks: '' },
          { imgSrc: './items/Božské ovoce.png', ks: '' },
        ]
      },
      {
        nazev: "Válečná zóna",
        imgSrc: "",
        imgIcon: "./imgs/m17.png",
        pozadi: "./imgs/m17.png",
        dostupneOd: "30",
        doporuceneBonusy: [
          { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti orkům' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        metins: [
          { imgSrc: 'https://img.m2icondb.com/71080.png', text: 'Silný protsadi pololidem' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        dropItems: [
          { imgSrc: './items/Božské ovoce.png', ks: '' },
          { imgSrc: './items/Božské ovoce.png', ks: '' },
        ]
      },
      {
        nazev: "Obchodní mapa",
        imgSrc: "",
        imgIcon: "./imgs/m18.png",
        pozadi: "./imgs/m18.png",
        dostupneOd: "1",
        doporuceneBonusy: [
          { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti orkům' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        metins: [
          { imgSrc: 'https://img.m2icondb.com/71080.png', text: 'Silný protsadi pololidem' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        dropItems: [
          { imgSrc: './items/Božské ovoce.png', ks: '' },
          { imgSrc: './items/Božské ovoce.png', ks: '' },
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
    <Container className='maindung jenprototo'>
    <div>
      <Box className="vedle">
        {maps.map((map, index) => (
            <div key={index} className={`boxik velikostmapa ${index === activeIndex ? 'selected' : ''}`} onClick={() => switchMap(index)}>
            <div className='fixik'>
                <img src={map.imgIcon} alt={map.nazev} className={`mapaboss mapa_${index + 1}`} />
                <div className="nazev-overlay">
                <Typography>{map.nazev}</Typography>
                </div>
            </div>
            </div>
        ))}
      </Box>
  <MapComponent2 {...maps[activeIndex]} />
    </div>
    </Container>
  );
};

export default ZakladniMapy;
