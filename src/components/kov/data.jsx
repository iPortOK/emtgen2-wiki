function createStats(SLOUPEC_0, SLOUPEC_1, SLOUPEC_2, SLOUPEC_3, SLOUPEC_4, SLOUPEC_5, SLOUPEC_6, SLOUPEC_7, SLOUPEC_8, SLOUPEC_9, SLOUPEC_10) {
  return { SLOUPEC_0, SLOUPEC_1, SLOUPEC_2, SLOUPEC_3, SLOUPEC_4, SLOUPEC_5, SLOUPEC_6, SLOUPEC_7, SLOUPEC_8, SLOUPEC_9, SLOUPEC_10 };
}

function createImage(IMG_0, IMG_1, IMG_2, IMG_3, IMG_4, IMG_5, IMG_6, IMG_7, IMG_8, IMG_9, IMG_10) {
  return {IMG_0, IMG_1, IMG_2, IMG_3, IMG_4, IMG_5, IMG_6, IMG_7, IMG_8, IMG_9, IMG_10 };
}

function createEquipmentItem(name, imageSrc, description, stats, images) {
  return { name, imageSrc, description, stats, images };
}

export const warZbranData = [
  createEquipmentItem('Helma s rohy', './items/Uplnkovy_mec.png', 'Dodatečný popis', {
    RADEK_0: createStats("Od úrovně:", 60, 60, 60, 60, 60, 60, 60, 60, 60, 60),
    RADEK_1: createStats("Obrana", "+17", "+21", "+25", "+29", "+39", "+49", "+59", "+69", "+79", "+89"),
    RADEK_2: createStats("Šance odvrátit útok", "1%", "2%", "3%", "4%", "5%", "6%", "7%", "8%", "9%", "10%"),
    MEZERA_X: createStats(),
    RADEK_3: createStats("Šance: ", "-", "90%", "80%", "70%", "60%", "50%", "4%0", "30%", "20%", "10%"),
    RADEK_4: createStats("cena: ", "-", "15k", "25k", "45k", "65k", "90k", "100k", "110k", "125k", "150k"),
    RADEK_5: createStats("Potřebné itemy:", "", "", "", "", "", "", "", "1x", "3x", "8x"),
    RADEK_6: createStats("", "", "", "", "", "", "", "", "1x", "3x", "8x"),
  }, {
    IMG_0: createImage("", "", "", "", "", "", "", "", "", "", ""),
    IMG_1: createImage("", "", "", "", "", "", "", "", "", "", ""),
    IMG_2: createImage("", "", "", "", "", "", "", "", "", "", ""),
    RADEK_X: createStats(),
    IMG_3: createImage("", "", "", "", "", "", "", "", "", "", ""),
    IMG_4: createImage("", "", "", "", "", "", "", "", "", "", ""),
    IMG_5: createImage("", "", "", "", "", "", "", "", "https://img.m2icondb.com/12530.png", "https://img.m2icondb.com/12530.png", "https://img.m2icondb.com/12530.png"),
    IMG_6: createImage("", "", "", "", "", "", "", "", "https://img.m2icondb.com/01090.png", "https://img.m2icondb.com/01090.png", "https://img.m2icondb.com/01090.png"),
  }),
];
export const suraZbranData = [];
export const samanZbranData = [];
export const ninjaZbranData = [];
export const warBrnkoData = [];
export const suraBrnkoData = [];
export const samanBrnkoData = [];
export const ninjaBrnkoData = [];

export const prstenData = [];
export const rukaviceData = [];
export const serpaData = [];
export const talismanData = [];
export const alchymieData = [];
export const auraData = [];

