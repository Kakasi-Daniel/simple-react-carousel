import React from 'react';
import Slider from './components/Slider';
import './App.css';

const PICTURES = [
  'https://source.unsplash.com/1600x900/?nature,water',
  'https://source.unsplash.com/1600x900/?street',
  'https://source.unsplash.com/1600x900/?tech',
  'https://source.unsplash.com/1600x900/?city',
  'https://source.unsplash.com/1600x900/?people',
  'https://source.unsplash.com/1600x900/?night',
];

function App() {
  return <Slider w="1140px" h="40vh" pics={PICTURES} />;
}

export default App;
