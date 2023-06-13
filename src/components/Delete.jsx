import { deleteItem } from "../features/counter/counterSlice";
import { useDispatch } from "react-redux";

const Delete = (props) => {
  const dispatch = useDispatch();
  const { onDelete, id } = props;

  return (
    <div>
      <button onClick={() => dispatch(deleteItem(id))}>Delete</button>
    </div>
  );
};

export default Delete;
