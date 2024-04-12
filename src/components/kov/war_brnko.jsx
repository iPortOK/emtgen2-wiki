import React from 'react';
import Vybava from './vybava';
import { warBrnkoData } from './data/dataWarBrnko';

const WarBrnko = () => {
  return <Vybava equipmentType="war_brnko" data={warBrnkoData} />;
};

export default WarBrnko;