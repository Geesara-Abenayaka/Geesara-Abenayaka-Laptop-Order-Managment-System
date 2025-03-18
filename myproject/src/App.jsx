import BodyContent from "./Componenets/BodyContent/BodyContent"

import HeaderContent from "./Componenets/HeaderContent/HeaderContent"
import Footer from "./Componenets/Footer/Footer"
import Modal from "./Componenets/Modal/Modal"
// import Cards from "./Componenets/Cards/Cards"

import { CCarousel, CCarouselItem, CImage } from "@coreui/react"
import { Link } from 'react-router-dom';
import LaptopPage from "./Componenets/laptoppage/laptoppage";
import { useState } from 'react';


import NavigationBar from "./Componenets/NavigationBar/NavigationBar"
import acerlogo from './assets/acer.png'
import asuslogo from './assets/asus.png'
import applelogo from './assets/apple.svg'
import samsunglogo from './assets/samsung.png'
import msilogo from './assets/msi.svg'
import lenovologo from './assets/lenovo.png'
import delllogo from './assets/dell.png'
import hplogo from './assets/hp.png'

import {ToastContainer, Bounce} from 'react-toastify'





function App({ addToCart }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalDataId, setModalDataId] = useState(1);
  

  return (
    <>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />

      <div id="wrapper">
        {openModal && <Modal closeModal={setOpenModal}  onModal={setOpenModal} Id={modalDataId}/>}
        <NavigationBar />
        <HeaderContent />
        <div className="iokp">
          <BodyContent>
            <br />
            <p className="brands">Top Brands</p>
            <br />
            <div class="parentcontainer">
              <img src={acerlogo} alt="acer" class="laplogos"></img>
              <img src={asuslogo} alt="asus" class="laplogos"></img>
              <img src={applelogo} alt="apple" class="laplogos2"></img>
              <img src={samsunglogo} alt="samsung" class="laplogos"></img>
              <img src={msilogo} alt="msi" class="laplogos"></img>
              <img src={lenovologo} alt="lenovo" class="laplogos"></img>
              <img src={delllogo} alt="dell" class="laplogos1"></img>
              <img src={hplogo} alt="hp" class="laplogos1"></img>
            </div>
          </BodyContent>

          <LaptopPage onModal={setOpenModal} addToCart={addToCart} setModalDataId={setModalDataId}/>
          <Footer />
          {/* <div className="qqqqq">
          <Cards image={laptop1} Model="HP 15 fd0333TU – i5" isInStock={true} Price={207} />
          <Cards image={laptop2} Model="HP Victus 15 fa1394TX Gaming – i5" isInStock={true} Price={285} />
          <Cards image={laptop3} Model="HP Victus 15 fa1251TX Gaming – i7" isInStock={true} Price={365} />
          <Cards image={laptop4} Model="HP Victus 15 Fa1252Tx Gaming – i7" isInStock={true} Price={415} />
        </div>
        <div className="qqqqqw">
          <Cards image={laptop11} Model="Asus Vivobook Pro 15 Creator Q543MJ – Ultra9" isInStock={false} Price={419} />
          <Cards image={laptop6} Model="Hp Victus 15 fb1045AX Gaming – Ryzen 5" isInStock={false} Price={255} />
          <Cards image={laptop7} Model="Hp Victus 15 fb2132Ax Gaming – Ryzen 7" isInStock={true} Price={349} />
          <Cards image={laptop13} Model="Asus TUF Gaming A15 FA506NFR – Ryzen 7" isInStock={true} Price={258} />
        </div>
        <div className="qqqqqw">
          <Cards image={laptop9} Model="Asus Vivobook S 14 M5406 – Ryzen 9" isInStock={true} Price={534} />
          <Cards image={laptop10} Model="Asus ROG Strix Gaming G614JV – i7" isInStock={false} Price={445} />
          <Cards image={laptop5} Model="HP Victus 15 fa1393TX Gaming – i5" isInStock={true} Price={267} />
          <Cards image={laptop12} Model="Asus Zenbook 14 Q425MA – Ultra 7" isInStock={true} Price={299} />
        </div>
        <div className="qqqqqw">
          <Cards image={laptop8} Model="Asus ROG Strix G16 G614JIR- i9" isInStock={true} Price={695} />
          <Cards image={laptop14} Model="Asus Vivobook 15 X1504VAP – Core 5" isInStock={true} Price={229} />
          <Cards image={laptop15} Model="Asus Vivobook 15 X1504VA – i3" isInStock={false} Price={152} />
          <Cards image={laptop16} Model="Asus TUF Gaming F15 FX507VV- i7" isInStock={true} Price={393} />
        </div>
        <br />
        <div className="asdf">

          <button className="eee">1</button>
          <button className="eee">2</button>
          <button className="eee">3</button>
        </div> */}

          {/* <MenuLink linkname="Home" url="/" /> */}




        </div>
      </div>

    </>
  )
}

export default App
