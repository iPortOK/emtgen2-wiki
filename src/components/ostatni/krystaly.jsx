import React from 'react';
import { krystalyData } from './krystalyData';
import Tabulkos from './tabulkos';

const Krystaly = () => {
    return <Tabulkos equipmentType="krystaly" data={krystalyData} />;
};

export default Krystaly;