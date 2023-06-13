import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Delete from "./Delete";

const Character = (props) => {
  const { item, onDelete } = props;
  const { character, quote, image, id, liked } = item;

  return (
    <div className="characterContainer">
      <Name character={character} id={id} liked={liked} />
      <Quote quote={quote} />
      <Image image={image} />
      <Delete onDelete={onDelete} id={id} />
    </div>
  );
};

export default Character;
