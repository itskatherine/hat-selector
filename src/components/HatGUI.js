import HatList from "./HatList";
import Doge from "./Doge";
import { useState } from "react";

const hats = [
  { name: "top hat", url: "hat1.png" },
  { name: "cowboy hat", url: "hat2.png" },
  { name: "flower crown", url: "hat3.png" },
  { name: "no hat", url: "doge.png" },
];

const HatGUI = () => {
  const [hatList] = useState(hats);
  const [currentHat, setCurrentHat] = useState("doge.png");
  return (
    <>
      <Doge currentHat={currentHat}></Doge>
      <HatList hatList={hatList} setCurrentHat={setCurrentHat}></HatList>
    </>
  );
};

export default HatGUI;
