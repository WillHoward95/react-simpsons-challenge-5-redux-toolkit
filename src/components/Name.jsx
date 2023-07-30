import { toggleLiked } from "../features/simpsons/simpsonsSlice";
import { useDispatch } from "react-redux";

const Name = (props) => {
  const dispatch = useDispatch();

  const { character, id, liked } = props;

  return (
    <div className="characterName">
      <h1>{character}</h1>
      {/* <button onClick={() => dispatch(toggleLiked(id))}>
          {liked ? "Unfavourite" : "Favourite"}
        </button> */}
    </div>
  );
};

export default Name;
