import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import './textbox.css';
import React, { useState, useEffect } from 'react';

const DračíKamenTable = ({ data }) => {
  return (
    <TableContainer className='textbox2 boxik'>
      <Table>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell className='spodnicastfix hello' align="center" component="th" scope="row" style={{ verticalAlign: 'middle' }}>
                <div className="cell-container">
                  <div>
                  <Box>
                    <img className='obrz' src={row.imgIcon} alt={row.nazev} />
                  </Box>
                  <Box>
                  <span className="cell-text boxnadpis3">{row.nazev.split(" (")[0]}</span>
                  <br />
                  <span className="cell-text boxnadpis3">({row.nazev.split(" (")[1]}</span>
                  </Box>
                  </div>
                </div>
              </TableCell>
              <TableCell className='spodnicastfix hello2'>
                {row.bonusy.map((bonus, bonusIndex) => (
                  <div className='boxnadpis4' key={bonusIndex} style={{ color: row.barvy[bonusIndex] }}>{bonus}</div>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const Alchymie = () => {

  const [selectedEquipment, setSelectedEquipment] = useState("diamant");

  const handleEquipmentChange = (equipmentType) => {
    setSelectedEquipment(equipmentType);
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const switchMap = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const detailElement = document.querySelector('.xd');
    if (detailElement) {
      detailElement.classList.remove('animate__animated');
      void detailElement.offsetWidth;
      detailElement.classList.add('animate__animated');
    }
  }, [activeIndex]);

  const dračíKamenyData = [
    { 
      equipment: "diamant",
      kameny: [
        { 
          nazev: 'Legendární Dračí diamant (matný)',
          imgIcon: 'https://img.m2icondb.com/114000.png',
          bonusy: ['INT +5', 'Odolnost proti ledu +3%', 'Magická hodnota útoku +100', 'Poškození schopností +3%', 'Poškození je Abs. MB +5%', 'Šance obnovit MB +2%', 'Odolnost proti krit. zásahům +5%', ''],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Legendární Dračí diamant (čistý)',
          imgIcon: 'https://img.m2icondb.com/114100.png',
          bonusy: ['INT +6', 'Odolnost proti ledu +3%', 'Magická hodnota útoku +110', 'Poškození schopností +4%', 'Poškození je Abs. MB +6%', 'Šance obnovit MB +3%', 'Odolnost proti krit. zásahům +6%', ''],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Legendární Dračí diamant (bezchybný)',
          imgIcon: 'https://img.m2icondb.com/114200.png',
          bonusy: ['INT +7', 'Odolnost proti ledu +4%', 'Magická hodnota útoku +130', 'Poškození schopností +4%', 'Poškození je Abs. MB +7%', 'Šance obnovit MB +3%', 'Odolnost proti krit. zásahům +7%', ''],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Legendární Dračí diamant (briliantní)',
          imgIcon: 'https://img.m2icondb.com/114300.png',
          bonusy: ['INT +9', 'Odolnost proti ledu +5%', 'Magická hodnota útoku +180', 'Poškození schopností +6%', 'Poškození je Abs. MB +9%', 'Šance obnovit MB +4%', 'Odolnost proti krit. zásahům +9%', ''],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Legendární Dračí diamant (excelentní)',
          imgIcon: 'https://img.m2icondb.com/114400.png',
          bonusy: ['INT +12', 'Odolnost proti ledu +6%', 'Magická hodnota útoku +240', 'Poškození schopností +8%', 'Poškození je Abs. MB +12%', 'Šance obnovit MB +5%', 'Odolnost proti krit. zásahům +12%', ''],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },

{ 
          nazev: 'Mýtický Dračí diamant (matný)',
          imgIcon: 'https://img.m2icondb.com/115000.png',
          bonusy: ['INT +6', 'Odolnost proti ledu +3%', 'Síla proti ledu +6%', 'Magická hodnota útoku +110', 'Poškození schopností +4%', 'Poškození je Abs. MB +6%', 'Šance obnovit MB +3%', 'Odolnost proti krit. zásahům +6%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Mýtický Dračí diamant (čistý)',
          imgIcon: 'https://img.m2icondb.com/115100.png',
          bonusy: ['INT +7', 'Odolnost proti ledu +4%', 'Síla proti ledu +7%', 'Magická hodnota útoku +130', 'Poškození schopností +4%', 'Poškození je Abs. MB +7%', 'Šance obnovit MB +3%', 'Odolnost proti krit. zásahům +7%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Mýtický Dračí diamant (bezchybný)',
          imgIcon: 'https://img.m2icondb.com/115200.png',
          bonusy: ['INT +8', 'Odolnost proti ledu +4%', 'Síla proti ledu +8%', 'Magická hodnota útoku +160', 'Poškození schopností +5%', 'Poškození je Abs. MB +8%', 'Šance obnovit MB +4%', 'Odolnost proti krit. zásahům +8%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Mýtický Dračí diamant (briliantní)',
          imgIcon: 'https://img.m2icondb.com/115300.png',
          bonusy: ['INT +12', 'Odolnost proti ledu +6%', 'Síla proti ledu +12%', 'Magická hodnota útoku +240', 'Poškození schopností +8%', 'Poškození je Abs. MB +12%', 'Šance obnovit MB +5%', 'Odolnost proti krit. zásahům +12%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Mýtický Dračí diamant (excelentní)',
          imgIcon: 'https://img.m2icondb.com/115400.png',
          bonusy: ['INT +16', 'Odolnost proti ledu +8%', 'Síla proti ledu +16%', 'Magická hodnota útoku +320', 'Poškození schopností +10%', 'Poškození je Abs. MB +16%', 'Šance obnovit MB +7%', 'Odolnost proti krit. zásahům +16%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        }
      ]
    },
    { 
      equipment: "rubin",
      kameny: [
        { 
          nazev: 'Legendární Dračí rubín (matný)',
          imgIcon: 'https://img.m2icondb.com/124000.png',
          bonusy: ['SIL +5', 'Odolnost proti ohni +3%', 'Hodnota útoku +100', 'Obrana +50', 'Šance na obranu proti útokům válečníka +5%', 'Silný proti válečníkům +3%', 'Obnovení MB +8%', ''],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Legendární Dračí rubín (čistý)',
          imgIcon: 'https://img.m2icondb.com/124100.png',
          bonusy: ['SIL +6', 'Odolnost proti ohni +3%', 'Hodnota útoku +110', 'Obrana +55', 'Šance na obranu proti útokům válečníka +5%', 'Silný proti válečníkům +3%', 'Obnovení MB +9%', ''],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{
          nazev: 'Legendární Dračí rubín (bezchybný)',
          imgIcon: 'https://img.m2icondb.com/124200.png',
          bonusy: ['SIL +7', 'Odolnost proti ohni +4%', 'Hodnota útoku +130', 'Obrana +65', 'Šance na obranu proti útokům válečníka +6%', 'Silný proti válečníkům +4%', 'Obnovení MB +10%', ''],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Legendární Dračí rubín (briliantní)',
          imgIcon: 'https://img.m2icondb.com/124300.png',
          bonusy: ['SIL +9', 'Odolnost proti ohni +5%', 'Hodnota útoku +180', 'Obrana +90', 'Šance na obranu proti útokům válečníka +9%', 'Silný proti válečníkům +5%', 'Obnovení MB +14%', ''],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Legendární Dračí rubín (excelentní)',
          imgIcon: 'https://img.m2icondb.com/124400.png',
          bonusy: ['SIL +12', 'Odolnost proti ohni +6%', 'Hodnota útoku +240', 'Obrana +120', 'Šance na obranu proti útokům válečníka +11%', 'Silný proti válečníkům +6%', 'Obnovení MB +18%', ''],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },


{ 
          nazev: 'Mýtický Dračí rubín (matný)',
          imgIcon: 'https://img.m2icondb.com/125000.png',
          bonusy: ['SIL +6', 'Odolnost proti ohni +3%', 'Síla proti ohni +6%', 'Hodnota útoku +110', 'Obrana +55', 'Šance na obranu proti útokům válečníka +5%', 'Silný proti válečníkům +3%', 'Obnovení MB +9%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Mýtický Dračí rubín (čistý)',
          imgIcon: 'https://img.m2icondb.com/125100.png',
          bonusy: ['SIL +7', 'Odolnost proti ohni +4%', 'Síla proti ohni +7%', 'Hodnota útoku +130', 'Obrana +65', 'Šance na obranu proti útokům válečníka +6%', 'Silný proti válečníkům +4%', 'Obnovení MB +10%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Mýtický Dračí rubín (bezchybný)',
          imgIcon: 'https://img.m2icondb.com/125200.png',
          bonusy: ['SIL +8', 'Odolnost proti ohni +4%', 'Síla proti ohni +8%', 'Hodnota útoku +160', 'Obrana +80', 'Šance na obranu proti útokům válečníka +8%', 'Silný proti válečníkům +4%', 'Obnovení MB +12%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Mýtický Dračí rubín (briliantní)',
          imgIcon: 'https://img.m2icondb.com/125300.png',
          bonusy: ['SIL +12', 'Odolnost proti ohni +6%', 'Síla proti ohni +12%', 'Hodnota útoku +240', 'Obrana +120', 'Šance na obranu proti útokům válečníka +11%', 'Silný proti válečníkům +6%', 'Obnovení MB +18%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Mýtický Dračí rubín (excelentní)',
          imgIcon: 'https://img.m2icondb.com/125400.png',
          bonusy: ['SIL +16', 'Odolnost proti ohni +8%', 'Síla proti ohni +16%', 'Hodnota útoku +320', 'Obrana +160', 'Šance na obranu proti útokům válečníka +15%', 'Silný proti válečníkům +8%', 'Obnovení MB +24%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
      ]
    },
    { 
      equipment: "nefrit",
      kameny: [
        { 
          nazev: 'Legendární Dračí nefrit (matný)',
          imgIcon: 'https://img.m2icondb.com/134000.png',
          bonusy: ['Max. ZB +600', 'Odolnost proti větru +3%', 'Silný proti mobům +5%', 'Poškození 5% je absorbováno ZB.', '2% Šance obnovit ZB', 'Šance na obranu proti útokům ninjů +5%', 'Silný proti ninjům 3%', ''],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Legendární Dračí nefrit (čistý)',
          imgIcon: 'https://img.m2icondb.com/134100.png',
          bonusy: ['Max. ZB +660', 'Odolnost proti větru +3%', 'Silný proti mobům +6%', 'Poškození 6% je absorbováno ZB.', '3% Šance obnovit ZB', 'Šance na obranu proti útokům ninjů +5%', 'Silný proti ninjům 3%', ''],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Legendární Dračí nefrit (bezchybný)',
          imgIcon: 'https://img.m2icondb.com/134200.png',
          bonusy: ['Max. ZB +780', 'Odolnost proti větru +4%', 'Silný proti mobům +7%', 'Poškození 7% je absorbováno ZB.', '3% Šance obnovit ZB', 'Šance na obranu proti útokům ninjů +6%', 'Silný proti ninjům 4%', ''],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Legendární Dračí nefrit (briliantní)',
          imgIcon: 'https://img.m2icondb.com/134300.png',
          bonusy: ['Max. ZB +1080', 'Odolnost proti větru +5%', 'Silný proti mobům +9%', 'Poškození 9% je absorbováno ZB.', '4% Šance obnovit ZB', 'Šance na obranu proti útokům ninjů +9%', 'Silný proti ninjům 5%', ''],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Legendární Dračí nefrit (excelentní)',
          imgIcon: 'https://img.m2icondb.com/134400.png',
          bonusy: ['Max. ZB +1440', 'Odolnost proti větru +6%', 'Silný proti mobům +12%', 'Poškození 12% je absorbováno ZB.', '5% Šance obnovit ZB', 'Šance na obranu proti útokům ninjů +11%', 'Silný proti ninjům 6%', ''],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },


{ 
          nazev: 'Mýtický Dračí nefrit (matný)',
          imgIcon: 'https://img.m2icondb.com/135000.png',
          bonusy: ['Max. ZB +660', 'Odolnost proti větru +3%', 'Silný proti větru +6%', 'Silný proti mobům +6%', 'Poškození 6% je absorbováno ZB.', '3% Šance obnovit ZB', 'Šance na obranu proti útokům ninjů +5%', 'Silný proti ninjům 3%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Mýtický Dračí nefrit (čistý)',
          imgIcon: 'https://img.m2icondb.com/135100.png',
          bonusy: ['Max. ZB +780', 'Odolnost proti větru +4%', 'Silný proti větru +7%', 'Silný proti mobům +7%', 'Poškození 7% je absorbováno ZB.', '3% Šance obnovit ZB', 'Šance na obranu proti útokům ninjů +6%', 'Silný proti ninjům 4%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Mýtický Dračí nefrit (bezchybný)',
          imgIcon: 'https://img.m2icondb.com/135200.png',
          bonusy: ['Max. ZB +960', 'Odolnost proti větru +4%', 'Silný proti větru +8%', 'Silný proti mobům +8%', 'Poškození 8% je absorbováno ZB.', '4% Šance obnovit ZB', 'Šance na obranu proti útokům ninjů +8%', 'Silný proti ninjům 4%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Mýtický Dračí nefrit (briliantní)',
          imgIcon: 'https://img.m2icondb.com/135300.png',
          bonusy: ['Max. ZB +1440', 'Odolnost proti větru +6%', 'Silný proti větru +12%', 'Silný proti mobům +12%', 'Poškození 12% je absorbováno ZB.', '5% Šance obnovit ZB', 'Šance na obranu proti útokům ninjů +11%', 'Silný proti ninjům 6%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Mýtický Dračí nefrit (excelentní)',
          imgIcon: 'https://img.m2icondb.com/135400.png',
          bonusy: ['Max. ZB +1920', 'Odolnost proti větru +8%', 'Silný proti větru +16%', 'Silný proti mobům +16%', 'Poškození 16% je absorbováno ZB.', '7% Šance obnovit ZB', 'Šance na obranu proti útokům ninjů +15%', 'Silný proti ninjům 8%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
      ]
    },
    { 
      equipment: "safir",
      kameny: [
        { 
          nazev: 'Legendární Dračí safír (matný)',
          imgIcon: 'https://img.m2icondb.com/144000.png',
          bonusy: ['POH +5', 'Odolnost proti zemi +3%', 'Silný proti bossům +5%', 'Max. ZB +8%', 'Magická obrana +13', 'Šance na obranu proti útokům surů +5%', 'Silný proti surům 3%', ''],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Legendární Dračí safír (čistý)',
          imgIcon: 'https://img.m2icondb.com/144100.png',
          bonusy: ['POH +6', 'Odolnost proti zemi +3%', 'Silný proti bossům +6%', 'Max. ZB +9%', 'Magická obrana +14', 'Šance na obranu proti útokům surů +5%', 'Silný proti surům 3%', ''],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Legendární Dračí safír (bezchybný)',
          imgIcon: 'https://img.m2icondb.com/144200.png',
          bonusy: ['POH +7', 'Odolnost proti zemi +4%', 'Silný proti bossům +7%', 'Max. ZB +10%', 'Magická obrana +17', 'Šance na obranu proti útokům surů +6%', 'Silný proti surům 4%', ''],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{
          nazev: 'Legendární Dračí safír (briliantní)',
          imgIcon: 'https://img.m2icondb.com/144300.png',
          bonusy: ['POH +9', 'Odolnost proti zemi +5%', 'Silný proti bossům +9%', 'Max. ZB +14%', 'Magická obrana +23', 'Šance na obranu proti útokům surů +9%', 'Silný proti surům 5%', ''],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Legendární Dračí safír (excelentní)',
          imgIcon: 'https://img.m2icondb.com/144400.png',
          bonusy: ['POH +12', 'Odolnost proti zemi +6%', 'Silný proti bossům +12%', 'Max. ZB +18%', 'Magická obrana +30', 'Šance na obranu proti útokům surů +11%', 'Silný proti surům 6%', ''],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },


{ 
          nazev: 'Mýtický Dračí safír (matný)',
          imgIcon: 'https://img.m2icondb.com/145000.png',
          bonusy: ['POH +6', 'Odolnost proti zemi +3%', 'Silný proti zemi +6%', 'Silný proti bossům +6%', 'Max. ZB +9%', 'Magická obrana +14', 'Šance na obranu proti útokům surů +5%', 'Silný proti surům 3%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Mýtický Dračí safír (čistý)',
          imgIcon: 'https://img.m2icondb.com/145100.png',
          bonusy: ['POH +7', 'Odolnost proti zemi +4%', 'Silný proti zemi +7%', 'Silný proti bossům +7%', 'Max. ZB +10%', 'Magická obrana +17', 'Šance na obranu proti útokům surů +6%', 'Silný proti surům 4%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Mýtický Dračí safír (bezchybný)',
          imgIcon: 'https://img.m2icondb.com/145200.png',
          bonusy: ['POH +8', 'Odolnost proti zemi +4%', 'Silný proti zemi +8%', 'Silný proti bossům +8%', 'Max. ZB +12%', 'Magická obrana +20', 'Šance na obranu proti útokům surů +8%', 'Silný proti surům 4%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Mýtický Dračí safír (briliantní)',
          imgIcon: 'https://img.m2icondb.com/145300.png',
          bonusy: ['POH +12', 'Odolnost proti zemi +6%', 'Silný proti zemi +12%', 'Silný proti bossům +12%', 'Max. ZB +18%', 'Magická obrana +30', 'Šance na obranu proti útokům surů +11%', 'Silný proti surům 6%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Mýtický Dračí safír (excelentní)',
          imgIcon: 'https://img.m2icondb.com/145400.png',
          bonusy: ['POH +16', 'Odolnost proti zemi +8%', 'Silný proti zemi +16%', 'Silný proti bossům +16%', 'Max. ZB +24%', 'Magická obrana +40', 'Šance na obranu proti útokům surů +15%', 'Silný proti surům 8%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
      ]
    },
    { 
      equipment: "granat",
      kameny: [
        { 
          nazev: 'Legendární Dračí granát (matný)',
          imgIcon: 'https://img.m2icondb.com/154000.png',
          bonusy: ['Max. ZB +600', 'Odolnost proti blesku +3%', 'Silný proti kamenům +5%', 'Obnovení ZB +8%', 'Odolnost proti poškození schopností 3%', 'Šance na obranu proti útokům šamanů +5%', 'Silný proti šamanům 3%', ''],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Legendární Dračí granát (čistý)',
          imgIcon: 'https://img.m2icondb.com/154100.png',
          bonusy: ['Max. ZB +660', 'Odolnost proti blesku +3%', 'Silný proti kamenům +6%', 'Obnovení ZB +9%', 'Odolnost proti poškození schopností 3%', 'Šance na obranu proti útokům šamanů +5%', 'Silný proti šamanům 3%', ''],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Legendární Dračí granát (bezchybný)',
          imgIcon: 'https://img.m2icondb.com/154200.png',
          bonusy: ['Max. ZB +780', 'Odolnost proti blesku +4%', 'Silný proti kamenům +7%', 'Obnovení ZB +10%', 'Odolnost proti poškození schopností 4%', 'Šance na obranu proti útokům šamanů +6%', 'Silný proti šamanům 4%', ''],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Legendární Dračí granát (briliantní)',
          imgIcon: 'https://img.m2icondb.com/154300.png',
          bonusy: ['Max. ZB +1080', 'Odolnost proti blesku +5%', 'Silný proti kamenům +9%', 'Obnovení ZB +14%', 'Odolnost proti poškození schopností 5%', 'Šance na obranu proti útokům šamanů +9%', 'Silný proti šamanům 5%', ''],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Legendární Dračí granát (excelentní)',
          imgIcon: 'https://img.m2icondb.com/154400.png',
          bonusy: ['Max. ZB +1440', 'Odolnost proti blesku +6%', 'Silný proti kamenům +12%', 'Obnovení ZB +18%', 'Odolnost proti poškození schopností 6%', 'Šance na obranu proti útokům šamanů +11%', 'Silný proti šamanům 6%', ''],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },


{ 
          nazev: 'Mýtický Dračí granát (matný)',
          imgIcon: 'https://img.m2icondb.com/155000.png',
          bonusy: ['Max. ZB +660', 'Odolnost proti blesku +3%', 'Silný proti blesku +6%', 'Silný proti kamenům +6%', 'Obnovení ZB +9%', 'Odolnost proti poškození schopností 3%', 'Šance na obranu proti útokům šamanů +5%', 'Silný proti šamanům 3%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Mýtický Dračí granát (čistý)',
          imgIcon: 'https://img.m2icondb.com/155100.png',
          bonusy: ['Max. ZB +780', 'Odolnost proti blesku +4%', 'Silný proti blesku +7%', 'Silný proti kamenům +7%', 'Obnovení ZB +10%', 'Odolnost proti poškození schopností 4%', 'Šance na obranu proti útokům šamanů +6%', 'Silný proti šamanům 4%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Mýtický Dračí granát (bezchybný)',
          imgIcon: 'https://img.m2icondb.com/155200.png',
          bonusy: ['Max. ZB +960', 'Odolnost proti blesku +4%', 'Silný proti blesku +8%', 'Silný proti kamenům +8%', 'Obnovení ZB +12%', 'Odolnost proti poškození schopností 4%', 'Šance na obranu proti útokům šamanů +8%', 'Silný proti šamanům 4%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Mýtický Dračí granát (briliantní)',
          imgIcon: 'https://img.m2icondb.com/155300.png',
          bonusy: ['Max. ZB +1440', 'Odolnost proti blesku +6%', 'Silný proti blesku +12%', 'Silný proti kamenům +12%', 'Obnovení ZB +18%', 'Odolnost proti poškození schopností 6%', 'Šance na obranu proti útokům šamanů +11%', 'Silný proti šamanům 6%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Mýtický Dračí granát (excelentní)',
          imgIcon: 'https://img.m2icondb.com/155400.png',
          bonusy: ['Max. ZB +1920', 'Odolnost proti blesku +8%', 'Silný proti blesku +16%', 'Silný proti kamenům +16%', 'Obnovení ZB +24%', 'Odolnost proti poškození schopností 8%', 'Šance na obranu proti útokům šamanů +15%', 'Silný proti šamanům 8%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
      ]
    },
    { 
      equipment: "onyx",
      kameny: [
        { 
          nazev: 'Legendární Dračí onyx (matný)',
          imgIcon: 'https://img.m2icondb.com/164000.png',
          bonusy: ['VIT +5', 'Odolnost vůči temnotě +3%', 'Průměrná škoda 3%', 'Průměrná odolnost proti škodě 3%', '5% šance odrazit přímý tělesný útok', '5% šance vyhnout se šípům', 'Šance odvrátit útok 5%', ''],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Legendární Dračí onyx (čistý)',
          imgIcon: 'https://img.m2icondb.com/164100.png',
          bonusy: ['VIT +6', 'Odolnost vůči temnotě +3%', 'Průměrná škoda 4%', 'Průměrná odolnost proti škodě 3%', '6% šance odrazit přímý tělesný útok', '6% šance vyhnout se šípům', 'Šance odvrátit útok 6%', ''],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Legendární Dračí onyx (bezchybný)',
          imgIcon: 'https://img.m2icondb.com/164200.png',
          bonusy: ['VIT +7', 'Odolnost vůči temnotě +4%', 'Průměrná škoda 4%', 'Průměrná odolnost proti škodě 4%', '7% šance odrazit přímý tělesný útok', '7% šance vyhnout se šípům', 'Šance odvrátit útok 7%', ''],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Legendární Dračí onyx (briliantní)',
          imgIcon: 'https://img.m2icondb.com/164300.png',
         bonusy: ['VIT +9', 'Odolnost vůči temnotě +5%', 'Průměrná škoda 6%', 'Průměrná odolnost proti škodě 5%', '9% šance odrazit přímý tělesný útok', '9% šance vyhnout se šípům', 'Šance odvrátit útok 9%', ''],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Legendární Dračí onyx (excelentní)',
          imgIcon: 'https://img.m2icondb.com/164400.png',
          bonusy: ['VIT +12', 'Odolnost vůči temnotě +6%', 'Průměrná škoda 8%', 'Průměrná odolnost proti škodě 6%', '12% šance odrazit přímý tělesný útok', '12% šance vyhnout se šípům', 'Šance odvrátit útok 12%', ''],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },


{ 
          nazev: 'Mýtický Dračí onyx (matný)',
          imgIcon: 'https://img.m2icondb.com/165000.png',
          bonusy: ['VIT +6', 'Odolnost vůči temnotě +3%', 'Síla proti temnotě +6%', 'Průměrná škoda 4%', 'Průměrná odolnost proti škodě 3%', '6% šance odrazit přímý tělesný útok', '6% šance vyhnout se šípům', 'Šance odvrátit útok 6%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Mýtický Dračí onyx (čistý)',
          imgIcon: 'https://img.m2icondb.com/165100.png',
          bonusy: ['VIT +7', 'Odolnost vůči temnotě +4%', 'Síla proti temnotě +7%', 'Průměrná škoda 4%', 'Průměrná odolnost proti škodě 4%', '7% šance odrazit přímý tělesný útok', '7% šance vyhnout se šípům', 'Šance odvrátit útok 7%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Mýtický Dračí onyx (bezchybný)',
          imgIcon: 'https://img.m2icondb.com/165200.png',
          bonusy: ['VIT +8', 'Odolnost vůči temnotě +4%', 'Síla proti temnotě +8%', 'Průměrná škoda 5%', 'Průměrná odolnost proti škodě 4%', '8% šance odrazit přímý tělesný útok', '8% šance vyhnout se šípům', 'Šance odvrátit útok 8%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Mýtický Dračí onyx (briliantní)',
          imgIcon: 'https://img.m2icondb.com/165300.png',
          bonusy: ['VIT +12', 'Odolnost vůči temnotě +6%', 'Síla proti temnotě +12%', 'Průměrná škoda 8%', 'Průměrná odolnost proti škodě 6%', '12% šance odrazit přímý tělesný útok', '12% šance vyhnout se šípům', 'Šance odvrátit útok 12%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Mýtický Dračí onyx (excelentní)',
          imgIcon: 'https://img.m2icondb.com/165400.png',
          bonusy: ['VIT +16', 'Odolnost vůči temnotě +8%', 'Síla proti temnotě +16%', 'Průměrná škoda 10%', 'Průměrná odolnost proti škodě 8%', '16% šance odrazit přímý tělesný útok', '16% šance vyhnout se šípům', 'Šance odvrátit útok 16%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
      ]
    },
    { 
      equipment: "ametyst",
      kameny: [
        { 
          nazev: 'Legendární Dračí ametyst (matný)',
          imgIcon: 'https://img.m2icondb.com/174000.png',
          bonusy: ['VIT,INT,SIL,POH +5', 'Silný proti všem elementům +5%', 'Silný proti příšerám 5%', 'Proražení obouručkou 2%', 'Proražení mečem 2%', 'Proražení zvonem 2%', 'Proražení vějířem 2%', 'Proražení dýkou 2%', 'Proražení lukem 2%', 'Šance na otrávení 2%', 'Odolnost proti lidem 3%'],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{
          nazev: 'Legendární Dračí ametyst (čistý)',
          imgIcon: 'https://img.m2icondb.com/174100.png',
          bonusy: ['VIT,INT,SIL,POH +6', 'Silný proti všem elementům +6%', 'Silný proti příšerám 6%', 'Proražení obouručkou 2%', 'Proražení mečem 2%', 'Proražení zvonem 2%', 'Proražení vějířem 2%', 'Proražení dýkou 2%', 'Proražení lukem 2%', 'Šance na otrávení 3%', 'Odolnost proti lidem 3%'],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Legendární Dračí ametyst (bezchybný)',
          imgIcon: 'https://img.m2icondb.com/174200.png',
          bonusy: ['VIT,INT,SIL,POH +7', 'Silný proti všem elementům +7%', 'Silný proti příšerám 7%', 'Proražení obouručkou 2%', 'Proražení mečem 2%', 'Proražení zvonem 2%', 'Proražení vějířem 2%', 'Proražení dýkou 2%', 'Proražení lukem 2%', 'Šance na otrávení 3%', 'Odolnost proti lidem 4%'],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Legendární Dračí ametyst (briliantní)',
          imgIcon: 'https://img.m2icondb.com/174300.png',
          bonusy: ['VIT,INT,SIL,POH +9', 'Silný proti všem elementům +9%', 'Silný proti příšerám 9%', 'Proražení obouručkou 3%', 'Proražení mečem 3%', 'Proražení zvonem 3%', 'Proražení vějířem 3%', 'Proražení dýkou 3%', 'Proražení lukem 3%', 'Šance na otrávení 4%', 'Odolnost proti lidem 5%'],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Legendární Dračí ametyst (excelentní)',
          imgIcon: 'https://img.m2icondb.com/174400.png',
          bonusy: ['VIT,INT,SIL,POH +12', 'Silný proti všem elementům +12%', 'Silný proti příšerám 12%', 'Proražení obouručkou 4%', 'Proražení mečem 4%', 'Proražení zvonem 4%', 'Proražení vějířem 4%', 'Proražení dýkou 4%', 'Proražení lukem 4%', 'Šance na otrávení 5%', 'Odolnost proti lidem 6%'],
          barvy: ['', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },

{ 
          nazev: 'Mýtický Dračí ametyst (matný)',
          imgIcon: 'https://img.m2icondb.com/175000.png',
          bonusy: ['VIT,INT,SIL,POH +6', 'Silný proti všem elementům +6%', 'Průraznost pirátům +6%', 'Silný proti příšerám 6%', 'Proražení obouručkou 2%', 'Proražení mečem 2%', 'Proražení zvonem 2%', 'Proražení vějířem 2%', 'Proražení dýkou 2%', 'Proražení lukem 2%', 'Šance na otrávení 3%', 'Odolnost proti lidem 3%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Mýtický Dračí ametyst (čistý)',
          imgIcon: 'https://img.m2icondb.com/175100.png',
          bonusy: ['VIT,INT,SIL,POH +7', 'Silný proti všem elementům +7%', 'Průraznost pirátům +7%', 'Silný proti příšerám 7%', 'Proražení obouručkou 2%', 'Proražení mečem 2%', 'Proražení zvonem 2%', 'Proražení vějířem 2%', 'Proražení dýkou 2%', 'Proražení lukem 2%', 'Šance na otrávení 3%', 'Odolnost proti lidem 4%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Mýtický Dračí ametyst (bezchybný)',
          imgIcon: 'https://img.m2icondb.com/175200.png',
          bonusy: ['VIT,INT,SIL,POH +8', 'Silný proti všem elementům +8%', 'Průraznost pirátům +8%', 'Silný proti příšerám 8%', 'Proražení obouručkou 3%', 'Proražení mečem 3%', 'Proražení zvonem 3%', 'Proražení vějířem 3%', 'Proražení dýkou 3%', 'Proražení lukem 3%', 'Šance na otrávení 4%', 'Odolnost proti lidem 4%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Mýtický Dračí ametyst (briliantní)',
          imgIcon: 'https://img.m2icondb.com/175300.png',
          bonusy: ['VIT,INT,SIL,POH +12', 'Silný proti všem elementům +12%', 'Průraznost pirátům +12%', 'Silný proti příšerám 12%', 'Proražení obouručkou 4%', 'Proražení mečem 4%', 'Proražení zvonem 4%', 'Proražení vějířem 4%', 'Proražení dýkou 4%', 'Proražení lukem 4%', 'Šance na otrávení 5%', 'Odolnost proti lidem 6%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
{ 
          nazev: 'Mýtický Dračí ametyst (excelentní)',
          imgIcon: 'https://img.m2icondb.com/175400.png',
          bonusy: ['VIT,INT,SIL,POH +16', 'Silný proti všem elementům +16%', 'Průraznost pirátům +16%', 'Silný proti příšerám 16%', 'Proražení obouručkou 5%', 'Proražení mečem 5%', 'Proražení zvonem 5%', 'Proražení vějířem 5%', 'Proražení dýkou 5%', 'Proražení lukem 5%', 'Šance na otrávení 7%', 'Odolnost proti lidem 8%'],
          barvy: ['', '', '', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6', '#dfd8c6']
        },
      ]
    },
    
  ];

  const selectedData = dračíKamenyData.find(item => item.equipment === selectedEquipment);

  return (
    <Container className='main'>
      <Typography className="boxnadpis1">Dračí Alchymie</Typography>

      <div>
        <Container className='stred'>
          <button
            className={`x2 ${selectedEquipment === 'diamant' ? 'active' : ''}`}
            onClick={() => handleEquipmentChange("diamant")}
            style={{ marginRight: '10px'}}
            disabled={selectedEquipment === "diamant"}
          >
          <div>
            <img src="https://img.m2icondb.com/115400.png" alt=""></img>
            <Typography>Diamant</Typography>
          </div>
          </button>
          <button
            className={`x2 ${selectedEquipment === 'rubin' ? 'active' : ''}`}
            onClick={() => handleEquipmentChange("rubin")}
            style={{ marginRight: '10px' }}
            disabled={selectedEquipment === "rubin"}
          >
            <img src="https://img.m2icondb.com/125400.png" alt=""></img>
            <Typography>Rubín</Typography>
          </button>
          <button
            className={`x2 ${selectedEquipment === 'nefrit' ? 'active' : ''}`}
            onClick={() => handleEquipmentChange("nefrit")}
            style={{ marginRight: '10px' }}
            disabled={selectedEquipment === "nefrit"}
          >
            <img src="https://img.m2icondb.com/135400.png" alt=""></img>
            <Typography>Nefrit</Typography>
          </button>
          <button
            className={`x2 ${selectedEquipment === 'safir' ? 'active' : ''}`}
            onClick={() => handleEquipmentChange("safir")}
            style={{ marginRight: '10px' }}
            disabled={selectedEquipment === "safir"}
          >
            <img src="https://img.m2icondb.com/145400.png" alt=""></img>
            <Typography>Safír</Typography>
          </button>
          <button
            className={`x2 ${selectedEquipment === 'granat' ? 'active' : ''}`}
            onClick={() => handleEquipmentChange("granat")}
            style={{ marginRight: '10px' }}
            disabled={selectedEquipment === "granat"}
          >
            <img src="https://img.m2icondb.com/155400.png" alt=""></img>
            <Typography>Granát</Typography>
          </button>
          <button
            className={`x2 ${selectedEquipment === 'onyx' ? 'active' : ''}`}
            onClick={() => handleEquipmentChange("onyx")}
            style={{ marginRight: '10px' }}
            disabled={selectedEquipment === "onyx"}
          >
            <img src="https://img.m2icondb.com/165400.png" alt=""></img>
            <Typography>Onyx</Typography>
          </button>
          <button
            className={`x2 ${selectedEquipment === 'ametyst' ? 'active' : ''}`}
            onClick={() => handleEquipmentChange("ametyst")}
            style={{ marginRight: '10px' }}
            disabled={selectedEquipment === "ametyst"}
          >
            <img src="https://img.m2icondb.com/175400.png" alt=""></img>
            <Typography>Ametyst</Typography>
          </button>
        </Container>


      </div>

      <div>
        <Box className="vedle">
          {selectedData.kameny.map((kámen, index) => (
            <div key={index} className={`boxik velikost ${index === activeIndex ? 'selected' : ''}`} onClick={() => switchMap(index)}>
              <div className='fixik'>
                <img src={kámen.imgIcon} alt={kámen.nazev} />
              </div>
            </div>
          ))}
        </Box>
      </div>

      {activeIndex !== null && <DračíKamenTable data={[selectedData.kameny[activeIndex]]} />}

      <Box className="textbox3">
        <Typography className="boxnadpis2">Druhy Dračích Kamenů:</Typography>
        <img src="./imgs/alcha.png" alt="" className='odstup trosku'></img>
        <Typography paragraph className="text1">
        Existuje sedm druhů dračích kamenů:&nbsp;<b>Diamant, Rubín, Nefrit, Safír, Granát, Onyx a Ametyst</b>. Každý kámen má specifické bonusy a vlastnosti.
        </Typography>
      <Typography className="boxnadpis2">Získávání dračí alchymie:</Typography>
        <Typography paragraph className="text1">Dračí alchymii získáte z Cor draconis, které dropují monstra a bossové. Silnější bossové obvykle dropují Cor draconis s vyšší úrovní alchymie.</Typography>
        <Typography className="boxnadpis2">Vylepšování dračích kamenů:</Typography>
        <Typography paragraph className="text1">Existují tři způsoby vylepšování dračích kamenů:</Typography>
        <Typography paragraph className="text1 spesl">a) Stupeň</Typography>
        <img src="./imgs/stupne.png" alt="" className=''></img>
        <Typography paragraph className="text1"><b>Celkem 6 stupňů:</b> <br></br> &#x2022; Surový<br></br>&#x2022; Broušený<br></br>&#x2022; Vzácný<br></br>&#x2022; Starověký<br></br>&#x2022; Legendární<br></br>&#x2022; Mýtický <br></br></Typography>
        <Typography paragraph className="text1">Stupeň vylepšujeme spojením 2 stejných kamenů. Čím lepší stupeň alchymie, tím silnější jsou bonusy v danném kameni.</Typography>
        <Typography paragraph className="text1">Zvyšuje se také počet bonusů, které kámen může mít.</Typography>
        <img src="./imgs/stupen.png" alt="" className='odstup mene'></img>
        <Typography paragraph className="text1 spesl">b) Stupeň čirosti</Typography>
        <Typography paragraph className="text1"><b>5 stupňů čirosti:</b> <br></br> &#x2022; Matný<br></br>&#x2022; Čistý<br></br>&#x2022; Bezchybný<br></br>&#x2022; Briliantní<br></br>&#x2022; Excelentní</Typography>
        <img src="./imgs/cirost.png" alt="" className='odstup mene'></img>
        <Typography paragraph className="text1">Stupeň vylepšujeme spojením 2 stejných kamenů. Čím lepší stupeň alchymie, tím silnější jsou bonusy v danném kameni. Zvyšuje se také počet bonusů, které kámen může mít.</Typography>
        <Typography paragraph className="text1 spesl">c) Úroveň</Typography>
        <img src="./imgs/uroven.png" alt="" className='odstup'></img>
        <Typography paragraph className="text1">Úroveň se obvykle vylepšuje jako poslední, pokud má požadované bonusy, čirost a stupeň.</Typography>
        <Typography paragraph className="text1 center">Vylepšování probíhá pomocí <img src="https://img.m2icondb.com/100300.png" alt="" ></img> zelených dračích fazolí, které se dají získat z metinů úrovně 90 a výše.</Typography>
        <Typography paragraph className="text1">Čirost od matné po bezchybnou lze vylepšit maximálně na 4 úrovně. Brilantní alchymii až na 5 úrovní a Excelentní na 6 úrovní.</Typography>
        <Typography paragraph className="text1">Čím vyšší úroveň kámen má, tím silnější je.</Typography>
        <Typography className="boxnadpis2">Změna bonusů:</Typography>
        <Typography paragraph className="text1">
        Bonusy u dračí alchymie lze měnit pomocí <img src="https://img.m2icondb.com/100700.png" alt="" className=''></img> Dračího plamane. Tento vzácný předmět lze s nízkou šancí získat z Truhly Kostlivého draka.
        </Typography>
      </Box>

    </Container>
  );
};

export default Alchymie;
