import React from 'react';
import Vybava from './vybava';
import { opasekData } from './data/dataOpasky';

const Opasek = () => {
  return <Vybava equipmentType="opasek" data={opasekData} />;
};

export default Opasek;