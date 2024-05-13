const Button = ({label="1234", color="lightyellow"}) => {
    const style = {
        backgroundColor: color,
    }
  return (
    <button style={style}>{label}</button>
  )
}

export default Button