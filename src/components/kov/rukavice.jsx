import React from 'react';
import Vybava from './vybava';
import { rukaviceData } from './data/dataRukavice';

const Rukavice = () => {
  return <Vybava equipmentType="rukavice" data={rukaviceData} />;
};

export default Rukavice;