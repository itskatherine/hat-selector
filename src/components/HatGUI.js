import HatList from "./HatList";
import Doge from "./Doge";
import { useState } from "react";

const hats = [
  { name: "top hat", url: "hat1.png" },
  { name: "cowboy hat", url: "hat2.png" },
  { name: "flower crown", url: "hat3.png" },
  { name: "helicopter hat", url: "hat4.png" },
  { name: "doge hat", url: "hat5.png" },
  { name: "no hat", url: "doge.png" },
];

const HatGUI = () => {
  const [currentHat, setCurrentHat] = useState("doge.png");
  return (
    <>
      <div className="container">
        <Doge currentHat={currentHat}></Doge>
        <HatList
          className="hat-list"
          hatList={hats}
          setCurrentHat={setCurrentHat}
        ></HatList>
      </div>
    </>
  );
};

export default HatGUI;
