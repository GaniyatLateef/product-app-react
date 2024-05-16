const Button = (props) => {
  const { action, label = "1234", color } = props;
  const style = {
    backgroundColor: color,
  };
  return (
    <button className="btn" style={style} onClick={action}>
      {label}
    </button>
  );
};

export default Button;
