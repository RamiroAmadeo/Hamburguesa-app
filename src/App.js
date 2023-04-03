import { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Button from "./components/Button";

const App = () => {
  const [list] = useState([
    {
      id: 1,
      text: 'Hamburguesa STACKER',
      day: '5 de marzo',
      reminder: true,
    },
    {
      id: 2,
      text: 'Hamburguesa PAPITO RICO',
      day: '8 de abril',
      reminder: true,
    },
    {
      id: 3,
      text: 'Hamburguesa EL MEXICANO',
      day: 'tu puta madre',
      reminder: false,
    },
    {
      id: 4,
      text: 'Hamburguesa VEGGETARIANASHE',
      day: '5 de marzo',
      reminder: true,
    },
    {
      id: 5,
      text: 'Hamburguesa TAPATIO',
      day: '5 de marzo',
      reminder: true,
    },
    {
      id: 6,
      text: 'Hamburguesa SNOOP',
      day: '5 de marzo',
      reminder: true,
    },
  ])
  return (
    <div className="App">
      <Header />
      <List list={list}/>
      <Button />
    </div>
  );
}

export default App;
