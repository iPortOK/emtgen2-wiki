import React from 'react';
import Vybava from './vybava';
import { ninjaBrnkoData } from './data/dataNinjaBrnko';

const NinjaBrnko = () => {
  return <Vybava equipmentType="ninja_brnko" data={ninjaBrnkoData} />;
};

export default NinjaBrnko;