import { useSnapshot } from "valtio";
import state from "@/store/index";
import { getContrastingColor } from "@/config/helpers";

const CustomButton = ({ type, title, handleClick, customStyle }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return { borderWidth: "1px", borderColor: snap.color, color: snap.color };
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

export default CustomButton;
