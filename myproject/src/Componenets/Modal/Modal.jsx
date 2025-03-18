import React from 'react'
import './Modal.css'

import { MdCancel } from "react-icons/md";

import laptop1 from '../../assets/HP-15-fd0333TU-i5.png';
import laptop2 from '../../assets/HP-Victus-15.png';
import laptop3 from '../../assets/hp1.png';
import laptop4 from '../../assets/hp2.png';
import laptop5 from '../../assets/hp3.png';
import laptop6 from '../../assets/hp4.png';
import laptop7 from '../../assets/hp5.png';
import laptop8 from '../../assets/asus1.png';
import laptop9 from '../../assets/asus2.png';
import laptop10 from '../../assets/asus3.png';
import laptop11 from '../../assets/asus4.png';
import laptop12 from '../../assets/asus5.png';
import laptop13 from '../../assets/asus6.png';
import laptop14 from '../../assets/asus7.png';
import laptop15 from '../../assets/asus8.png';
import laptop16 from '../../assets/asus9.png';
import laptop17 from '../../assets/lenovo1.png';
import laptop18 from '../../assets/lenovo2.png';
import laptop19 from '../../assets/lenovo3.png';
import laptop20 from '../../assets/lenovo4.png';
import laptop21 from '../../assets/lenovo5.png';
import laptop22 from '../../assets/lenovo6.png';
import laptop23 from '../../assets/lenovo7.png';
import laptop24 from '../../assets/lenovo8.png';
import laptop25 from '../../assets/lenovo9.png';
import laptop26 from '../../assets/lenovo10.png';
import laptop27 from '../../assets/lenovo11.png';
import laptop28 from '../../assets/lenovo12.png';
import laptop29 from '../../assets/lenovo13.png';
import laptop30 from '../../assets/lenovo14.png';
import laptop31 from '../../assets/lenovo15.png';
import laptop32 from '../../assets/lenovo16.png';
import laptop33 from '../../assets/lenovo17.png';
import laptop34 from '../../assets/lenovo18.png';
import laptop35 from '../../assets/lenovo19.png';
import laptop36 from '../../assets/lenovo20.png';
import laptop37 from '../../assets/lenovo21.png';
import laptop38 from '../../assets/lenovo22.png';
import laptop39 from '../../assets/lenovo23.png';
import laptop40 from '../../assets/lenovo24.png';
import laptop41 from '../../assets/lenovo25.png';
import laptop42 from '../../assets/lenovo26.png';
import laptop43 from '../../assets/dell1.png'
import laptop44 from '../../assets/dell2.png'
import laptop45 from '../../assets/dell3.png'
import laptop46 from '../../assets/dell4.png'
import laptop47 from '../../assets/msi1.png'
import laptop48 from '../../assets/msi2.png'
import laptop49 from '../../assets/msi3.png'
import laptop50 from '../../assets/msi4.png'
import laptop51 from '../../assets/msi5.png'
import laptop52 from '../../assets/apple1.png'





function Modal({ closeModal, setOpenModal, Id}) { const allCards = [
    { image: laptop1, Model: "HP 15 fd0333TU – i5", isInStock: true, Price: 207, RAM: "8GB", VGA: "Intel UHD Graphics", Display: "15.6″ FHD", SSD: "512GB NVMe SSD" },
    { image: laptop2, Model: "HP Victus 15 fa1394TX Gaming – i5", isInStock: true, Price: 285, RAM: "16GB", VGA: "NVIDIA GTX 1650", Display: "15.6″ FHD", SSD: "512GB NVMe SSD" },
    { image: laptop3, Model: "HP Victus 15 fa1251TX Gaming – i7", isInStock: true, Price: 365, RAM: "16GB", VGA: "NVIDIA RTX 3050", Display: "15.6″ FHD", SSD: "1TB NVMe SSD" },
    { image: laptop4, Model: "HP Victus 15 Fa1252Tx Gaming – i7", isInStock: true, Price: 415, RAM: "16GB", VGA: "NVIDIA RTX 3060", Display: "15.6″ FHD", SSD: "1TB NVMe SSD" },
    { image: laptop11, Model: "Asus Vivobook Pro 15 Creator Q543MJ – Ultra9", isInStock: false, Price: 419, RAM: "16GB", VGA: "NVIDIA RTX 3050", Display: "15.6″ OLED", SSD: "1TB NVMe SSD" },
    { image: laptop6, Model: "Hp Victus 15 fb1045AX Gaming – Ryzen 5", isInStock: false, Price: 255, RAM: "8GB", VGA: "AMD Radeon Graphics", Display: "15.6″ FHD", SSD: "512GB NVMe SSD" },
    { image: laptop7, Model: "Hp Victus 15 fb2132Ax Gaming – Ryzen 7", isInStock: true, Price: 349, RAM: "16GB", VGA: "NVIDIA GTX 1660 Ti", Display: "15.6″ FHD", SSD: "1TB NVMe SSD" },
    { image: laptop13, Model: "Asus TUF Gaming A15 FA506NFR – Ryzen 7", isInStock: true, Price: 258, RAM: "8GB", VGA: "NVIDIA GTX 1650", Display: "15.6″ FHD", SSD: "512GB NVMe SSD" },
    { image: laptop9, Model: "Asus Vivobook S 14 M5406 – Ryzen 9", isInStock: true, Price: 534, RAM: "16GB", VGA: "AMD Radeon Vega", Display: "14″ 2.8K OLED", SSD: "1TB NVMe SSD" },
    { image: laptop10, Model: "Asus ROG Strix Gaming G614JV – i7", isInStock: false, Price: 445, RAM: "16GB", VGA: "NVIDIA RTX 3050 Ti", Display: "15.6″ FHD", SSD: "1TB NVMe SSD" },
    { image: laptop5, Model: "HP Victus 15 fa1393TX Gaming – i5", isInStock: true, Price: 267, RAM: "8GB", VGA: "NVIDIA GTX 1650", Display: "15.6″ FHD", SSD: "512GB NVMe SSD" },
    { image: laptop12, Model: "Asus Zenbook 14 Q425MA – Ultra 7", isInStock: true, Price: 299, RAM: "16GB", VGA: "Intel Iris Xe", Display: "14″ FHD", SSD: "512GB NVMe SSD" },
    { image: laptop8, Model: "Asus ROG Strix G16 G614JIR- i9", isInStock: true, Price: 695, RAM: "32GB", VGA: "NVIDIA RTX 4080", Display: "16″ QHD", SSD: "2TB NVMe SSD" },
    { image: laptop14, Model: "Asus Vivobook 15 X1504VAP – Core 5", isInStock: true, Price: 229, RAM: "8GB", VGA: "Intel UHD Graphics", Display: "15.6″ FHD", SSD: "512GB NVMe SSD" },
    { image: laptop15, Model: "Asus Vivobook 15 X1504VA – i3", isInStock: false, Price: 152, RAM: "4GB", VGA: "Intel UHD Graphics", Display: "15.6″ FHD", SSD: "256GB NVMe SSD" },
    { image: laptop16, Model: "Asus TUF Gaming F15 FX507VV- i7", isInStock: true, Price: 393, RAM: "16GB", VGA: "NVIDIA RTX 4060", Display: "15.6″ FHD", SSD: "1TB NVMe SSD" },
    { image: laptop17, Model: "Lenovo IdeaPad 1 15IGL7 – Intel Celeron", isInStock: true, Price: 99, RAM: "4GB", VGA: "Intel UHD Graphics", Display: "15.6″ HD", SSD: "128GB SSD" },
    { image: laptop18, Model: "Lenovo IdeaPad Slim 3 15AMN8 – Ryzen 5", isInStock: true, Price: 175, RAM: "8GB", VGA: "AMD Radeon Graphics", Display: "15.6″ FHD", SSD: "256GB SSD" },
    { image: laptop19, Model: "Lenovo IdeaPad Slim 3 15AMN8 – Ryzen 5", isInStock: true, Price: 189, RAM: "8GB", VGA: "AMD Radeon Graphics", Display: "15.6″ FHD", SSD: "512GB SSD" },
    { image: laptop20, Model: "Lenovo IdeaPad Slim 3 15IRH8 – i5", isInStock: true, Price: 196, RAM: "8GB", VGA: "Intel Iris Xe", Display: "15.6″ FHD", SSD: "512GB NVMe SSD" },
    { image: laptop22, Model: "Lenovo IdeaPad Slim 3 15ABR8 – Ryzen 7", isInStock: true, Price: 193, RAM: "16GB", VGA: "AMD Radeon Graphics", Display: "15.6″ FHD", SSD: "512GB SSD" },
    { image: laptop21, Model: "Lenovo IdeaPad Slim 3 15ABR8 – Ryzen 7", isInStock: true, Price: 199, RAM: "16GB", VGA: "AMD Radeon Graphics", Display: "15.6″ FHD", SSD: "512GB SSD" },
    { image: laptop22, Model: "Lenovo IdeaPad Slim 3 15IRH8 – i7", isInStock: true, Price: 229, RAM: "16GB", VGA: "Intel Iris Xe", Display: "15.6″ FHD", SSD: "1TB NVMe SSD" },
    { image: laptop23, Model: "Lenovo IdeaPad Slim 5 16IMH9 – Ultra 5", isInStock: true, Price: 285, RAM: "16GB", VGA: "Intel Iris Xe", Display: "16″ WQXGA", SSD: "1TB NVMe SSD" },
    { image: laptop24, Model: "Lenovo LOQ Gaming 15ARP9 – Ryzen 5", isInStock: true, Price: 288, ram: "16GB", vga: "RTX 3050", display: "15.6'' FHD", ssd: "512GB SSD" },
    { image: laptop25, Model: "Lenovo IdeaPad Slim 3 16IRU9 – Core 7", isInStock: true, Price: 289, ram: "16GB", vga: "Integrated Intel Iris Xe", display: "16'' FHD", ssd: "512GB SSD" },
    { image: laptop26, Model: "Lenovo IdeaPad Slim 5 16IMH9 – Ultra 7", isInStock: true, Price: 309, ram: "16GB", vga: "Integrated Intel Iris Xe", display: "16'' FHD", ssd: "512GB SSD" },
    { image: laptop27, Model: "Lenovo LOQ Gaming 15AHP9 – Ryzen 5", isInStock: true, Price: 345, ram: "16GB", vga: "RTX 3050", display: "15.6'' FHD", ssd: "512GB SSD" },
    { image: laptop28, Model: "Lenovo LOQ Gaming 15ARP9 – Ryzen 7", isInStock: true, Price: 355, ram: "16GB", vga: "RTX 3060", display: "15.6'' FHD", ssd: "1TB SSD" },
    { image: laptop29, Model: "Lenovo IdeaPad Pro 5 16IMH9 – Ultra 7", isInStock: true, Price: 355, ram: "16GB", vga: "Integrated Intel Iris Xe", display: "16'' QHD", ssd: "512GB SSD" },
    { image: laptop30, Model: "Lenovo LOQ Gaming 15ARP9 – Ryzen 7", isInStock: true, Price: 384, ram: "16GB", vga: "RTX 3060", display: "15.6'' FHD", ssd: "1TB SSD" },
    { image: laptop31, Model: "Lenovo LOQ Gaming 15AHP9 – Ryzen 7", isInStock: true, Price: 399, ram: "16GB", vga: "RTX 3060", display: "15.6'' FHD", ssd: "1TB SSD" },
    { image: laptop32, Model: "Lenovo IdeaPad Pro 5 Creator 16AHP9 – Ryzen 7 (16GB)", isInStock: true, Price: 435, ram: "16GB", vga: "RTX 3050", display: "16'' FHD", ssd: "1TB SSD" },
    { image: laptop33, Model: "Lenovo LOQ Gaming 15ARP9 – Ryzen 7", isInStock: true, Price: 384, ram: "16GB", vga: "RTX 3060", display: "15.6'' FHD", ssd: "1TB SSD" },
    { image: laptop34, Model: "Lenovo LOQ Gaming 15ARP9 – Ryzen 7", isInStock: true, Price: 384, ram: "16GB", vga: "RTX 3060", display: "15.6'' FHD", ssd: "1TB SSD" },
    { image: laptop35, Model: "Lenovo LOQ Gaming 15AHP9 – Ryzen 7 (8GB RTX 4060 Graphics)", isInStock: true, Price: 435, ram: "16GB", vga: "RTX 4060 8GB", display: "15.6'' QHD", ssd: "1TB SSD" },
    { image: laptop36, Model: "Lenovo IdeaPad Pro 5 14IMH9 – Ultra 9", isInStock: true, Price: 435, ram: "16GB", vga: "Integrated Intel Iris Xe", display: "14'' FHD", ssd: "1TB SSD" },
    { image: laptop37, Model: "Lenovo Legion Slim 5 Gaming 16AHP9 – Ryzen 7", isInStock: true, Price: 449, ram: "16GB", vga: "RTX 3060", display: "16'' FHD", ssd: "1TB SSD" },
    { image: laptop38, Model: "Lenovo IdeaPad Pro 5 Creator 16AHP9 – Ryzen 7 ", isInStock: true, Price: 499, ram: "16GB", vga: "RTX 3060", display: "16'' QHD", ssd: "1TB SSD" },
    { image: laptop39, Model: "Lenovo Legion Slim 5 Gaming 16AHP9 – Ryzen 7", isInStock: true, Price: 525, ram: "16GB", vga: "RTX 3060", display: "16'' FHD", ssd: "1TB SSD" },
    { image: laptop40, Model: "Lenovo Legion Gaming Pro 5 16ARX8 – Ryzen 9", isInStock: true, Price: 588, ram: "32GB", vga: "RTX 4070", display: "16'' QHD", ssd: "1TB SSD" },
    { image: laptop41, Model: "Lenovo Legion Gaming Pro 5 16ARX8 – Ryzen 9", isInStock: true, Price: 675, ram: "32GB", vga: "RTX 4080", display: "16'' QHD", ssd: "1TB SSD" },
    { image: laptop42, Model: "Lenovo Yoga Book 9 13IRU8 – i7", isInStock: true, Price: 725, ram: "16GB", vga: "Integrated Intel Iris Xe", display: "13'' FHD", ssd: "1TB SSD" },
    { image: laptop43, Model: "Dell Inspiron 5620 – i5", isInStock: true, Price: 252, ram: "16GB", vga: "Integrated Intel Iris Xe", display: "15.6'' FHD", ssd: "512GB SSD" },
    { image: laptop44, Model: "Dell 5525 G15 Gaming – Ryzen 5", isInStock: true, Price: 425, ram: "16GB", vga: "RTX 3050", display: "15.6'' FHD", ssd: "1TB SSD" },
    { image: laptop45, Model: "Dell Latitude 7430 – i5", isInStock: true, Price: 725, ram: "16GB", vga: "Integrated Intel Iris Xe", display: "14'' FHD", ssd: "1TB SSD" },
    { image: laptop46, Model: "Dell Inspiron 3520 – i5", isInStock: true, Price: 520, ram: "16GB", vga: "Integrated Intel Iris Xe", display: "15.6'' FHD", ssd: "512GB SSD" },
    { image: laptop47, Model: "MSI Cyborg 15 Gaming A13UCX – i5", isInStock: true, Price: 159, ram: "8GB", vga: "RTX 3050", display: "15.6'' FHD", ssd: "512GB SSD" },
    { image: laptop48, Model: "MSI Modern 15 B12M – i5", isInStock: true, Price: 279, ram: "8GB", vga: "Integrated Intel Iris Xe", display: "15.6'' FHD", ssd: "512GB SSD" },
    { image: laptop49, Model: "MSI Cyborg 15 A12VE Gaming – i5", isInStock: true, Price: 284, ram: "16GB", vga: "RTX 3050", display: "15.6'' FHD", ssd: "512GB SSD" },
    { image: laptop50, Model: "MSI Cyborg 15 A12VE Gaming – i7", isInStock: true, Price: 300, ram: "16GB", vga: "RTX 3060", display: "15.6'' FHD", ssd: "512GB SSD" },
    { image: laptop51, Model: "MSI Cyborg 15 Gaming A13UDX – i7", isInStock: true, Price: 330, ram: "16GB", vga: "RTX 3060", display: "15.6'' FHD", ssd: "512GB SSD" },
    { image: laptop52, Model: "Apple MacBook Air (MGN63PA/A)", isInStock: true, Price: 330, ram: "8GB", vga: "Apple M1 GPU", display: "13.3'' Retina", ssd: "256GB SSD" },

    ];
    const lap = allCards[Id];

    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className='titleCloseBtn'>
                    <button onClick={() => closeModal(false)} className='buttoncancle'><MdCancel size={30}/></button>
                </div>
                <div id='titletopic'>
                    <p className='titlemodel'>{lap.Model}</p>
                </div>
                <div className='body'>
                    <p className='spec'>{lap.Model}</p>
                    <img src={lap.image} alt="lapimage" className='laptopimageinmodel'></img>
                    <p className='spec'>{lap.SSD}</p>
                    <p className='spec'> {lap.RAM}</p>
                    <p className='spec'>{lap.Display}</p>
                    <p className='spec'> {lap.vga}</p>
                    <p className='spec'> Natural silver</p>
                    <p className='spec'>  Windows 11 Home</p>
                    <p className='value'>  Rs.{lap.Price},000.00</p>
                    
                </div>
                <div className='footer'>
                    <button onClick={() => closeModal(false)} id="cancelBtn">Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Modal