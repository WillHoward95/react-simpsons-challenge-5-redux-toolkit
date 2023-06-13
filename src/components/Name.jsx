import { toggleLiked } from "../features/simpsons/simpsonsSlice";
import { useDispatch } from "react-redux";

const Name = (props) => {
  const dispatch = useDispatch();

  const { character, id, liked } = props;

  return (
    <>
      <div>
        <h1>{character}</h1>
        <button onClick={() => dispatch(toggleLiked(id))}>
          {liked ? "Unlike" : "Like"}
        </button>
      </div>
    </>
  );
};

export default Name;
