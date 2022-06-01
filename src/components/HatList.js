import HatCard from "./HatCard";

const HatList = (props) => {
  const { hatList } = props;
  console.log(hatList);
  const list = hatList.map((hat) => {
    return <HatCard key={hat.name} name={hat.name} url={hat.url}></HatCard>;
  });
  return (
    <div className="hat-list">
      <h2>Hat List</h2>
      {list}
    </div>
  );
};

export default HatList;
