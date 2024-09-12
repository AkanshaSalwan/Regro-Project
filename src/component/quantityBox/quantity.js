import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const QuantityBox = () => {
  const [inputValue, setinputValue] = useState(1);

  const plus = () => {
    setinputValue(inputValue + 1);
  };
  const minus = () => {
    if (inputValue !== 1) {
      setinputValue(inputValue - 1);
    }
  };

  return (
    <>
      <div className="addCartSection pt-4 pb-4 d-flex align-items-center">
        <div className="counterSec mr-3">
          <input type="number" value={inputValue} />
          <span className="arrow plus" onClick={plus}>
            <IoIosArrowUp></IoIosArrowUp>
          </span>

          <span className=" arrow minus" onClick={minus}>
            <IoIosArrowDown></IoIosArrowDown>
          </span>
        </div>
      </div>
    </>
  );
};

export default QuantityBox;
