import React, { useState } from 'react';
import Vybava from './vybava';
import { warZbran2Data, warZbranData } from './data/dataWarZbran';
import './vyber.css';
import { Container } from '@mui/material';

const WarZbran = () => {
  const [selectedEquipment, setSelectedEquipment] = useState("obourucni_mec");

  const handleEquipmentChange = (equipmentType) => {
    setSelectedEquipment(equipmentType);
  };

  return (
    <div>
      <Container className='vyber'>
        <button
          className={`x2 ${selectedEquipment === 'obourucni_mec' ? 'active' : ''}`}
          onClick={() => handleEquipmentChange("obourucni_mec")}
          style={{ marginRight: '10px' }}
          disabled={selectedEquipment === "obourucni_mec"}
        >
          Obouruční meč
        </button>
        <button
          className={`x2 ${selectedEquipment === 'mec' ? 'active' : ''}`}
          onClick={() => handleEquipmentChange("mec")}
          disabled={selectedEquipment === "mec"}
        >
          Meč
        </button>
      </Container>
      <Vybava equipmentType={selectedEquipment} data={selectedEquipment === "obourucni_mec" ? warZbran2Data : warZbranData} />
    </div>
  );
};

export default WarZbran;
