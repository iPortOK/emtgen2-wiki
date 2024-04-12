import React from 'react';
import Vybava from './vybava';
import { suraBrnkoData } from './data/dataSuraBrnko';

const SuraBrnko = () => {
  return <Vybava equipmentType="sura_brnko" data={suraBrnkoData} />;
};

export default SuraBrnko;