import React from 'react';
import Vybava from './vybava';
import { suraZbranData } from './data/dataSuraZbran';

const SuraZbran = () => {
  return <Vybava equipmentType="sura_zbran" data={suraZbranData} />;
};

export default SuraZbran;