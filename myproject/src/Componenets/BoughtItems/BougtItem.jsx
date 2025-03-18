import React from 'react';
import { MdCancel } from "react-icons/md";
import laptop1 from '../../assets/HP-15-fd0333TU-i5.png';

function BoughtItem() {
  return (
    <div className="boughtitemback">
      <div className="boughtitemcontainer">
        {/* Close Button */}
        <div className="closeboughtitem">
          <button
            className="buttoncancleboughtitem"
          >
            <MdCancel size={30} />
          </button>
        </div>

        {/* Body Content */}
        <div className="boughtitembody">
          <p className="spec">Intel Core i5-1334U Processor</p>
          <img src={laptop1} alt="Laptop" className="laptopimageinmodel" />
          <p className="value">Rs.207,000.00</p>

          {/* Quantity Input */}
          <div>
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              defaultValue="1"
            />
          </div>

          {/* Total Price */}
          <p>Total: Rs.207,000.00</p>
        </div>
      </div>
    </div>
  );
}

export default BoughtItem;
