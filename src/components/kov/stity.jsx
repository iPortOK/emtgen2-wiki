import React from 'react';
import Vybava from './vybava';
import { stityData } from './data/dataStity';

const Stity = () => {
  return <Vybava equipmentType="stity" data={stityData} />;
};

export default Stity;