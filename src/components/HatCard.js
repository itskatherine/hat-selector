const HatCard = (props) => {
  const { url, name } = props;
  return (
    <div className="hat">
      <button>{name}</button>
    </div>
  );
};

export default HatCard;
