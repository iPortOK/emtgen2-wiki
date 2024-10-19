import React, { useEffect, useState } from 'react';
import 'animate.css';
import './prezentace.css';

const Prezentace = () => {
  const [activeSection, setActiveSection] = useState('section1');
  const [isClickingPager, setIsClickingPager] = useState(false);
  const offset = 250;

  useEffect(() => {
    const handleScroll = () => {
      if (!isClickingPager) {
        const currentScrollPos = window.scrollY;
        highlightPager(currentScrollPos);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClickingPager]);

  const highlightPager = (pos) => {
    const pagers = document.querySelectorAll('.pager');
    pagers.forEach(pager => {
      const targetSection = pager.getAttribute('data-target');
      const targetElement = document.getElementById(targetSection);
      if (targetElement) {
        const elementTop = targetElement.offsetTop;
        const elementBottom = elementTop + targetElement.clientHeight;

        if (pos >= elementTop - offset && pos < elementBottom) {
          setActiveSection(targetSection);
        }
      }
    });
  };

  const handlePagerClick = (targetSection) => {
    setIsClickingPager(true);
    const targetElement = document.getElementById(targetSection);
    if (targetElement) {
      window.scrollTo(0, targetElement.offsetTop);
      setTimeout(() => {
        setIsClickingPager(false);
      }, 500);
      setActiveSection(targetSection);
    }
  };

  const toggleText = (containerId) => {
    const btn2 = document.querySelector(`#${containerId} .btn2`);
    btn2.innerText = (btn2.innerText === 'Zobrazit příběh') ? 'Skrýt příběh' : 'Zobrazit příběh';
  };

  const toggleImage = (containerId) => {
    const collapsingImage = document.getElementById(`collapsingImage${containerId}`);
    collapsingImage.style.display = (collapsingImage.style.display === 'none' || collapsingImage.style.display === '') ? 'block' : 'none';
    toggleText(containerId);
    console.log('Image display style:', collapsingImage.style.display);
  };

  return (
    <div className='celaprezentace'>
      <div id="section1" className="image-container">
        <div className="image-wrapper">
          <img src="/prezentace/1.png" alt="1" />
          <div className="button-container2">
            <a href="https://discord.gg/zaZ3vUGatQ" target="_blank" rel="noreferrer">
              <button className="btn"><i className="bi bi-discord"></i> Discord</button>
            </a>
            <a href="https://www.facebook.com/emtgen2" target="_blank" rel="noreferrer">
              <button className="btn"><i className="bi bi-facebook"></i> Facebook</button>
            </a>
          </div>
        </div>
      </div>

      <div id="section2">
        <img src="/prezentace/20.png" alt="20" />
      </div>

      <div id="section3" className="image-container">
        <div className="image-wrapper">
          <img src="/prezentace/70.png" alt="70" />
          <button className="btn2" onClick={() => toggleImage('')}>Zobrazit příběh</button>
          <img src="/prezentace/71.png" alt="71" style={{ display: 'none' }} id="collapsingImage" />
        </div>
      </div>

      <div id="section4">
        <img src="/prezentace/80.png" alt="80" />
      </div>

      <div id="section5" className="image-container">
        <div className="image-wrapper">
          <img src="/prezentace/6.png" alt="6" />
          <img src="/prezentace/107.gif" alt="107" />
        </div>
      </div>

      <div id="section6">
        <img src="/prezentace/11.png" alt="11" />
      </div>

      <div id="section7">
        <img src="/prezentace/14.png" alt="14" />
      </div>

      <div id="section8">
        <img src="/prezentace/7.png" alt="7" />
      </div>

      <div id="section9">
        <img src="/prezentace/10.png" alt="10" />
      </div>

      <div id="section10">
        <img src="/prezentace/3.png" alt="3" />
      </div>

      <div id="section11">
        <img src="/prezentace/17.png" alt="17" />
      </div>

      <div id="section12">
        <img src="/prezentace/16.png" alt="16" />
      </div>

      <div id="section13">
        <img src="/prezentace/24.png" alt="24" />
      </div>

      <div id="section14">
        <img src="/prezentace/8.png" alt="8" />
      </div>

      <div id="section15">
        <img src="/prezentace/12.png" alt="12" />
      </div>

      <div id="section16">
        <img src="/prezentace/19.png" alt="19" />
      </div>

      <div id="section17">
        <img src="/prezentace/9.png" alt="9" />
      </div>

      <div id="section18">
        <img src="/prezentace/21.png" alt="21" />
      </div>

      <div id="section27" className="image-container">
        <div className="image-wrapper">
          <img src="./prezentace/62.png" alt="62" />
          <img src="./prezentace/150.gif" alt="150" />
        </div>
      </div>

      <div id="section19">
        <img src="/prezentace/30.png" alt="30" />
      </div>

      <div id="section20">
        <img src="/prezentace/13.png" alt="13" />
      </div>

      <div id="section25">
        <img src="/prezentace/60.png" alt="60" />
      </div>

      <div id="section26">
        <img src="/prezentace/61.png" alt="61" />
      </div>

      <div id="section21">
        <img src="/prezentace/18.png" alt="18" />
      </div>

      <div id="section22">
        <img src="/prezentace/85.png" alt="85" />
      </div>

      <div id="section23" className="image-container">
        <div className="image-wrapper">
          <img src="/prezentace/25.png" alt="25" />
          <img src="/prezentace/126.gif" alt="126" />
          <img src="/prezentace/127.gif" alt="127" />
          <img src="/prezentace/128.gif" alt="128" />
          <img src="/prezentace/chat.gif" alt="129" />
          <img src="/prezentace/130.gif" alt="130" />
          <img src="/prezentace/131.gif" alt="131" />
          <img src="/prezentace/132.gif" alt="132" />
        </div>
      </div>

      <div id="section24" className="image-container">
        <div className="image-wrapper">
          <img src="/prezentace/99.png" alt="99" />
          <iframe
            src="https://discord.com/widget?id=842702931887521792&theme=dark"
            width="350"
            height="500"
            allowTransparency="true"
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </div>
      </div>

      <div className="button-container">
        <button className="btn">Registrace</button>
        <a href="https://discord.gg/zaZ3vUGatQ" target="_blank" rel="noreferrer">
          <button className="btn"><i className="bi bi-discord"></i></button>
        </a>
        <a href="https://www.facebook.com/emtgen2" target="_blank" rel="noreferrer">
          <button className="btn"><i className="bi bi-facebook"></i></button>
        </a>
      </div>

      <div className="pagination">
        {[
          { id: 'section1', label: 'ÚVOD' },
          { id: 'section2', label: 'POSTAVY' },
          { id: 'section3', label: 'ZÁNIK ŘÍŠÍ' },
          { id: 'section4', label: 'GALAXIE' },
          { id: 'section5', label: 'UKÁZKA' },
          { id: 'section6', label: 'LODĚ' },
          { id: 'section7', label: 'FUNKCE' },
          { id: 'section8', label: 'CÍSAŘ' },
          { id: 'section9', label: 'DLOUHÝ PŘÍBĚH' },
          { id: 'section10', label: 'MIMOZEMSKÉ RASY' },
          { id: 'section11', label: 'OSIDLOVÁNÍ' },
          { id: 'section12', label: 'TECHNOLOGIE' },
          { id: 'section13', label: 'KOSMICKÉ STANICE' },
          { id: 'section14', label: 'VELITELÉ' },
          { id: 'section15', label: 'NEPŘÁTELÉ' },
          { id: 'section16', label: 'O HŘE' },
          { id: 'section17', label: 'MAPA GALAXIE' },
          { id: 'section18', label: 'KONTAKT' },
          { id: 'section27', label: 'SPONZOŘI' },
          { id: 'section19', label: 'MAPA' },
          { id: 'section20', label: 'DEMO' },
          { id: 'section25', label: 'NÁVOD' },
          { id: 'section26', label: 'OBRÁZKY' },
          { id: 'section21', label: 'ZBRANĚ' },
          { id: 'section22', label: 'VOJÁCI' },
          { id: 'section23', label: 'GIF' },
          { id: 'section24', label: 'KONTAKT' },
        ].map(pager => (
          <div
            key={pager.id}
            className={`pager${activeSection === pager.id ? ' active' : ''}`}
            data-target={pager.id}
            onClick={() => handlePagerClick(pager.id)}
          >
            {pager.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prezentace;
