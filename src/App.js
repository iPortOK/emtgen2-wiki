import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import Uvod from './components/uvod';
import Nabidka from './components/nabidka';
import WarZbran from './components/kov/war_zbran';
import SuraZbran from './components/kov/sura_zbran';
import NinjaZbran from './components/kov/ninja_zbran';
import SamanZbran from './components/kov/saman_zbran';
import WarBrneni from './components/kov/war_brnko';
import SuraBrneni from './components/kov/sura_brnko';
import SamanBrneni from './components/kov/saman_brnko';
import NinjaBrneni from './components/kov/ninja_brnko';
import Helmy from './components/kov/helmy';
import Boty from './components/kov/boty';
import Stity from './components/kov/stity';
import Nausnice from './components/kov/nausnice';
import Naramek from './components/kov/naramek';
import Nahrdelnik from './components/kov/nahrdelnik';
import Opasek from './components/kov/opasek';
import Rukavice from './components/kov/rukavice';
import Talisman from './components/kov/talisman';
import Prsten from './components/kov/prsten';
import Serpa from './components/kov/serpa';
import Alchymie from './components/kov/alchymie';
import Aura from './components/kov/aura';
import WarSchopnost from './components/kov/war_schopnost';
import NinjaSchopnost from './components/kov/ninja_schopnost';
import SamanSchopnost from './components/kov/saman_schopnost';
import SuraSchopnost from './components/kov/sura_schopnost';
import Dungeony from './components/mapy/dungeony';
import ZakladniMapy from './components/mapy/zakladni_mapy';
import Biolog from './components/ostatni/biolog';
import Krystaly from './components/ostatni/krystaly';
import Ukoly from './components/ostatni/ukoly';
import Prezentace from './components/ostatni/prezentace';
import Kamenologie from './components/loveckeukoly/kamenologie';
import Bossologie from './components/loveckeukoly/bossologie';
import Mobologie from './components/loveckeukoly/mobologie';
import FAQ from './components/ostatni/faq';
import Kameny from './components/ostatni/kameny';

function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const Layout = ({ children }) => {
    return (
      <>
        <ScrollToTopOnNavigate />
        <Uvod />
        <Routes>
          {children}
        </Routes>
      </>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <Layout>
              <Route index element={<Nabidka />} />
              <Route path="/helmy" element={<Helmy />} />
              <Route path="/boty" element={<Boty />} />
              <Route path="/stity" element={<Stity />} />
              <Route path="/nausnice" element={<Nausnice />} />
              <Route path="/naramek" element={<Naramek />} />
              <Route path="/nahrdelnik" element={<Nahrdelnik />} />
              <Route path="/opasek" element={<Opasek />} />
              <Route path="/rukavice" element={<Rukavice />} />
              <Route path="/talisman" element={<Talisman />} />
              <Route path="/prsten" element={<Prsten />} />
              <Route path="/serpa" element={<Serpa />} />
              <Route path="/aura" element={<Aura />} />
              <Route path="/alchymie" element={<Alchymie />} />
              <Route path="/war_brnko" element={<WarBrneni />} />
              <Route path="/war_zbran" element={<WarZbran />} />
              <Route path="/war_schopnost" element={<WarSchopnost />} />
              <Route path="/sura_brnko" element={<SuraBrneni />} />
              <Route path="/sura_zbran" element={<SuraZbran />} />
              <Route path="/sura_schopnost" element={<SuraSchopnost/>} />
              <Route path="/saman_brnko" element={<SamanBrneni />} />
              <Route path="/saman_zbran" element={<SamanZbran />} />
              <Route path="/saman_schopnost" element={<SamanSchopnost />} />
              <Route path="/ninja_brnko" element={<NinjaBrneni />} />
              <Route path="/ninja_zbran" element={<NinjaZbran />} />
              <Route path="/ninja_schopnost" element={<NinjaSchopnost />} />
              <Route path="/dungeony" element={<Dungeony />} />
              <Route path="/zakladni_mapy" element={<ZakladniMapy />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/biolog" element={<Biolog />} />
              <Route path="/krystaly" element={<Krystaly />} />
              <Route path="/denni_ukoly" element={<Ukoly />} />
              <Route path="/prezentace" element={<Prezentace />} />
              <Route path="/kamenologie" element={<Kamenologie />} />
              <Route path="/bossologie" element={<Bossologie />} />
              <Route path="/mobologie" element={<Mobologie />} />       
              <Route path="/faq" element={<FAQ />} />
              <Route path="/kameny" element={<Kameny />} />         
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
