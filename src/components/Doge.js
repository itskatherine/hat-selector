const Doge = (props) => {
  const { currentHat } = props;
  return (
    <div className="doge-space">
      <img className="doge" src={"imgs/" + currentHat}></img>
    </div>
  );
};

export default Doge;
