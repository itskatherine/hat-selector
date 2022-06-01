import HatCard from "./HatCard";

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
      <h2>Hat List</h2>
      {list}
    </div>
  );
};

export default HatList;
