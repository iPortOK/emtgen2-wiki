import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import 'animate.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Tabulkos = ({ equipmentType, data }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedItem(0);
  }, []);

  useEffect(() => {
    const detailElement = document.querySelector('.detail');
    if (detailElement) {
      detailElement.classList.remove('animate__animated');
      void detailElement.offsetWidth;
      detailElement.classList.add('animate__animated');
    }
  }, [selectedItem]);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const handleBackButtonClick = () => {
    navigate('/');
  };

  const renderDetail = () => {
    if (selectedItem !== null && data.length > 0) {
      const selectedItemData = data[selectedItem];

      return (
        <div className="detail">
          <Typography className='nazev nadtabulkou'>{selectedItemData.name}</Typography>
          <ItemTable stats={Object.values(selectedItemData.stats)} images={Object.values(selectedItemData.images)} item={selectedItemData} />
          {selectedItemData.description && selectedItemData.description.trim() !== '' && (
            <div className='popis'>
              <Typography className='nazev'>{selectedItemData.description}</Typography>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <Container className='main'>
      <div className='tlacitkozpet'>
        <ArrowBackIcon className='buttonzpet' onClick={handleBackButtonClick}></ArrowBackIcon>
      </div>
      <Box className="box">
        {data.map((item, index) => (
          <div key={index} className={`boxik ${index === selectedItem ? 'selected' : ''}`} onClick={() => handleItemClick(index)}>
            <img src={item.imageSrc} alt={item.name} title={item.name} className="vybava-image" />
          </div>
        ))}
      </Box>
      <div className='cara'>
        <Typography className="title carik"></Typography>
      </div>
      <Box>
        {renderDetail()}
      </Box>
    </Container>
  );
};

const ItemTable = ({ stats, images, item }) => {
  const statKeys = Object.keys(stats[0]);
  const imageKeys = Object.keys(images[0]);
  const pocet = item.pocet;

  return (
    <TableContainer className="table-container fadeIn">
      <Table size="small" aria-label="a dense table">
        <TableHead className='hlavicka' >
          <TableRow>
            <TableCell className='podhlavicka'><img src={item.images.IMG_0} alt='' className="vybava-image" /></TableCell>
            {[...Array(pocet).keys()].map((num) => (
              <TableCell className='podhlavicka' key={num}>+{num}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody className='tabulka'>
          {stats.map((stat, statIndex) => (
            <TableRow className='radek' key={statIndex}>
              {statKeys.map((key, index) => (
                <TableCell key={index} className='bunka' >
                  <div className='uppky'>
                    {stat[key]}
                    {imageKeys[index] && images[statIndex] && images[statIndex][imageKeys[index]] && (
                      <div className='tooltip-container'>
                        <img
                          className='objazek'
                          src={images[statIndex][imageKeys[index]]}
                          alt={``}
                          width="32" 
                          height="32"
                        />
                        <span className='tooltip'>
                          {images[statIndex][imageKeys[index]].split('/').pop().replace('.png', '')}
                        </span>
                      </div>
                    )}
                  </div>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Tabulkos;
