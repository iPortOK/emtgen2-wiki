import React from 'react';
import Vybava from './vybava';
import { samanBrnkoData } from './data/dataSamanBrnko';

const SamanBrnko = () => {
  return <Vybava equipmentType="saman_brnko" data={samanBrnkoData} />;
};

export default SamanBrnko;