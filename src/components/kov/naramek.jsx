import React from 'react';
import Vybava from './vybava';
import { naramekData } from './data/dataNaramek';

const Naramek = () => {
  return <Vybava equipmentType="naramek" data={naramekData} />;
};

export default Naramek;