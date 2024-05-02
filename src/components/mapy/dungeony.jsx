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
      cekacidoba: "15",
      doporuceneBonusy: [
        { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti pololidem' },
        { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
      ],
      dropItems: [
        { imgSrc: './items/Shuriken.png' },
        { imgSrc: './items/Úplňkový meč +0.png' },
        { imgSrc: './items/Čepel z krevele +0.png' },
        { imgSrc: './items/Černolistá dýka +0.png' },
        { imgSrc: './items/Luk z parožiny +0.png' },
        { imgSrc: './items/Vějíř z podzimního větru +0.png' },
        { imgSrc: './items/Starožitný zvon +0.png' },
        { imgSrc: './items/Kniha misí (lehká).png' },
        { imgSrc: './items/Požehnaný pergamen.png' },
        { imgSrc: './items/Rybí kůstky.png' },
        { imgSrc: './items/Cor Draconis (surové).png' },
        { imgSrc: './items/Začarovat předmět.png' },
        { imgSrc: './items/Truhla Velitele.png' },
        { imgSrc: './items/Magická koule (Velitel).png' },
      ]
    },
    {
      nazev: "Vrchní Ork",
      imgSrc: "./imgs/boss_2.png",
      imgIcon: "./imgs/boss_2.png",
      pozadi: "./imgs/dung_2.png",
      dostupneOd: "40 - 65",
      cekacidoba: "30",
      doporuceneBonusy: [
        { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti orkům' },
        { imgSrc: 'https://img.m2icondb.com/30256.png', text: 'Obrana' }
      ],
      dropItems: [
        { imgSrc: './items/Zub orka.png' },
        { imgSrc: './items/Kniha misí (lehká).png' },
        { imgSrc: './items/Požehnaný pergamen.png' },
        { imgSrc: './items/Rybí kůstky.png' },
        { imgSrc: './items/Cor Draconis (surové).png' },
        { imgSrc: './items/Začarovat předmět.png' },
        { imgSrc: './items/Truhla vrchního orka.png' },
        { imgSrc: './items/Magická koule (Vrch. Ork).png' },
        { imgSrc: './items/Fénické boty +0.png' },
        { imgSrc: './items/Brnění dračího boha +0.png' },
        { imgSrc: './items/Pancéřové brnění duše +0.png' },
        { imgSrc: './items/Fuchsiový oblek +0.png' },
        { imgSrc: './items/Oblečení baronky +0.png' },
        { imgSrc: './items/Krvavý meč +0.png' },
        { imgSrc: './items/Velký meč +0.png' },
        { imgSrc: './items/Meč kouzelníka +0.png' },
        { imgSrc: './items/Půlměsíční meč +0.png' },
        { imgSrc: './items/Ledovcová píka +0.png' },
        { imgSrc: './items/Meč Dvanáct duchů +0.png' },
        { imgSrc: './items/čepel spásy +0.png' },
        { imgSrc: './items/Zabiják lvů +0.png' },
        { imgSrc: './items/Dýka ďábelské pěsti +0.png' },
        { imgSrc: './items/Krvavá dýka +0.png' },
        { imgSrc: './items/Žebrovaný nůž +0.png' },
        { imgSrc: './items/Chakram +0.png' },
        { imgSrc: './items/Trnolistý luk +0.png' },
        { imgSrc: './items/Luk z býčího rohu +0.png' },
        { imgSrc: './items/Luk jednorožce +0.png' },
        { imgSrc: './items/Luk s gigantickými křídly +0.png' },
        { imgSrc: './items/Kouzelný zvon +0.png' },
        { imgSrc: './items/Zvon zlatobrouka +0.png' },
        { imgSrc: './items/Zvon ocelového brouka +0.png' },
        { imgSrc: './items/Fénický vějíř +0.png' },
        { imgSrc: './items/Trojitý vějíř +0.png' },
        { imgSrc: './items/Vějíř obočí +0.png' },
        { imgSrc: './items/Vějíř černého tygra +0.png' }
      ]
    },
    {
      nazev: "Pavoučí baronka",
      imgSrc: "./imgs/boss_3.png",
      imgIcon: "./imgs/boss_3.png",
      pozadi: "./imgs/dung_3.png",
      dostupneOd: "60 - 75",
      cekacidoba: "30",
      doporuceneBonusy: [
        { imgSrc: './items/Element_větru.png', text: 'Odolnost a sílá proti větru' },
        { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti zvířatům' },
      ],
      dropItems: [
        { imgSrc: './items/Pavoučí noha.png' },
        { imgSrc: './items/Pavoučí vejce.png' },
        { imgSrc: './items/Kniha misí (lehká).png' },
        { imgSrc: './items/Jitrocel.png' },
        { imgSrc: './items/Mandragora.png' },
        { imgSrc: './items/Požehnaný pergamen.png' },
        { imgSrc: './items/Rybí kůstky.png' },
        { imgSrc: './items/Cor Draconis (surové).png' },
        { imgSrc: './items/Začarovat předmět.png' },
        { imgSrc: './items/Truhla baronky.png' },
        { imgSrc: './items/Magická koule (Baronka).png' },
        { imgSrc: './items/Bitevní meč +0.png' },
        { imgSrc: './items/Ozubená čepel ducha +0.png' },
        { imgSrc: './items/Dračí nůž +0.png' },
        { imgSrc: './items/Velký žlutý dračí luk +0.png' },
        { imgSrc: './items/Velká sudlice +0.png' },
        { imgSrc: './items/Zvon nebe a země +0.png' },
        { imgSrc: './items/Vějíř spásy +0.png' },
        { imgSrc: './items/Sokolský štít +0.png' },
        { imgSrc: './items/Tygří štít +0.png' },
        { imgSrc: './items/Hranatý lví štít +0.png' },
        { imgSrc: './items/Štít z dračích šupin +0.png' },
        { imgSrc: './items/Maska strachu +0.png' },
        { imgSrc: './items/Kukla orků +0.png' },
        { imgSrc: './items/Helma s rohy +0.png' },
        { imgSrc: './items/Kardinálský klobouk +0.png' },
      ]
    },
    {
      nazev: "Morkhot",
      imgSrc: "./imgs/boss_4.png",
      imgIcon: "./imgs/boss_4.png",
      pozadi: "./imgs/dung_4.png",
      dostupneOd: "65 - 89",
      cekacidoba: "45",
      doporuceneBonusy: [
        { imgSrc: './items/Element_ledu.png', text: 'Odolnost a sílá proti ledu' },
        { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti ezoterikům' },
      ],
      dropItems: [
        { imgSrc: './items/Srdce Atlantídy.png' },
        { imgSrc: './items/Kniha misí (standartní).png' },
        { imgSrc: './items/Jitrocel.png' },
        { imgSrc: './items/Mandragora.png' },
        { imgSrc: './items/Cor Draconis (surové).png' },
        { imgSrc: './items/Začarovat předmět.png' },
        { imgSrc: './items/Truhla Atlantídy.png' },
        { imgSrc: './items/Magický kámen.png' },
        { imgSrc: './items/Magická koule (Morkhot).png' },
        { imgSrc: './items/Jedovatý meč +0.png' },
        { imgSrc: './items/Meč zášti +0.png' },
        { imgSrc: './items/Ocelový luk vran +0.png' },
        { imgSrc: './items/Chakram křídla ďábla +0.png' },
        { imgSrc: './items/Zvon orchidejí +0.png' },
        { imgSrc: './items/Brnění z černé oceli +0.png' },
        { imgSrc: './items/Oblek černého větru +0.png' },
        { imgSrc: './items/Brnění černé magie +0.png' },
        { imgSrc: './items/Černé oblečení +0.png' },
      ]
    },
    {
      nazev: "Azrael",
      imgSrc: "./imgs/boss_5.png",
      imgIcon: "./imgs/boss_5.png",
      pozadi: "./imgs/dung_5.png",
      dostupneOd: "75 - 104",
      cekacidoba: "60",
      doporuceneBonusy: [
        { imgSrc: './items/Element_temnoty.png', text: 'Odolnost a sílá proti temnotě' },
        { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti nemrtvým' },
      ],
      dropItems: [
        { imgSrc: './items/Kapka krve.png' },
        { imgSrc: './items/Vejce Mini Azraela.png' },
        { imgSrc: './items/Kniha misí (standartní).png' },
        { imgSrc: './items/Jitrocel.png' },
        { imgSrc: './items/Mandragora.png' },
        { imgSrc: './items/Cor Draconis (surové).png' },
        { imgSrc: './items/Začarovat předmět.png' },
        { imgSrc: './items/Truhla Azraela.png' },
        { imgSrc: './items/Magický kámen.png' },
        { imgSrc: './items/Magická koule (Azrael).png' },
        { imgSrc: './items/Krystal (Neobvyklý).png' },
        { imgSrc: './items/Řetízek krystalu duše +0.png' },
        { imgSrc: './items/Náramek krystalu duše +0.png' },
        { imgSrc: './items/Náušnice krystalu duše +0.png' },
      ]
    },
    {
      nazev: "Baren Setaou",
      imgSrc: "./imgs/boss_6.png",
      imgIcon: "./imgs/boss_6.png",
      pozadi: "./imgs/dung_6.png",
      dostupneOd: "75 - 104",
      cekacidoba: "60",
      doporuceneBonusy: [
        { imgSrc: './items/Element_blesku.png', text: 'Odolnost a sílá proti blesku' },
        { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti ďáblům' },
      ],
      dropItems: [
        { imgSrc: './items/Dračí šupiny.png' },
        { imgSrc: './items/Vejce modrého draka.png' },
        { imgSrc: './items/Kniha misí (standartní).png' },
        { imgSrc: './items/Jitrocel.png' },
        { imgSrc: './items/Mandragora.png' },
        { imgSrc: './items/Cor Draconis (surové).png' },
        { imgSrc: './items/Začarovat předmět.png' },
        { imgSrc: './items/Truhla Beran-Setaou.png' },
        { imgSrc: './items/Truhla se Svitky.png' },
        { imgSrc: './items/Magický kámen.png' },
        { imgSrc: './items/Krystal (Neobvyklý).png' },
        { imgSrc: './items/Magická koule (Beran).png' },
        { imgSrc: './items/Ostnaté boty +0.png' },
        { imgSrc: './items/Helma mistra války +0.png' },
        { imgSrc: './items/Titánský štít +0.png' },
      ]
    },
    {
      nazev: "Razador",
      imgSrc: "./imgs/boss_7.png",
      imgIcon: "./imgs/boss_7.png",
      pozadi: "./imgs/dung_7.png",
      dostupneOd: "90 - 110",
      cekacidoba: "60",
      doporuceneBonusy: [
        { imgSrc: './items/Element_ohně.png', text: 'Odolnost a sílá proti ohni' },
      ],
      dropItems: [
        { imgSrc: './items/Ohnivý kámen.png' },
        { imgSrc: './items/Razadorovo vejce.png' },
        { imgSrc: './items/Kniha misí (těžká).png' },
        { imgSrc: './items/Jitrocel.png' },
        { imgSrc: './items/Mandragora.png' },
        { imgSrc: './items/Cor Draconis (surové).png' },
        { imgSrc: './items/Začarovat předmět.png' },
        { imgSrc: './items/Truhla Razadora.png' },
        { imgSrc: './items/Truhla se Svitky.png' },
        { imgSrc: './items/Magický kámen.png' },
        { imgSrc: './items/Krystal (Neobvyklý).png' },
        { imgSrc: './items/Krystal (Vzácný).png' },
        { imgSrc: './items/Plán zbroje.png' },
        { imgSrc: './items/Kámen Rudého plamene.png' },
        { imgSrc: './items/Magická koule (Razador).png' },
      ]
    },
    {
      nazev: "Nemere",
      imgSrc: "./imgs/boss_8.png",
      imgIcon: "./imgs/boss_8.png",
      pozadi: "./imgs/dung_8.png",
      dostupneOd: "90 - 110",
      cekacidoba: "60",
      doporuceneBonusy: [
        { imgSrc: './items/Element_ledu.png', text: 'Odolnost a sílá proti ledu' },
      ],
      dropItems: [
        { imgSrc: './items/Ledový kámen.png' },
        { imgSrc: './items/Nemerovo vejce.png' },
        { imgSrc: './items/Kniha misí (těžká).png' },
        { imgSrc: './items/Jitrocel.png' },
        { imgSrc: './items/Mandragora.png' },
        { imgSrc: './items/Cor Draconis (surové).png' },
        { imgSrc: './items/Začarovat předmět.png' },
        { imgSrc: './items/Truhla Nemere.png' },
        { imgSrc: './items/Truhla se Svitky.png' },
        { imgSrc: './items/Magický kámen.png' },
        { imgSrc: './items/Krystal (Neobvyklý).png' },
        { imgSrc: './items/Krystal (Vzácný).png' },
        { imgSrc: './items/Plán zbroje.png' },
        { imgSrc: './items/Kámen Rudého plamene.png' },
        { imgSrc: './items/Magická koule (Nemere).png' },
      ]
    },
    {
      nazev: "Jotun Thrym",
      imgSrc: "./imgs/boss_9.png",
      imgIcon: "./imgs/boss_9.png",
      pozadi: "./imgs/dung_9.png",
      dostupneOd: "105 - 120",
      cekacidoba: "150",
      doporuceneBonusy: [
        { imgSrc: './items/Element_země.png', text: 'Odolnost a sílá proti zemi' },
        { imgSrc: './items/Element_větru.png', text: 'Odolnost a sílá proti větru' },
      ],
      dropItems: [
        { imgSrc: './items/Oxid titaničitý.png' },
        { imgSrc: './items/Vejce Mini Exekutura.png' },
        { imgSrc: './items/Kus Šerpy.png' },
        { imgSrc: './items/Kniha misí (těžká).png' },
        { imgSrc: './items/Jitrocel.png' },
        { imgSrc: './items/Mandragora.png' },
        { imgSrc: './items/Cor Draconis (surové).png' },
        { imgSrc: './items/Začarovat předmět.png' },
        { imgSrc: './items/Truhla Jotun-Thryma.png' },
        { imgSrc: './items/Truhla se Svitky.png' },
        { imgSrc: './items/Magický kámen.png' },
        { imgSrc: './items/Krystal (Neobvyklý).png' },
        { imgSrc: './items/Krystal (Vzácný).png' },
        { imgSrc: './items/Krystal (Epický).png' },
        { imgSrc: './items/Plán zbroje.png' },
        { imgSrc: './items/Kámen Rudého plamene.png' },
        { imgSrc: './items/Magická koule (Jotun).png' },
      ]
    },
    {
      nazev: "Hydra",
      imgSrc: "./imgs/boss_10.png",
      imgIcon: "./imgs/boss_10.png",
      pozadi: "./imgs/dung_10.png",
      dostupneOd: "105 - 120",
      cekacidoba: "150",
      doporuceneBonusy: [
        { imgSrc: './items/Element_ledu.png', text: 'Odolnost a sílá proti ledu' },
        { imgSrc: './items/Element_blesku.png', text: 'Odolnost a sílá proti blesku' },
      ],
      dropItems: [
        { imgSrc: './items/Šupiny Hydry.png' },
        { imgSrc: './items/Vejce Mini Nessie.png' },
        { imgSrc: './items/Kniha misí (těžká).png' },
        { imgSrc: './items/Jitrocel.png' },
        { imgSrc: './items/Mandragora.png' },
        { imgSrc: './items/Cor Draconis (surové).png' },
        { imgSrc: './items/Začarovat předmět.png' },
        { imgSrc: './items/Truhla Hydry.png' },
        { imgSrc: './items/Truhla se Svitky.png' },
        { imgSrc: './items/Magický kámen.png' },
        { imgSrc: './items/Krystal (Neobvyklý).png' },
        { imgSrc: './items/Krystal (Vzácný).png' },
        { imgSrc: './items/Krystal (Epický).png' },
        { imgSrc: './items/Plán zbroje.png' },
        { imgSrc: './items/Kámen Rudého plamene.png' },
        { imgSrc: './items/Magická koule (Hydra).png' },
        { imgSrc: './items/Rukavice (SIL)+0.png' },
        { imgSrc: './items/Rukavice (INT)+0.png' },
        { imgSrc: './items/Rukavice (POH)+0.png' },
        { imgSrc: './items/Rukavice (VIT)+0.png' },
      ]
    },
    {
      nazev: "Garm",
      imgSrc: "./imgs/boss_11.png",
      imgIcon: "./imgs/boss_11.png",
      pozadi: "./imgs/dung_11.png",
      dostupneOd: "105 - 120",
      cekacidoba: "150",
      doporuceneBonusy: [
        { imgSrc: './items/Element_země.png', text: 'Odolnost a sílá proti zemi' },
      ],
      dropItems: [
        { imgSrc: './items/Ztracený list.png' },
        { imgSrc: './items/Vejce Baby Baashida.png' },
        { imgSrc: './items/Kniha misí (těžká).png' },
        { imgSrc: './items/Jitrocel.png' },
        { imgSrc: './items/Mandragora.png' },
        { imgSrc: './items/Cor Draconis (surové).png' },
        { imgSrc: './items/Začarovat předmět.png' },
        { imgSrc: './items/Truhla zvěrokruhu.png' },
        { imgSrc: './items/Truhla se Svitky.png' },
        { imgSrc: './items/Magický kámen.png' },
        { imgSrc: './items/Krystal (Neobvyklý).png' },
        { imgSrc: './items/Krystal (Vzácný).png' },
        { imgSrc: './items/Krystal (Epický).png' },
        { imgSrc: './items/Plán zbroje.png' },
        { imgSrc: './items/Kámen Rudého plamene.png' },
        { imgSrc: './items/Magická koule (Garm).png' },
        { imgSrc: './items/Meč Zvěrokruhu +0.png' },
        { imgSrc: './items/Halapartna Zvěrokruhu +0.png' },
        { imgSrc: './items/Dýka Zvěrokruhu +0.png' },
        { imgSrc: './items/Luk Zvěrokruhu +0.png' },
        { imgSrc: './items/Zvon Zvěrokruhu +0.png' },
        { imgSrc: './items/Vějíř Zvěrokruhu +0.png' },
      ]
    },
    {
      nazev: "Kostilivý drak",
      imgSrc: "./imgs/boss_12.png",
      imgIcon: "./imgs/boss_12.png",
      pozadi: "./imgs/dung_12.png",
      dostupneOd: "105 - 120",
      cekacidoba: "320",
      doporuceneBonusy: [
        { imgSrc: './items/Element_temnoty.png', text: 'Odolnost a sílá proti temnotě' },
        { imgSrc: './items/Element_ohně.png', text: 'Odolnost a sílá proti ohni' },
      ],
      dropItems: [
        { imgSrc: './items/Skeletoní lebka.png' },
        { imgSrc: './items/Kniha misí (těžká).png' },
        { imgSrc: './items/Jitrocel.png' },
        { imgSrc: './items/Mandragora.png' },
        { imgSrc: './items/Cor Draconis (legend.).png' },
        { imgSrc: './items/Začarovat předmět.png' },
        { imgSrc: './items/Truhla Kostlivého draka.png' },
        { imgSrc: './items/Magický kámen.png' },
        { imgSrc: './items/Krystal (Neobvyklý).png' },
        { imgSrc: './items/Krystal (Vzácný).png' },
        { imgSrc: './items/Krystal (Epický).png' },
        { imgSrc: './items/Krystal (Legendární).png' },
        { imgSrc: './items/Plán zbroje.png' },
        { imgSrc: './items/Kámen Rudého plamene.png' },
        { imgSrc: './items/Magická koule (Kostlivý drak).png' },
        { imgSrc: './items/Božské ovoce.png' },
      ]
    },
    {
      nazev: "Wukong",
      imgSrc: "./imgs/boss_13.png",
      imgIcon: "./imgs/boss_13.png",
      pozadi: "./imgs/dung_13.png",
      dostupneOd: "105 - 120",
      cekacidoba: "240",
      doporuceneBonusy: [
        { imgSrc: './items/Element_větru.png', text: 'Odolnost a sílá proti větru' },
        { imgSrc: './items/Element_ohně.png', text: 'Odolnost a sílá proti ohni' },
        { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti zvířatům' },
      ],
      dropItems: [
        { imgSrc: './items/Fénixův prapor.png' },
        { imgSrc: './items/Kniha misí (expert).png' },
        { imgSrc: './items/Jitrocel.png' },
        { imgSrc: './items/Mandragora.png' },
        { imgSrc: './items/Cor Draconis (surové).png' },
        { imgSrc: './items/Cor Draconis (mýtický).png' },
        { imgSrc: './items/Začarovat předmět.png' },
        { imgSrc: './items/Truhla Wukonga.png' },
        { imgSrc: './items/Truhla se Svitky.png' },
        { imgSrc: './items/Krystal (Neobvyklý).png' },
        { imgSrc: './items/Krystal (Vzácný).png' },
        { imgSrc: './items/Krystal (Epický).png' },
        { imgSrc: './items/Krystal (Legendární).png' },
        { imgSrc: './items/Plán zbroje.png' },
        { imgSrc: './items/Kámen Rudého plamene.png' },
        { imgSrc: './items/Magická koule (Wukong).png' },
        { imgSrc: './items/Prut zlata (2 mil. Yang).png' },
      ]
    },
    {
      nazev: "Džin",
      imgSrc: "./imgs/boss_14.png",
      imgIcon: "./imgs/boss_14.png",
      pozadi: "./imgs/dung_14.png",
      dostupneOd: "105 - 120",
      cekacidoba: "240",
      doporuceneBonusy: [
        { imgSrc: './items/Element_země.png', text: 'Odolnost a sílá proti země' },
        { imgSrc: './items/Element_blesku.png', text: 'Odolnost a sílá proti blesku' },
        { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Silný proti nemrtvým' },
      ],
      dropItems: [
        { imgSrc: './items/Světlo z jiného světa.png' },
        { imgSrc: './items/Kniha misí (expert).png' },
        { imgSrc: './items/Jitrocel.png' },
        { imgSrc: './items/Mandragora.png' },
        { imgSrc: './items/Cor Draconis (surové).png' },
        { imgSrc: './items/Cor Draconis (mýtické).png' },
        { imgSrc: './items/Začarovat předmět.png' },
        { imgSrc: './items/Truhla Djin.png' },
        { imgSrc: './items/Truhla se Svitky.png' },
        { imgSrc: './items/Krystal (Neobvyklý).png' },
        { imgSrc: './items/Krystal (Vzácný).png' },
        { imgSrc: './items/Krystal (Epický).png' },
        { imgSrc: './items/Krystal (Legendární).png' },
        { imgSrc: './items/Plán zbroje.png' },
        { imgSrc: './items/Kámen Rudého plamene.png' },
        { imgSrc: './items/Magická koule (Džin).png' },
        { imgSrc: './items/Prut zlata (2 mil. Yang).png' },
        { imgSrc: './items/Truhla požehnání.png' },
        { imgSrc: './items/Hadí kamizola (výroba).png' },
        { imgSrc: './items/Hadí vesta (výroba).png' },
        { imgSrc: './items/Kam. zlého hada (výroba).png' },
        { imgSrc: './items/Č. Hadí kamiz. (výroba).png' },
        { imgSrc: './items/Hadí meč (výroba).png' },
        { imgSrc: './items/Hadí dýka (výroba).png' },
        { imgSrc: './items/Hadí luk (výroba).png' },
        { imgSrc: './items/Hadí velký meč (výroba).png' },
        { imgSrc: './items/Hadí zvon (výroba).png' },
        { imgSrc: './items/Hadí vějíř (výroba).png' },
      ]
    },
    {
      nazev: "Alastor",
      imgSrc: "./imgs/boss_15.png",
      imgIcon: "./imgs/boss_15.png",
      pozadi: "./imgs/dung_15.png",
      dostupneOd: "105 - 120",
      cekacidoba: "150",
      doporuceneBonusy: [
        { imgSrc: './items/Element_ledu.png', text: 'Odolnost a sílá proti ledu' },
        { imgSrc: './items/Element_blesku.png', text: 'Odolnost a sílá proti blesku' },
        { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Průraznost Alastora' },
        { imgSrc: 'https://img.m2icondb.com/30255.png', text: 'Odolnost u Alastora' },
      ],
      dropItems: [
        { imgSrc: './items/Alastorova duše.png' },
        { imgSrc: './items/Truhla Alastora.png' },
        { imgSrc: './items/Vejce bílého draka.png' },
        { imgSrc: './items/Kniha misí (expert).png' },
        { imgSrc: './items/Elixír Alastora.png' },
        { imgSrc: './items/Začarovat předmět.png' },
        { imgSrc: './items/Cor Draconis (ametyst).png' },
        { imgSrc: './items/Krystal (Neobvyklý).png' },
        { imgSrc: './items/Krystal (Vzácný).png' },
        { imgSrc: './items/Krystal (Epický).png' },
        { imgSrc: './items/Krystal (Legendární).png' },
        { imgSrc: './items/Magická koule (Alastor).png' },
        { imgSrc: './items/Prut zlata (2 mil. Yang).png' },
        { imgSrc: './items/Elixír lapidis (100%).png' },
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
