import HatCard from "./HatCard";
import RandomHat from "./RandomHat";

const HatList = (props) => {
  const { hatList, setCurrentHat } = props;
  const list = hatList.map((hat) => {
    return (
      <HatCard
        key={hat.name}
        name={hat.name}
        url={hat.url}
        setCurrentHat={setCurrentHat}
      ></HatCard>
    );
  });
  return (
    <div className="hat-list">
      {list}
      <RandomHat setCurrentHat={setCurrentHat} hatList={hatList}></RandomHat>
    </div>
  );
};

export default HatList;
