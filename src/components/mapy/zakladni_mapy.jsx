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
      cotoje:"Metiny",
      metins: [
        { imgSrc: 'https://img.m2icondb.com/31161.png', text: 'Krystal opic [Lv 60]' },
        { imgSrc: 'https://img.m2icondb.com/31181.png', text: 'Krystal žab [Lv 60]' },
        { imgSrc: 'https://img.m2icondb.com/30613.png', text: 'Krystal stromů [Lv 60]' },
      ],
      dropItems: [
        { imgSrc: './items/Krvavá maska.png', ks: '' },
        { imgSrc: './items/Ostří meče.png', ks: '' },
        { imgSrc: './items/Prastaré texty.png', ks: '' },
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
      cotoje:"Metiny",
      metins: [
        { imgSrc: 'https://img.m2icondb.com/71080.png', text: 'Kámen duše' },
        { imgSrc: 'https://img.m2icondb.com/71080.png', text: 'Kámen stínu' },
      ],
      dropItems: [
        { imgSrc: './items/Kameny ducha.png', ks: '+4' },
        { imgSrc: './items/Truhla schopností.png', ks: '' },
        { imgSrc: './items/Oblek ninjů.png', ks: '+0' },
        { imgSrc: './items/Pancéřové brnění mystika.png', ks: '+0' },
        { imgSrc: './items/Sluneční oblečení.png', ks: '+0' },
        { imgSrc: './items/Plátové brnění draka.png', ks: '+0' },
        { imgSrc: './items/Soustředěné čtení.png', ks: '' },
        { imgSrc: './items/Začarovat předmět.png', ks: '' },
        { imgSrc: './items/Runa I.png', ks: '2' },
      ]
    },
    {
        nazev: "Poušť Yongbi",
        imgSrc: "",
        imgIcon: "./imgs/m3.png",
        pozadi: "./imgs/m3.png",
        dostupneOd: "1",
        doporuceneBonusy: [
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        cotoje:"Metiny",
        metins: [
          { imgSrc: 'https://img.m2icondb.com/71080.png', text: 'Kámen tvrdosti' },
        ],
        dropItems: [
          { imgSrc: './items/Kameny ducha.png', ks: '+4' },
          { imgSrc: './items/Kámen duše.png', ks: '' },
          { imgSrc: './items/Truhla schopností.png', ks: '' },
          { imgSrc: './items/Soustředěné čtení.png', ks: '' },
          { imgSrc: './items/Začarovat předmět.png', ks: '2' },
          { imgSrc: './items/Runa I.png', ks: '2' },
          { imgSrc: './items/Přilba s maskou ducha.png', ks: '+0' },
          { imgSrc: './items/Hradní přilba.png', ks: '+0' },
          { imgSrc: './items/Solární klobouk.png', ks: '+0' },
          { imgSrc: './items/Ocelová kapuce.png', ks: '+0' },
        ]
      },
      {
        nazev: "Hora Sohan",
        imgSrc: "",
        imgIcon: "./imgs/m4.png",
        pozadi: "./imgs/m4.png",
        dostupneOd: "1",
        doporuceneBonusy: [
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        cotoje:"Metiny",
        metins: [
          { imgSrc: 'https://img.m2icondb.com/71080.png', text: 'Kámen ďábla' },
          { imgSrc: 'https://img.m2icondb.com/71080.png', text: 'Kámen smrti' },
        ],
        dropItems: [
          { imgSrc: './items/Kameny ducha.png', ks: '+4' },
          { imgSrc: './items/Kámen duše.png', ks: '' },
          { imgSrc: './items/Truhla schopností.png', ks: '' },
          { imgSrc: './items/Soustředěné čtení.png', ks: '' },
          { imgSrc: './items/Začarovat předmět.png', ks: '3' },
          { imgSrc: './items/Runa I.png', ks: '3' },
          { imgSrc: './items/Runa II.png', ks: '1' },
        ]
      },
      {
        nazev: "Chrám Hwang",
        imgSrc: "",
        imgIcon: "./imgs/m5.png",
        pozadi: "./imgs/m5.png",
        dostupneOd: "40",
        doporuceneBonusy: [
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        cotoje:"Metiny",
        metins: [
          { imgSrc: 'https://img.m2icondb.com/71080.png', text: 'Kámen pádu' },
        ],
        dropItems: [
          { imgSrc: './items/Kameny ducha.png', ks: '+4' },
          { imgSrc: './items/Kámen duše.png', ks: '' },
          { imgSrc: './items/Truhla schopností.png', ks: '' },
          { imgSrc: './items/Soustředěné čtení.png', ks: '' },
          { imgSrc: './items/Začarovat předmět.png', ks: '3' },
          { imgSrc: './items/Runa I.png', ks: '3' },
        ]
      },
      {
        nazev: "Pavoučí dungeon",
        imgSrc: "",
        imgIcon: "./imgs/m6.png",
        pozadi: "./imgs/m6.png",
        dostupneOd: "40",
        doporuceneBonusy: [
          { imgSrc: './items/Element_větru.png', text: 'Odolnost a sílá proti větru' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Šance odvrátit útok' },
          { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti zvířatům' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        cotoje:"Metiny",
        metins: [
          { imgSrc: 'https://img.m2icondb.com/71080.png', text: 'Žádné' },
        ],
        dropItems: [
          { imgSrc: '', ks: '' },

        ]
      },
      {
        nazev: "Ohnivá země",
        imgSrc: "",
        imgIcon: "./imgs/m7.png",
        pozadi: "./imgs/m7.png",
        dostupneOd: "1",
        doporuceneBonusy: [
          { imgSrc: './items/Element_ohně.png', text: 'Odolnost a sílá proti ohni' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Šance odvrátit útok' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' },
        ],
        cotoje:"Metiny",
        metins: [
          { imgSrc: 'https://img.m2icondb.com/71080.png', text: 'Kámen vraždy' },
        ],
        dropItems: [
          { imgSrc: './items/Kameny ducha.png', ks: '+4' },
          { imgSrc: './items/Kámen duše.png', ks: '' },
          { imgSrc: './items/Truhla schopností.png', ks: '' },
          { imgSrc: './items/Soustředěné čtení.png', ks: '' },
          { imgSrc: './items/Začarovat předmět.png', ks: '3' },
          { imgSrc: './items/Runa II.png', ks: '1' },
        ]
      },
      {
        nazev: "Červený les",
        imgSrc: "",
        imgIcon: "./imgs/m8.png",
        pozadi: "./imgs/m8.png",
        dostupneOd: "65",
        doporuceneBonusy: [
          { imgSrc: './items/Element_větru.png', text: 'Odolnost a sílá proti větru' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        cotoje:"Metiny",
        metins: [
          { imgSrc: 'https://img.m2icondb.com/71080.png', text: 'Kámen Jeon-Un' },
        ],
        dropItems: [
          { imgSrc: './items/Kameny ducha.png', ks: '+4' },
          { imgSrc: './items/Kámen duše.png', ks: '' },
          { imgSrc: './items/Prsten zkušeností.png', ks: '' },
          { imgSrc: './items/Truhla schopností.png', ks: '' },
          { imgSrc: './items/Soustředěné čtení.png', ks: '' },
          { imgSrc: './items/Zelená dračí fazole.png', ks: '' },
          { imgSrc: './items/Začarovat předmět.png', ks: '5' },
          { imgSrc: './items/Bílá perla.png', ks: '' },
          { imgSrc: './items/Runa II.png', ks: '2' },
        ]
      },
      {
        nazev: "Jeskyně vyhnanství",
        imgSrc: "",
        imgIcon: "./imgs/m9.png",
        pozadi: "./imgs/m9.png",
        dostupneOd: "75",
        doporuceneBonusy: [
          { imgSrc: './items/Element_ledu.png', text: 'Odolnost a sílá proti ledu' },
          { imgSrc: './items/Element_blesku.png', text: 'Odolnost a sílá proti blesku' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Šance odvrátit útok' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        cotoje:"Metiny",
        metins: [
          { imgSrc: 'https://img.m2icondb.com/71080.png', text: 'Žádné' },
        ],
        dropItems: [
          { imgSrc: '', ks: '' },
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
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' },
        ],
        cotoje:"Metiny",
        metins: [
          { imgSrc: 'https://img.m2icondb.com/71080.png', text: 'Kámen zloby' },
        ],
        dropItems: [
          { imgSrc: './items/Kameny ducha.png', ks: '+5' },
          { imgSrc: './items/Niť zloby.png', ks: '' },
          { imgSrc: './items/Kámen duše.png', ks: '' },
          { imgSrc: './items/Prsten zkušeností.png', ks: '' },
          { imgSrc: './items/Truhla knihy zvířete.png', ks: '' },
          { imgSrc: './items/Soustředěné čtení.png', ks: '' },
          { imgSrc: './items/Zelená dračí fazole.png', ks: '' },
          { imgSrc: './items/Začarovat předmět.png', ks: '10' },
          { imgSrc: './items/Runa III.png', ks: '' },
          { imgSrc: './items/Cor Draconis (surové).png', ks: '' },
          { imgSrc: './items/Mramor požehnání(talisman).png', ks: '' },
        ]
      },
      {
        nazev: "Nefritový záliv",
        imgSrc: "",
        imgIcon: "./imgs/m11.png",
        pozadi: "./imgs/m11.png",
        dostupneOd: "90",
        doporuceneBonusy: [
          { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti ďáblům' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        cotoje:"Metiny",
        metins: [
          { imgSrc: 'https://img.m2icondb.com/71080.png', text: 'Kámen žáru' },
        ],
        dropItems: [
          { imgSrc: './items/Kameny ducha.png', ks: '+5' },
          { imgSrc: './items/Niť žáru.png', ks: '' },
          { imgSrc: './items/Kámen duše.png', ks: '' },
          { imgSrc: './items/Prsten zkušeností.png', ks: '' },
          { imgSrc: './items/Truhla knihy zvířete.png', ks: '' },
          { imgSrc: './items/Soustředěné čtení.png', ks: '' },
          { imgSrc: './items/Zelená dračí fazole.png', ks: '' },
          { imgSrc: './items/Začarovat předmět.png', ks: '10' },
          { imgSrc: './items/Runa III.png', ks: '' },
          { imgSrc: './items/Cor Draconis (surové).png', ks: '' },
          { imgSrc: './items/Mramor požehnání(talisman).png', ks: '' },
        ]
      },
      {
        nazev: "Záliv dračího ohně",
        imgSrc: "",
        imgIcon: "./imgs/m12.png",
        pozadi: "./imgs/m12.png",
        dostupneOd: "90",
        doporuceneBonusy: [
          { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti zvířatům' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
        ],
        cotoje:"Metiny",
        metins: [
          { imgSrc: 'https://img.m2icondb.com/71080.png', text: 'Kámen soumraku' },
        ],
        dropItems: [
          { imgSrc: './items/Kameny ducha.png', ks: '+5' },
          { imgSrc: './items/Niť soumraku.png', ks: '' },
          { imgSrc: './items/Kámen duše.png', ks: '' },
          { imgSrc: './items/Prsten zkušeností.png', ks: '' },
          { imgSrc: './items/Truhla knihy zvířete.png', ks: '' },
          { imgSrc: './items/Soustředěné čtení.png', ks: '' },
          { imgSrc: './items/Zelená dračí fazole.png', ks: '' },
          { imgSrc: './items/Začarovat předmět.png', ks: '10' },
          { imgSrc: './items/Runa III.png', ks: '' },
          { imgSrc: './items/Cor Draconis (surové).png', ks: '' },
          { imgSrc: './items/Mramor požehnání(talisman).png', ks: '' },
        ]
      },
      {
        nazev: "Zakletý les",
        imgSrc: "",
        imgIcon: "./imgs/m13.png",
        pozadi: "./imgs/m13.png",
        dostupneOd: "105",
        doporuceneBonusy: [
          { imgSrc: './items/Element_země.png', text: 'Odolnost a sílá proti zemi' },
          { imgSrc: './items/Element_větru.png', text: 'Odolnost a sílá proti větru' },
          { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti ezoterikům' },
          { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Šance odvrátit útok' },
        ],
        cotoje:"Metiny",
        metins: [
          { imgSrc: 'https://img.m2icondb.com/71080.png', text: 'Kámen lesů' },
        ],
        dropItems: [
          { imgSrc: './items/Kameny ducha.png', ks: '+5' },
          { imgSrc: './items/Větev.png', ks: '' },
          { imgSrc: './items/Prsten zkušeností.png', ks: '' },
          { imgSrc: './items/Truhla knihy zvířete.png', ks: '' },
          { imgSrc: './items/Zelená dračí fazole.png', ks: '' },
          { imgSrc: './items/Začarovat předmět.png', ks: '15' },
          { imgSrc: './items/Runa IV.png', ks: '' },
          { imgSrc: './items/Cor Draconis (surové).png', ks: '' },
          { imgSrc: './items/Magická měděná ruda.png', ks: '' },
        ]
      },
      {
        nazev: "Ostrov přeludů",
        imgSrc: "",
        imgIcon: "./imgs/m14.png",
        pozadi: "./imgs/m14.png",
        dostupneOd: "115",
        doporuceneBonusy: [
          { imgSrc: './items/Element_země.png', text: 'Odolnost a sílá proti zemi' },
          { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti všem rasám' },
        ],
        cotoje:"Metiny",
        metins: [
          { imgSrc: 'https://img.m2icondb.com/71080.png', text: 'Kámen starověků džungle' },
          { imgSrc: 'https://img.m2icondb.com/71080.png', text: 'Kámen starověké škeble' },
          { imgSrc: 'https://img.m2icondb.com/71080.png', text: 'Kámen vraku lodi' },
        ],
        dropItems: [
          { imgSrc: './items/Kameny ducha.png', ks: '+6' },
          { imgSrc: './items/Temná perla.png', ks: '' },
          { imgSrc: './items/Prut zlata (2 mil. Yang).png', ks: '' },
          { imgSrc: './items/Úlomek kamene škeble.png', ks: '' },
          { imgSrc: './items/Úlomek kamene džungle.png', ks: '' },
          { imgSrc: './items/Písek ztracené země.png', ks: '' },
          { imgSrc: './items/Emerald vody.png', ks: '' },
          { imgSrc: './items/Ledová runa s aurou.png', ks: '' },
          { imgSrc: './items/Prsten zkušeností.png', ks: '' },
          { imgSrc: './items/Začarovat předmět.png', ks: '' },
          { imgSrc: './items/Runa V.png', ks: '' },
          { imgSrc: './items/Esence ostrova.png', ks: '' },
          { imgSrc: './items/Mince prokletého pokladu.png', ks: '' },
          { imgSrc: './items/Starověký svitek.png', ks: '' },
          { imgSrc: './items/Božské ovoce.png', ks: '' },
          { imgSrc: './items/Truhla požehnání.png', ks: '' },
          { imgSrc: './items/Kapka naděje.png', ks: '' },
          { imgSrc: './items/Cor Draconis (surové).png', ks: '' },
          { imgSrc: './items/Magická měděná ruda.png', ks: '' },
          { imgSrc: './items/Stará mapa pokladů.png', ks: '' },
          { imgSrc: './items/Lebka piráta.png', ks: '' },
          { imgSrc: './items/Střelný prach.png', ks: '' },
          { imgSrc: './items/Ametyst.png', ks: '' },
          { imgSrc: './items/Cor Draconis (ametyst).png', ks: '' },
          { imgSrc: './items/Pirátská mince.png', ks: '' },
          { imgSrc: './items/Zlatá ruda.png', ks: '' },


        ]
      },
      {
        nazev: "Rybářská zátoka",
        imgSrc: "",
        imgIcon: "./imgs/m15.png",
        pozadi: "./imgs/m15.png",
        dostupneOd: "1",
        doporuceneBonusy: [
          { imgSrc: 'https://img.m2icondb.com/27591.png', text: 'Legendární prut' },
        ],
        cotoje:"Metiny",
        metins: [
          { imgSrc: 'https://img.m2icondb.com/27823.png', text: 'Rybník plný ryb' },
        ],
        dropItems: [
          { imgSrc: './items/Candát.png', ks: '' },
          { imgSrc: './items/Mandarínová ryba.png', ks: '' },
          { imgSrc: './items/Velký candát.png', ks: '' },
          { imgSrc: './items/Kapr.png', ks: '' },
        ]
      },
      {
        nazev: "Těžební důl",
        imgSrc: "",
        imgIcon: "./imgs/m16.png",
        pozadi: "./imgs/m16.png",
        dostupneOd: "30",
        doporuceneBonusy: [
          { imgSrc: 'https://img.m2icondb.com/29101.png', text: 'Krumpáč' },
        ],
        cotoje:"Překážka",
        metins: [
          { imgSrc: '/items/Safír.png', text: 'Bohaté zdroje rudy' },
        ],
        dropItems: [
          { imgSrc: './items/Diamant.png', ks: '' },
          { imgSrc: './items/Stříbro.png', ks: '' },
          { imgSrc: './items/Perla.png', ks: '' },
          { imgSrc: './items/Bílé zlato.png', ks: '' },
          { imgSrc: './items/Nebeská slza.png', ks: '' },
          { imgSrc: './items/Krystal duše.png', ks: '' },
          { imgSrc: './items/Rubín.png', ks: '' },
          { imgSrc: './items/Safír.png', ks: '' },
          { imgSrc: './items/Kouřový nefrit.png', ks: '' },
          { imgSrc: './items/Temný nefrit.png', ks: '' },
          { imgSrc: './items/Sluneční nefrit.png', ks: '' },
        ]
      },
      {
        nazev: "Válečná zóna",
        imgSrc: "",
        imgIcon: "./imgs/m17.png",
        pozadi: "./imgs/m17.png",
        dostupneOd: "30",
        doporuceneBonusy: [
          { imgSrc: 'https://img.m2icondb.com/04040.png', text: 'PvP výbava' },
        ],
        cotoje:"Nepřátelé",
        metins: [
          { imgSrc: 'https://img.m2icondb.com/30194.png', text: 'Ozbrojení hráči' },
        ],
        dropItems: [
          { imgSrc: './items/Kyanit.png', ks: '' },
        ]
      },
      {
        nazev: "Obchodní mapa",
        imgSrc: "",
        imgIcon: "./imgs/m18.png",
        pozadi: "./imgs/m18.png",
        dostupneOd: "1",
        doporuceneBonusy: [
          { imgSrc: 'https://img.m2icondb.com/45057.png', text: 'Umění vyjednávat' },
          { imgSrc: 'https://img.m2icondb.com/31067.png', text: 'Stavitel stánků' }
        ],
        cotoje:"Překážka",
        metins: [
          { imgSrc: 'https://img.m2icondb.com/45055.png', text: 'Vyjednávači' },
        ],
        dropItems: [
          { imgSrc: './items/Yang.png', ks: '' },
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
