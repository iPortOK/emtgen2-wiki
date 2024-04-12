export function createStats(...columns) {
    const stats = {};
    columns.forEach((column, index) => {
      stats[`RADEK_${index}`] = column;
    });
    return stats;
  }
  
export function createImage(...images) {
    const imageObj = {};
    images.forEach((image, index) => {
      imageObj[`IMG_${index}`] = image;
    });
    return imageObj;
}

export function createEquipmentItem(pocet, name, imageSrc, description, stats, images) {
    return { pocet, name, imageSrc, description, stats, images };
}

