import React from 'react';
import Vybava from './vybava';
import { prstenData } from './data/dataPrsten';

const Prsten = () => {
  return <Vybava equipmentType="prsten" data={prstenData} />;
};

export default Prsten;