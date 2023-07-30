const Image = (props) => {
  const { image, character } = props;

  return <img src={image} alt={character} className="characterImage" />;
};

export default Image;
