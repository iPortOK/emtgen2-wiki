import React from 'react';
import './mapy.css';
import MapComponent from './map_component';

const Dungeony = () => {
  return (
    <div>
      <MapComponent
        nazev="Brutální velitel"
        imgSrc="./imgs/boss_1.png"
        pozadi="./imgs/dung_1.png"
        dostupneOd="20 - 57"
        doporuceneBonusy={[
          { imgSrc: 'https://img.m2icondb.com/53290.png', text: 'Silný proti pololidem' }
        ]}
        dropItems={[
          { imgSrc: 'https://img.m2icondb.com/06080.png' },
          { imgSrc: 'https://img.m2icondb.com/13160.png' },
        ]}
      />
    </div>
    
  );
};

export default Dungeony;
