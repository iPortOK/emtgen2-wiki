import React, { useState } from 'react';
import Vybava from './vybava';
import { samanZbranZvonData, samanZbranVejirData } from './data/dataSamanZbran';
import './vyber.css';
import { Container } from '@mui/material';

const SamanZbran = () => {
  const [selectedEquipment, setSelectedEquipment] = useState("vejir");

  const handleEquipmentChange = (equipmentType) => {
    setSelectedEquipment(equipmentType);
  };

  return (
    <div>
      <Container className='vyber'>
      <button
          className={`x2 ${selectedEquipment === 'vejir' ? 'active' : ''}`}
          onClick={() => handleEquipmentChange("vejir")}
          style={{ marginRight: '10px' }}
          disabled={selectedEquipment === "vejir"}
        >
          Zvon
        </button>
        <button
          className={`x2 ${selectedEquipment === 'zvon' ? 'active' : ''}`}
          onClick={() => handleEquipmentChange("zvon")}
          disabled={selectedEquipment === "zvon"}
        >
          Vějíř
        </button>
      </Container>
      <Vybava equipmentType={selectedEquipment} data={selectedEquipment === "vejir" ? samanZbranZvonData : samanZbranVejirData} />
    </div>
  );
};
export default SamanZbran;