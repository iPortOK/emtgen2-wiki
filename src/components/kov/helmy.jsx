import React from 'react';
import Vybava from './vybava';
import { helmyData } from './data/dataHelmy';

const Helmy = () => {
  return <Vybava equipmentType="helmy" data={helmyData} />;
};

export default Helmy;