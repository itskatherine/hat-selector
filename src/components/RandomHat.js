const RandomHat = (props) => {
  const { setCurrentHat, hatList } = props;

  const handleSetRandomHat = () => {
    setCurrentHat(() => {
      const randomHatIndex = Math.floor(Math.random() * (hatList.length - 1));
      const randomHat = hatList[randomHatIndex];
      return randomHat.url;
    });
  };
  return (
    <div className="random-hat">
      <button onClick={handleSetRandomHat}>RANDOM HAT</button>
    </div>
  );
};
export default RandomHat;
