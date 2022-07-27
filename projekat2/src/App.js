import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Pocetna from "./components/pocetna/Pocetna";
import StranicaClanci from "./components/clanci/StranicaClanci";
import ClanciZaKategoriju from "./components/clanci/ClanciZaKategoriju";


function App() {
  const [clanci, setClanci] = useState([
    {
      id: 1,
      naslov: "Sport u bih",
      text: "lorem ipsum neki tekst",
      kategorija: "Sport",
      datum: "21.3.2021. 3:41:18",
    },
    {
      id: 2,
      naslov: "Kosarkasice odvele BiH na evropsko prvenstvo",
      text: "123lorem ipsum neki tekst",
      kategorija: "Sport",
      datum: "21.4.2021. 6:48:48",
    },
    {
      id: 3,
      naslov: "Kosarkasice odvele BiH na evropsko prvenstvo",
      text: "123lorem ipsum neki tekst",
      kategorija: "Sport",
      datum: "21.6.2021. 11:40:24",
    },
    {
      id: 4,
      naslov: "Švicarska u spektakularnoj utakmici izbacila Francusku sa Evropskog prvenstva",
      text: "Nogometna reprezentacija Švicarske plasirala se u četvrtfinale Eura nakon što je u Bukureštu poslije penala u izvanrednom susretu pobijedila Francusku 5:4. U regularnom toku meča i poslije produžetaka bilo je 3:3, a Švicarci će u borbi za polufinale u narednom meču igrati sa Španijom.",
      kategorija: "Sport",
      datum: "22.6.2021. 10:31:25",
    },
    {
      id: 5,
      naslov: "Sarajlija Vladimir Petković, majstor koji je pokorio svjetske prvake",
      text: "123lorem ipsum neki tekst",
      kategorija: "Sport",
      datum: "22.6.2021. 18:31:11",
    },
    {
      id: 6,
      naslov: "Neviđena glupost Rebića koštala Hrvate izjednačenja, Modrić i Dalić ga žestoko kritikovali",
      text: "123lorem ipsum neki tekst",
      kategorija: "Sport",
      datum: "28.6.2021. 10:32:26",
    },
    {
      id: 8,
      naslov: "naslov3",
      text: "456lorem ipsum neki tekst",
      kategorija: "Biznis",
      datum: "23.7.2021. 15:33:15",
    },
    {
      id: 9,
      naslov: "Luksuzni stanovi u Sarajevu: Moderna gradnja u srcu Starog Grada",
      text: "Radovi na izgradnji luksuznog objekta Tao House u Čadordžinoj ulici u Sarajevu u punom su jeku.",
      kategorija: "Biznis",
      datum: "23.7.2021. 8:40:16",
    },
    {
      id: 10,
      naslov: "Od sutra nema rominga na Zapadnom Balkanu",
      text: 'Od sutra, 1. jula u zemljama Zapadnog Balkana, maksimalna cijena naknada za roming u mobilnoj telefoniji primjenjivat će se skladu sa pravilom "kao u domaćem saobraćaju"',
      kategorija: "Biznis",
      datum: "24.7.2021. 8:49:46",
    },

    {
      id: 11,
      naslov: "OneLife Rally je u Sarajevu: Sportski auti u defileu od Ilidže do Centra",
      text: "Nakon starta u Istanbulu, prolaska kroz Sofiju, te boravka u Beogradu jučer, ekskluzivni karavan supersportskih i luksuznih automobila u turstičkom reliju OneLifeRally danas stiže u Sarajevo.",
      kategorija: "Auto",
      datum: "23.7.2021. 14:40:54",
    },
    {
      id: 12,
      naslov: "Porsche predstavio Cayenne Turbo GT: 640 KS za 300 km/h",
      text: "Najbrži Cayenne do sada svoj raskošan potencijal već je pokazao na stazi Nürburgring Nordschleife kojom je prošao za sedam minuta i 38.9 sekundi, što ga čini liderom u kategoriji SUV-ova.",
      kategorija: "Auto",
      datum: "24.7.2021. 15:32:16",
    },
    {
      id: 13,
      naslov: "Hyundai premijera na Igmanu: Sedam novih modela i stiže ih još",
      text: `Danas je Hyundai na prezentaciji za medije pokazao nešto čime se rijetko koji automobilski brend može pohvaliti, predstavljeno je sedam novih modela i to i10, i20, porodica i30, Kona, Elantra, Tucson i Santa Fe.
       Pored izložbenih modela i10, i30, i30 Fastback mild hybrid, Kona hybrid i Elantre, Hyundai je organizovao i testne vožnje modela Santa Fe, dvije različite verzije modela Tucson, i20 i Kona.`,
      kategorija: "Auto",
      datum: "24.7.2021. 13:22:32",
    },
    {
      id: 14,
      naslov: "Supe kao odličan uvod svakom obroku",
      text: "Razlog tome jeste što supe, zbog svoje niske kalorijske vrijednosti i svog volumena, pune gladan i prazan stomak, daju nam osjećaj sitosti i opuštaju nas. Samim tim, izbjegavamo prejedanje prilikom glavnog obroka.",
      kategorija: "Lifestyle",
      datum: "24.6.2021. 7:49:46",
    },
    {
      id: 15,
      naslov: "Svakodnevno ispijanje kafe može smanjiti rizik od bolesti jetre",
      text: "Novo istraživanje iz Velike Britanije otkrilo je da je ispijanje kafe povezano sa smanjenim rizikom od hroničnih bolesti i drugih zdravstvenih stanja jetre. Trenutno naučnici rade na ispitivanju mogućnosti uključivanja kafe u terapiju liječenja ovih bolesti.",
      kategorija: "Lifestyle",
      datum: "25.5.2020. 7:49:46",
    },
    {
      id: 16,
      naslov: "Zašto svaki dan trebate pojesti bar jednu kašiku meda",
      text: "Med se zbog svojih ljekovitih svojstava u grčkoj mitologiji opisuje kao hrana bogova, Egipćani su ga koristili u kozmetici, dok se u kamenom dobu koristio za sprječavanje raznih bolesti",
      kategorija: "Lifestyle",
      datum: "27.5.2021. 16:26:16",
    },
    {
      id: 17,
      naslov: "Saobraćajna nesreća u Zenici, motociklista povrijeđen",
      text: "Na Bulevaru u centru Zenice večeras je došlo do saobraćajne nesreće u kojoj je povrijeđena jedna osoba.",
      kategorija: "Crna hronika",
      datum: "27.5.2021. 7:23:44",
    },
    {
      id: 18,
      naslov: "Obustavljen tramvajski saobraćaj zbog udesa",
      text: "Kako su nam kazali iz Operativnog centra MUP-a KS, za sada nemaju informacije da li je neko povrijeđen. ",
      kategorija: "Crna hronika",
      datum: "27.5.2021. 9:52:46",
    },
    {
      id: 7,
      naslov: "Albanija nabavlja turske vojne dronove Bayraktar TB2",
      text: "Turske bespilotne vojne letjelice Bayraktar TB2 izazivaju sve veću pažnju u svijetu, a jedna od posljednjih zemalja koja se odlučila na nabavku ovog naoružanja jeste i Albanija.",
      kategorija: "Vijesti",
      datum: "1.6.2021. 7:49:46",
    },
    {
      id: 7,
      naslov: "Ekstremne temperature u Kanadi odnijele desetine života",
      text: "Deseci ljudi umrli su u Kanadi usljed neviđene vrućine koja je srušila temperaturne rekorde.",
      kategorija: "Vijesti",
      datum: "1.7.2021. 20:49:46",
    },

  ]);

 

  return (
    <Router>
      <div className="sadrzaj">
        <Sidebar />

        <Switch>
          {/* key se dodaje da bi mogao renderati iste clanke na razlicitim rutama. 
          Inace ce ostati isti podaci iako predjem na drugu rutu*/}
          {/*<Route key="pocetna" path="/" exact component={Pocetna} />*/}
          <Route key="pocetna" path="/" exact><Pocetna clanci={clanci} /></Route>
          <Route key="vijesti" path="/vijesti"><ClanciZaKategoriju clanci={clanci} setClanci={setClanci} kategorija="Vijesti"/></Route>
          <Route key="sport" path="/sport"><ClanciZaKategoriju clanci={clanci} setClanci={setClanci} kategorija="Sport"/></Route>
          <Route key="biznis" path="/biznis"><ClanciZaKategoriju clanci={clanci} setClanci={setClanci} kategorija="Biznis"/></Route>
          <Route key="auto" path="/auto"><ClanciZaKategoriju clanci={clanci} setClanci={setClanci} kategorija="Auto"/></Route>
          <Route key="lifestyle" path="/lifestyle"><ClanciZaKategoriju clanci={clanci} setClanci={setClanci} kategorija="Lifestyle"/></Route>
          <Route key="crnaHronika" path="/crnaHronika"><ClanciZaKategoriju clanci={clanci} setClanci={setClanci} kategorija="Crna hronika"/></Route>
          <Route key="sviClanci" path="/sviCLanci" ><StranicaClanci clanci={clanci} setClanci={setClanci}/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
