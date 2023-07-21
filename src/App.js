import logo from './logo.svg';
import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchBar from './components/ResearchBar';
import SearchResults from './components/SearchResults';
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/navbar';
import Homepage from './components/homepage';
import Dashboard from './pages/Dashboard.jsx';
import Aboutus from './pages/aboutus.jsx';
import Tierlist from './pages/tierlist.jsx';
import Booknow from './pages/booknow.jsx';
import Ourcoaches from './pages/ourcoaches.jsx';



const data =[
'Ana',
'Ashe',
'Baptiste',
'Bastion',
'Brigitte',
'Cassidy',
'D.VA',
'Doomfist',
'Echo',
'Genji',
'Hanzo',
'Kiriko',
'Junker Queen',
'Junkrat',
'Lifeweaver',
'Lúcio',
'Mei',
'Mercy',
'Moira',
'Orisa',
'Pharah',
'Ramattra',
'Reaper',
'Reinhardt',
'Roadhog',
'Sigma',
'Sojourn',
'Soldier 76',
'Sombra',
'Symmetra',
'Torbjörn',
'Tracer',
'Widowmaker',
'Winston',
'Wrecking Ball',
'Zarya',
'Zenyatta',
]

function App() {

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div style={{backgroundColor: '#218FFE'}}>
        {/* Navbar */}
        <Navbar />
  <div className="container">
  {/* Actual new nav bar */}
    <div className="row">
      <Sidebar>
      <BrowserRouter>
      <Routes>
        <Route path="/"element={<Dashboard/>}/>
        <Route path="/aboutus"element={<Aboutus />}/>
        <Route path="/tierlist"element={<Tierlist />}/>
        <Route path="/booknow"element={<Booknow/>}/>
        <Route path="/ourcoaches"element={<Ourcoaches/>}/>
      </Routes>
      </BrowserRouter>
    </Sidebar>
    <Homepage />
        <div>
          <SearchBar onChange={setSearchQuery} />
          <SearchResults data={data} searchQuery={searchQuery} />
        </div>
    </div>
    
    </div>
    </div>


  );
}

export default App;


