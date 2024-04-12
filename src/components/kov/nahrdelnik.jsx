import React from 'react';
import Vybava from './vybava';
import { nahrdelnikData } from './data/dataNahrdelnik';

const Nahrdelnik = () => {
  return <Vybava equipmentType="nahrdelnik" data={nahrdelnikData} />;
};

export default Nahrdelnik;