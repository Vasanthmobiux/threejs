import { useSnapshot } from "valtio";
import state from "@/store/index";

const Custombutton = ({ type, title, handleClick, customStyle }) => {
  const snap = useSnapshot(state);
  console.log(snap);

  const generateStyle = (type) => {
    if (type === "filled") {
      return { backgroundColor: snap.color, color: "#fff" };
    }
  };
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`flex-1  px-1 py-2 rounded-md ${customStyle}`}
      style={generateStyle(type)}
    >
      {title}
    </button>
  );
};

export default Custombutton;
