import { AwesomeButton as Button } from "react-awesome-button";

const AwesomeButton = ({ label, onClick }) => {
  return (
    <Button
      type="secondary"
      onPress={onClick}
      style={{
        "--button-secondary-color": "#ffc107",
        "--button-secondary-color-dark": "#ffc107",
        "--button-secondary-color-light": "#ffc107",
        "--button-secondary-color-hover": "#ffca2c",
        "--button-secondary-color-active": "#ffcd39",
        "--button-secondary-border": "2px solid #000000",
      }}>
      <span style={{ color: "black" }}>{label}</span>
    </Button>
  );
};

export default AwesomeButton;
