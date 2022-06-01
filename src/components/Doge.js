const Doge = (props) => {
  const { currentHat } = props;
  return <img alt="doge" className="doge" src={"imgs/" + currentHat}></img>;
};

export default Doge;
