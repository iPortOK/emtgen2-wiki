import React from 'react';
import Vybava from './vybava';
import { talismanData } from './data/dataTalisman';

const Talisman = () => {
  return <Vybava equipmentType="talisman" data={talismanData} />;
};

export default Talisman;