import List from "../components/List";
import { useState } from "react";
import TripleBurger from "../assets/hamburguesa-triple.webp"
import FieldBurger from "../assets/hamburguesa-campo.jpg"
import ClassicBurger from "../assets/hamburguesa-simple.jpg"
import OnionBurger from "../assets/hamburguesa-cebolla.jpg"
import Hamburguesonsio from "../assets/hamburguesonsio.jpg"
import Navbar from "../components/Navbar";

const Menu = () => {
    const [list] = useState([
        {
          id: 1,
          text: 'TRIPLE BRO BURGER',
          day: '5 de marzo',
          reminder: 'true',
          img: TripleBurger,
        },
        {
          id: 2,
          text: 'FIELD BURGER',
          day: '8 de abril',
          reminder: true,
          img: FieldBurger,
        },
        {
          id: 3,
          text: 'CLASSIC BURGUER',
          day: 'tu puta madre',
          reminder: false,
          img: ClassicBurger,
        },
        {
          id: 4,
          text: 'ONION BURGUER',
          day: '5 de marzo',
          reminder: true,
          img: OnionBurger,
        },
        {
          id: 5,
          text: 'HAMBURGUESONSIO',
          day: '5 de marzo',
          reminder: true,
          img: Hamburguesonsio,
        },
      ])
    return(
        <>
            {/* <Header /> */}
            <Navbar />
            <List list={list}/>
        </>
    );
};

export default Menu;