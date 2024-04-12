import React from 'react';
import Vybava from './vybava';
import { nausniceData } from './data/dataNausnice';

const Nausnice = () => {
  return <Vybava equipmentType="nausnice" data={nausniceData} />;
};

export default Nausnice;