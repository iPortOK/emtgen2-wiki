import { createStats, createImage, createEquipmentItem } from './funkce.js';

  export const nahrdelnikData = [
    createEquipmentItem(10,'Perlový náhrdelník', './items/16120.png', 'Silný divoký poddaný, Silný divoký generál', {
        RADEK_0: createStats("Od úrovně:", 33, 33, 33, 33, 33, 33, 33, 33, 33, 33),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_1: createStats("Rychlost útoku:", "+1%", "+1%", "+2%", "+2%", "+3%", "+3%", "+4%", "+5%", "+6%", "+7%"),
        RADEK_2: createStats("Šance obnovit ZB:", "1%", "1%", "2%", "2%", "3%", "3%", "4%", "4%", "5%", "5%"),
        MEZERA_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_3: createStats("Šance: ", "-", "100%", "100%", "100%", "100%", "90%", "80%", "70%", "55%", "40%"),
        RADEK_4: createStats("cena: ", "-", "10k", "20k", "40k", "80k", "130k", "200k", "400k", "700k", "1,2kk"),
        MEZERA_Y: createStats(),
        RADEK_5: createStats("Potřebné předměty:", "", "", "", "", "", "", "", "1x", "2x", "3x"),
        RADEK_6: createStats("", "", "", "", "", "", "", "", "", "", "1x"),
      }, {
        IMG_0: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_1: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_2: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_3: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_4: createImage("", "", "", "", "", "", "", "", "", "", ""),
        MEZERA_Y: createStats(),
        IMG_5: createImage("", "", "", "", "", "", "", "", "./items/Rybí kůstky.png", "./items/Rybí kůstky.png", "./items/Rybí kůstky.png"),
        IMG_6: createImage("", "", "", "", "", "", "", "", "", "", "./items/Shuriken.png"),
    }),

    createEquipmentItem(10,'Náhrdelník z b. zlata', './items/16140.png', 'Pes útrapy', {
        RADEK_0: createStats("Od úrovně:", 42, 42, 42, 42, 42, 42, 42, 42, 42, 42),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_1: createStats("Rychlost útoku:", "+1%", "+1%", "+2%", "+2%", "+3%", "+3%", "+4%", "+5%", "+6%", "+7%"),
        RADEK_2: createStats("Max. ZB:", "+25", "+45", "+65", "+110", "+180", "+300", "+500", "+800", "+1200", "+1800"),
        MEZERA_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_3: createStats("Šance: ", "-", "100%", "100%", "100%", "80%", "70%", "60%", "50%", "45%", "35%"),
        RADEK_4: createStats("cena: ", "-", "800k", "1,2kk", "2,5kk", "3,5kk", "4kk", "5kk", "6kk", "6,5kk", "9kk"),
        MEZERA_Y: createStats(),
        RADEK_5: createStats("Potřebné předměty:", "", "", "", "", "", "", "", "1x", "2x", "3x"),
        RADEK_6: createStats("", "", "", "", "", "", "", "", "", "", "1x"),
      }, {
        IMG_0: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_1: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_2: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_3: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_4: createImage("", "", "", "", "", "", "", "", "", "", ""),
        MEZERA_Y: createStats(),
        IMG_5: createImage("", "", "", "", "", "", "", "", "./items/Rybí kůstky.png", "./items/Rybí kůstky.png", "./items/Rybí kůstky.png"),
        IMG_6: createImage("", "", "", "", "", "", "", "", "", "", "./items/Zub Orka.png"),
    }),

    createEquipmentItem(10,'Náhrdelník z nebes. slz', './items/16200.png', 'Jedovatý voj. pavouk', {
        RADEK_0: createStats("Od úrovně:", 54, 54, 54, 54, 54, 54, 54, 54, 54, 54),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_1: createStats("Rychlost útoku:", "+1%", "+2%", "+3%", "+4%", "+5%", "+6%", "+7%", "+8%", "+9%", "+10%"),
        RADEK_2: createStats("Šance na kritický zásah:", "+1%", "+2%", "+3%", "+4%", "+5%", "+6%", "+7%", "+8%", "+9%", "+10%"),
        MEZERA_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_3: createStats("Šance: ", "-", "100%", "100%", "100%", "80%", "70%", "60%", "50%", "45%", "35%"),
        RADEK_4: createStats("cena: ", "-", "120k", "250k", "500k", "1kk", "2kk", "3kk", "4,5kk", "9kk", "15kk"),
        MEZERA_Y: createStats(),
        RADEK_5: createStats("Potřebné předměty:", "-", "10x", "12x", "14x", "16x", "18x", "20x", "1x", "2x", "1x"),
        RADEK_6: createStats("", "", "", "", "", "", "", "", "6x", "6x", "1x"),
        RADEK_7: createStats("", "", "", "", "", "", "", "", "6x", "6x", ""),
        RADEK_8: createStats("", "", "", "", "", "", "", "", "6x", "6x", ""),
      }, {
        IMG_0: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_1: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_2: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_3: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_4: createImage("", "", "", "", "", "", "", "", "", "", ""),
        MEZERA_Y: createStats(),
        IMG_5: createImage("", "", "./items/Runa I.png", "./items/Runa I.png", "./items/Runa I.png", "./items/Runa I.png", "./items/Runa I.png", "./items/Runa I.png", "./items/Bílá perla.png", "./items/Bílá perla.png", "./items/Pavoučí noha.png"),
        IMG_6: createImage("", "", "", "", "", "", "", "", "./items/Prastaré texty.png", "./items/Prastaré texty.png", "./items/Plán zbroje.png"),
        IMG_7: createImage("", "", "", "", "", "", "", "", "./items/Krvavá maska.png", "./items/Krvavá maska.png", ""),
        IMG_8: createImage("", "", "", "", "", "", "", "", "./items/Ostří meče.png", "./items/Ostří meče.png", ""),
    }),

    createEquipmentItem(10,'Náhrdelník krystalu duše', './items/16220.png', 'Azrael', {
        RADEK_0: createStats("Od úrovně:", 75, 75, 75, 75, 75, 75, 75, 75, 75, 75),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_1: createStats("Rychlost útoku:", "+1%", "+2%", "+3%", "+4%", "+5%", "+6%", "+8%", "+10%", "+12%", "+15%"),
        RADEK_2: createStats("Silný proti kamenům:", "1%", "1%", "2%", "2%", "3%", "3%", "4%", "5%", "7%", "10%"),
        RADEK_3: createStats("Šance na kritický zásah:", "+1%", "+2%", "+3%", "+4%", "+5%", "+6%", "+7%", "+8%", "+9%", "+10%"),
        MEZERA_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_4: createStats("Šance: ", "-", "100%", "90%", "80%", "70%", "60%", "40%", "30%", "25%", "20%"),
        RADEK_5: createStats("cena: ", "-", "10kk", "15kk", "20kk", "25kk", "30kk", "35kk", "40kk", "45kk", "50kk"),
        MEZERA_Y: createStats(),
        RADEK_6: createStats("Potřebné předměty:", "-", "10x", "12x", "14x", "16x", "18x", "20x", "30x", "30x", "1x"),
        RADEK_7: createStats("", "", "", "", "", "", "", "", "1x", "1x", "1x"),
        RADEK_8: createStats("", "", "", "", "", "", "", "", "1x", "2x", "4x"),
        RADEK_9: createStats("", "", "", "", "", "", "", "", "5x", "1x", "2x"),
      }, {
        IMG_0: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_1: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_2: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_3: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_4: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_5: createImage("", "", "", "", "", "", "", "", "", "", ""),
        MEZERA_Y: createStats(),
        IMG_6: createImage("", "", "./items/Runa II.png", "./items/Runa II.png", "./items/Runa II.png", "./items/Runa II.png", "./items/Runa II.png", "./items/Runa II.png", "./items/Runa II.png", "./items/Runa II.png", "./items/Srdce Atlantídy.png"),
        IMG_7: createImage("", "", "", "", "", "", "", "", "./items/Dračí šupiny.png", "./items/Dračí šupiny.png", "./items/Dračí šupiny.png"),
        IMG_8: createImage("", "", "", "", "", "", "", "", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png"),
        IMG_9: createImage("", "", "", "", "", "", "", "", "./items/Bílá perla.png", "./items/Žlutá perla.png", "./items/Žlutá perla.png"),
      }),

      createEquipmentItem(10,'Náhrdelník Kouř. nefritu', './items/16610.png', 'Překov z Náhrdelníku krystalu duše', {
        RADEK_0: createStats("Od úrovně:", 90, 90, 90, 90, 90, 90, 90, 90, 90, 90),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_1: createStats("Rychlost kouzla:", "+10%", "+10%", "+10%", "+11%", "+11%", "+12%", "+12%", "+13%", "+14%", "+15%"),
        RADEK_2: createStats("Silný proti bossům:", "11%", "11%", "11%", "12%", "12%", "12%", "12%", "13%", "16%", "20%"),
        RADEK_3: createStats("Poškození je Abs. ZB:", "+1%", "+1%", "+1%", "+1%", "+2%", "+2%", "+2%", "+3%", "+4%", "+5%"),
        RADEK_4: createStats("Hodnota útoku:", "+1", "+3", "+5", "+10", "+15", "+20", "+25", "+30", "+45", "+80"),
        MEZERA_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_6: createStats("Šance: ", "100%", "100%", "80%", "65%", "50%", "40%", "30%", "25%", "20%", "15%"),
        RADEK_7: createStats("cena: ", "500kk", "2kk", "8kk", "10kk", "20kk", "30kk", "40kk", "50kk", "60kk", "70kk"),
        MEZERA_Y: createStats(),
        RADEK_8: createStats("Potřebné předměty:", "15x", "5x", "5x", "10x", "10x", "15x", "15x", "20x", "20x", "20x"),
        RADEK_9: createStats("", "15x", "", "", "", "", "", "", "2x", "4x", "7x"),
        RADEK_10: createStats("", "40x", "", "", "", "", "", "", "1x", "1x", "2x"),
        RADEK_11: createStats("", "5x", "", "", "", "", "", "", "4x", "5x", "7x"),
      }, {
        IMG_0: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_1: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_2: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_3: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_4: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_5: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_6: createImage("", "", "", "", "", "", "", "", "", "", ""),
        MEZERA_Y: createStats(),
        IMG_7: createImage("", "./items/Ohnivý kámen.png", "./items/Runa III.png", "./items/Runa III.png", "./items/Runa III.png", "./items/Runa III.png", "./items/Runa III.png", "./items/Runa III.png", "./items/Runa III.png", "./items/Runa III.png", "./items/Runa III.png"),
        IMG_8: createImage("", "./items/Ledový kámen.png", "", "", "", "", "", "", "./items/Ledový kámen.png", "./items/Ledový kámen.png", "./items/Ledový kámen.png"),
        IMG_9: createImage("", "./items/Plán zbroje.png", "", "", "", "", "", "", "./items/Dračí šupiny.png", "./items/Dračí šupiny.png", "./items/Dračí šupiny.png"),
        IMG_10: createImage("", "./items/Dračí šupiny.png", "", "", "", "", "", "", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png"),
      }),

      createEquipmentItem(10,'Rubínový náhrdelník', './items/16500.png', 'Craft', {
        RADEK_0: createStats("Od úrovně:", 90, 90, 90, 90, 90, 90, 90, 90, 90, 90),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_1: createStats("Rychlost kouzla:", "+1%", "+2%", "+3%", "+4%", "+5%", "+7%", "+8%", "+11%", "+15%", "+20%"),
        RADEK_2: createStats("Silný proti ninjům:", "+1%", "+1%", "+2%", "+3%", "+4%", "+5%", "+6%", "+9%", "+13%", "+18%"),
        RADEK_3: createStats("Silný proti šamanům:", "+1%", "+1%", "+2%", "+3%", "+4%", "+5%", "+6%", "+9%", "+13%", "+18%"),
        RADEK_4: createStats("Poškození schopností:", "1%", "1%", "1%", "1%", "2%", "2%", "2%", "3%", "4%", "6%"),
        MEZERA_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_6: createStats("Šance: ", "100%", "100%", "80%", "65%", "50%", "40%", "30%", "25%", "20%", "15%"),
        RADEK_7: createStats("cena: ", "500kk", "2kk", "8kk", "10kk", "20kk", "30kk", "40kk", "50kk", "60kk", "70kk"),
        MEZERA_Y: createStats(),
        RADEK_8: createStats("Potřebné předměty:", "-", "5x", "5x", "10x", "10x", "15x", "15x", "20x", "20x", "20x"),
        RADEK_9: createStats("", "", "", "", "", "1x", "2x", "4x", "1x", "2x", "2x"),
        RADEK_10: createStats("", "", "", "", "", "", "", "", "1x", "2x", "2x"),
        RADEK_11: createStats("", "", "", "", "", "", "", "", "1x", "1x", "1x"),
      }, {
        IMG_0: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_1: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_2: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_3: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_4: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_5: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_6: createImage("", "", "", "", "", "", "", "", "", "", ""),
        MEZERA_Y: createStats(),
        IMG_7: createImage("", "", "./items/Runa III.png", "./items/Runa III.png", "./items/Runa III.png", "./items/Runa III.png", "./items/Runa III.png", "./items/Runa III.png", "./items/Runa III.png", "./items/Runa III.png", "./items/Runa III.png"),
        IMG_8: createImage("", "", "", "", "", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Ohnivý kámen.png", "./items/Ohnivý kámen.png", "./items/Ohnivý kámen.png"),
        IMG_9: createImage("", "", "", "", "", "", "", "", "./items/Ledový kámen.png", "./items/Ledový kámen.png", "./items/Ledový kámen.png"),
        IMG_10: createImage("", "", "", "", "", "", "", "", "./items/Dračí šupiny.png", "./items/Žlutá perla.png", "./items/Žlutá perla.png"),
      }),

      createEquipmentItem(10,'Náhrdelník Temn. nefritu', './items/16600.png', 'Překov z Náhrdelníku Kouř. nefritu', {
        RADEK_0: createStats("Od úrovně:", 105, 105, 105, 105, 105, 105, 105, 105, 105, 105),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_1: createStats("Rychlost kouzla:", "+15%", "+15%", "+15%", "+15%", "+16%", "+16%", "+16%", "+17%", "+18%", "+20%"),
        RADEK_2: createStats("Silný proti bossům:", "+25%", "+26%", "+27%", "+28%", "+29%", "+30%", "+31%", "+33%", "+36%", "+40%"),
        RADEK_3: createStats("Poškození je Abs. ZB:", "+5%", "+5%", "+5%", "+6%", "+6%", "+6%", "+7%", "+8%", "+9%", "+10%"),
        RADEK_4: createStats("Hodnota útoku:", "+85", "+90", "+95", "+100", "+105", "+110", "+115", "+120", "+135", "+160"),
        MEZERA_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_6: createStats("Šance: ", "100%", "1%", "1%", "1%", "1%", "30%", "25%", "20%", "15%", "10%"),
        RADEK_7: createStats("cena: ", "2kkk", "1,5kkk", "1,5kkk", "1,5kkk", "1,5kkk", "150kk", "150kk", "150kk", "150kk", "150kk"),
        MEZERA_Y: createStats(),
        RADEK_8: createStats("Potřebné předměty:", "+9", "100x", "100x", "100x", "100x", "20x", "20x", "20x", "20x", "20x"),
        RADEK_9: createStats("", "10x", "200x", "200x", "200x", "200x", "50x", "75x", "4x", "6x", "7x"),
        RADEK_10: createStats("", "10x", "100x", "100x", "100x", "100x", "50x", "75x", "4x", "6x", "8x"),
        RADEK_11: createStats("", "10x", "25x", "25x", "25x", "25x", "50x", "75x", "4x", "7x", "10x"),
      }, {
        IMG_0: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_1: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_2: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_3: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_4: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_5: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_6: createImage("", "", "", "", "", "", "", "", "", "", ""),
        MEZERA_Y: createStats(),
        IMG_7: createImage("", "./items/16610.png", "./items/Runa IV.png", "./items/Runa IV.png", "./items/Runa IV.png", "./items/Runa IV.png", "./items/Runa IV.png", "./items/Runa IV.png", "./items/Runa IV.png", "./items/Runa IV.png", "./items/Runa IV.png"),
        IMG_8: createImage("", "./items/Oxid titaničitý.png", "./items/Runa III.png", "./items/Runa III.png", "./items/Runa III.png", "./items/Runa III.png", "./items/Niť zloby.png", "./items/Niť zloby.png", "./items/Kámen kováře.png", "./items/Kámen kováře.png", "./items/Kámen kováře.png"),
        IMG_9: createImage("", "./items/Šupiny Hydry.png", "./items/Božské ovoce.png", "./items/Božské ovoce.png", "./items/Božské ovoce.png", "./items/Božské ovoce.png", "./items/Niť soumraku.png", "./items/Niť soumraku.png", "./items/Ztracený list.png", "./items/Ztracený list.png", "./items/Ztracený list.png"),
        IMG_10: createImage("", "./items/Ztracený list.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Niť žáru.png", "./items/Niť žáru.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png"),
      }),

            createEquipmentItem(10,'Safírový náhrdelník', './items/16560.png', 'Překov z Rubínového náhrdelník', {
        RADEK_0: createStats("Od úrovně:", 105, 105, 105, 105, 105, 105, 105, 105, 105, 105),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_1: createStats("Rychlost útoku:", "+21%", "+21%", "+21%", "+22%", "+22%", "+22%", "+23%", "+24%", "+26%", "+30%"),
        RADEK_2: createStats("Silný proti surům:", "+19%", "+19%", "+20%", "+21%", "+22%", "+23%", "+24%", "+27%", "+31%", "+36%"),
        RADEK_3: createStats("Silný proti válečníkům:", "+19%", "+19%", "+20%", "+21%", "+22%", "+23%", "+24%", "+27%", "+31%", "+36%"),
        RADEK_4: createStats("Silný proti lidem:", "6%", "6%", "6%", "6%", "7%", "7%", "7%", "8%", "10%", "12%"),
        MEZERA_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_6: createStats("Šance: ", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"),
        RADEK_7: createStats("Cena: ", "2kkk", "500kk", "500kk", "500kk", "500kk", "500kk", "500kk", "500kk", "500kk", "500kk"),
        MEZERA_Y: createStats(),
        RADEK_8: createStats("Potřebné předměty:", "100x", "100x", "100x", "100x", "150x", "150x", "150x", "150x", "150x", "150x"),
        RADEK_9: createStats("", "10x", "2000x", "2000x", "2000x", "2000x", "10x", "11x", "12x", "13x", "15x"),
        RADEK_10: createStats("", "10x", "50x", "50x", "50x", "50x", "20x", "20x", "10x", "10x", "10x"),
        RADEK_11: createStats("", "10x", "1x", "1x", "1x", "1x", "1x", "1x", "1x", "1x", "1x"),
      }, {
        IMG_0: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_1: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_2: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_3: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_12: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_5: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_6: createImage("", "", "", "", "", "", "", "", "", "", ""),
        MEZERA_Y: createStats(),
        IMG_7: createImage("","./items/Kámen kováře.png","./items/Runa III.png","./items/Runa III.png","./items/Runa III.png","./items/Runa III.png","./items/Runa IV.png","./items/Runa IV.png","./items/Runa IV.png","./items/Runa IV.png","./items/Runa IV.png",),
        IMG_8: createImage("", "./items/Safír.png", "./items/Safírová ruda.png", "./items/Safírová ruda.png", "./items/Safírová ruda.png", "./items/Safírová ruda.png", "./items/Safír.png", "./items/Safír.png", "./items/Safír.png", "./items/Safír.png", "./items/Safír.png"),
        IMG_9: createImage("", "./items/Ledový kámen.png", "./items/Božské ovoce.png", "./items/Božské ovoce.png", "./items/Božské ovoce.png", "./items/Božské ovoce.png", "./items/Ohnivý kámen.png", "./items/Ledový kámen.png", "./items/Ztracený list.png", "./items/Šupiny Hydry.png", "./items/Oxid titaničitý.png"),
        IMG_10: createImage("", "./items/Ohnivý kámen.png", "./items/Studentova poznámka.png", "./items/Studentova poznámka.png", "./items/Studentova poznámka.png", "./items/Studentova poznámka.png", "./items/Studentova poznámka.png", "./items/Studentova poznámka.png", "./items/Studentova poznámka.png", "./items/Studentova poznámka.png", "./items/Studentova poznámka.png"),
      }),

      createEquipmentItem(10,'Náhrdelník Slun. nefritu', './items/16590.png', 'Překov z Náhrdelníku Temn. nefritu', {
        RADEK_0: createStats("Od úrovně:", 115, 115, 115, 115, 115, 115, 115, 116, 118, 120),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_1: createStats("Rychlost kouzla:", "+20%", "+20%", "+20%", "+20%", "+21%", "+21%", "+21%", "+22%", "+23%", "+25%"),
        RADEK_2: createStats("Silný proti bossům:", "41%", "42%", "43%", "44%", "45%", "46%", "48%", "51%", "55%", "60%"),
        RADEK_3: createStats("Poškození je abs. ZB:", "+10%", "+10%", "+10%", "+11%", "+11%", "+11%", "+12%", "+13%", "+14%", "+15%"),
        RADEK_4: createStats("PvM hodnota útoku:", "+165", "+170", "+175", "+180", "+185", "+190", "+195", "+205", "+220", "+240"),
        MEZERA_X: createStats(),
        RADEK_6: createStats("Šance: ", "33%", "1%", "1%", "1%", "1%", "25%", "20%", "15%", "10%", "5%"),
        RADEK_7: createStats("cena: ", "2kkk", "2kkk", "2kkk", "2kkk", "2kkk", "500kk", "500kk", "500kk", "500kk", "500kk"),
        MEZERA_Y: createStats(),
        RADEK_8: createStats("Potřebné předměty:", "25x", "400x", "400x", "400x", "400x", "70x", "60x", "60x", "60x", "60x"),
        RADEK_9: createStats("", "10x", "40x", "40x", "40x", "40x", "10x", "15x", "4x", "7x", "10x"),
        RADEK_10: createStats("", "3x", "300x", "300x", "300x", "300x", "40x", "40x", "50x", "70x", "90x"),
        RADEK_11: createStats("", "4x", "4x", "4x", "4x", "4x", "1x", "1x", "2x", "4x", "6x"),
      }, {
        IMG_0: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_1: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_2: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_3: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_4: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_5: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_6: createImage("", "", "", "", "", "", "", "", "", "", ""),
        MEZERA_Y: createStats(),
        IMG_8: createImage("","./items/Kámen kováře.png","./items/Runa IV.png","./items/Runa IV.png","./items/Runa IV.png","./items/Runa IV.png","./items/Runa V.png","./items/Runa V.png","./items/Runa V.png","./items/Runa V.png","./items/Runa V.png",),
        IMG_9: createImage("", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Kámen kováře.png", "./items/Kámen kováře.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png"),
        IMG_10: createImage("", "./items/Skeletoní lebka.png", "./items/Božské ovoce.png", "./items/Božské ovoce.png", "./items/Božské ovoce.png", "./items/Božské ovoce.png", "./items/Božské ovoce.png", "./items/Božské ovoce.png", "./items/Božské ovoce.png", "./items/Božské ovoce.png", "./items/Božské ovoce.png"),
        IMG_11: createImage("", "./items/Fénixův prapor.png", "./items/Fénixův prapor.png", "./items/Fénixův prapor.png", "./items/Fénixův prapor.png", "./items/Fénixův prapor.png", "./items/Fénixův prapor.png", "./items/Světlo z jiného světa.png", "./items/Světlo z jiného světa.png", "./items/Světlo z jiného světa.png", "./items/Světlo z jiného světa.png"),
    }),


  ];