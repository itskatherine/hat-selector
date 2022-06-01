const HatCard = (props) => {
  const { url, name, setCurrentHat } = props;
  const handleSetCurrentHat = () => {
    setCurrentHat(() => {
      return url;
    });
  };
  return (
    <div className="hat">
      <button onClick={handleSetCurrentHat}>{name}</button>
    </div>
  );
};

export default HatCard;
