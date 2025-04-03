import React from 'react';
import { krystalyData } from './data/krystalyData';
import Tabulkos from '../ostatni/tabulkos';

const Krystaly = () => {
    return <Tabulkos equipmentType="krystaly" data={krystalyData} />;
};

export default Krystaly;