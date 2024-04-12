import React from 'react';
import Vybava from './vybava';
import { botyData } from './data/dataBoty';

const Boty = () => {
  console.log('Boty Data:', botyData);
  
  return <Vybava equipmentType="boty" data={botyData} />;
};

export default Boty;