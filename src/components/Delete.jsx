import { deleteItem } from "../features/simpsons/simpsonsSlice";
import { useDispatch } from "react-redux";
import { toggleLiked } from "../features/simpsons/simpsonsSlice";

const Delete = (props) => {
  const dispatch = useDispatch();
  const { id, liked } = props;

  return (
    <div className="buttonContainer">
      <button className="button" onClick={() => dispatch(deleteItem(id))}>
        Delete
      </button>
      <button className="button" onClick={() => dispatch(toggleLiked(id))}>
        {liked ? "Unfavourite" : "Favourite"}
      </button>
    </div>
  );
};

export default Delete;
