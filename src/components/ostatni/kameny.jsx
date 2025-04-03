import React from 'react';
import { kamenyData } from './kamenyData';
import Tabulkos from './tabulkos';

const Kameny = () => {
    return <Tabulkos equipmentType="kameny" data={kamenyData} />;
};

export default Kameny;