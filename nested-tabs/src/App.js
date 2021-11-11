import logo from './logo.svg';
import './App.css';
import React from 'react';
import tabData from './data/data';
import TabList from './components/TabList';

function App() {
    return <TabList data={tabData} />
}


export default App;
