import hamburHomeStyle from './HamburHome.module.css'
import image1 from '../assets/mostrando-hamburguesa.jpg'
import image2 from '../assets/dos-personas-comiendo.jpg'
import image3 from '../assets/una-persona-comiendo.jpg'

const HamburHome = () => {
    return (
        <>
            <h1 className={hamburHomeStyle.container}>SARPADAS EN RICAS</h1>
            <section className={hamburHomeStyle.section}>
                <div className={hamburHomeStyle.box1}>
                    <h6>Rosario</h6>
                    <h3>Nombre local</h3>
                    <p>Burguers, picadas y mucha onda. Te esperamos.</p>
                </div>
                <div className={hamburHomeStyle.boxImage}>
                    <img className={hamburHomeStyle.image} src={image1} alt=''></img>
                </div>
                <div className={hamburHomeStyle.boxImage}>
                    <img className={hamburHomeStyle.image} src={image2} alt=''></img>
                </div>
                <div className={hamburHomeStyle.boxImage}>
                    <img className={hamburHomeStyle.image} src={image3} alt=''></img>
                </div>
            </section>
            <div className={hamburHomeStyle.menuBox}>
                <h3 className={hamburHomeStyle.menu}>NUESTRO MENU</h3>
                <button>VER</button>
            </div>
        </>
    );
};

export default HamburHome;