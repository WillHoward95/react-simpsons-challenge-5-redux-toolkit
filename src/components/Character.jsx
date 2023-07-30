import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Delete from "./Delete";

const Character = (props) => {
  const { item, onDelete } = props;
  const { character, quote, image, id, liked, characterDirection } = item;

  console.log(props, characterDirection);

  if (characterDirection === "Right") {
    return (
      <div className="characterContainer">
        <Name character={character} id={id} liked={liked} />
        <Quote quote={quote} />
        <Image image={image} />
        <Delete onDelete={onDelete} id={id} />
      </div>
    );
  } else {
    return (
      <div className="characterContainer">
        <Image image={image} />
        <Quote quote={quote} />
        <Name character={character} id={id} liked={liked} />
        <Delete onDelete={onDelete} id={id} />
      </div>
    );
  }
};

export default Character;
