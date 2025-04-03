import React from 'react';
import { kamenyData } from './data/kamenyData';
import Tabulkos from '../ostatni/tabulkos';

const Kameny = () => {
    return <Tabulkos equipmentType="kameny" data={kamenyData} />;
};

export default Kameny;