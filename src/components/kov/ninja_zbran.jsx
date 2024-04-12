import React, { useState } from 'react';
import Vybava from './vybava';
import { ninjaZbranDykyData, ninjaZbranLukData } from './data/dataNinjaZbran';
import { warZbranData } from './data/dataWarZbran';
import './vyber.css';
import { Container } from '@mui/material';

const NinjaZbran = () => {
  const [selectedEquipment, setSelectedEquipment] = useState("dyky");

  const handleEquipmentChange = (equipmentType) => {
    setSelectedEquipment(equipmentType);
  };

  return (
  <div>
  <Container className='vyber'>
  <button
      className={`x2 ${selectedEquipment === 'dyky' ? 'active' : ''}`}
      onClick={() => handleEquipmentChange("dyky")}
      style={{ marginRight: '10px'}}
      disabled={selectedEquipment === "dyky"}
    >
      Dýky
    </button>
    <button
      className={`x2 ${selectedEquipment === 'luk' ? 'active' : ''}`}
      onClick={() => handleEquipmentChange("luk")}
      style={{ marginRight: '10px' }}
      disabled={selectedEquipment === "luk"}
    >
      Luk
    </button>
    <button
      className={`x2 ${selectedEquipment === 'mec' ? 'active' : ''}`}
      onClick={() => handleEquipmentChange("mec")}
      disabled={selectedEquipment === "mec"}
    >
      Meč
    </button>
  </Container>
  <Vybava equipmentType={selectedEquipment} data={
    selectedEquipment === "dyky" ? ninjaZbranDykyData :
    selectedEquipment === "luk" ? ninjaZbranLukData :
    selectedEquipment === "sekera" ? warZbranData :
    warZbranData
  } />
</div>
);
};
export default NinjaZbran;