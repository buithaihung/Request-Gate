import ButtonMui from "@material-ui/core/Button";
import PropTypes from "prop-types";

const Button = (props) => {
  const { title } = props;
  return (
    <ButtonMui color="primary" variant="contained" {...props}>
      {title}
    </ButtonMui>
  );
};

Button.propTypes = {
  title: PropTypes.node.isRequired,
};

export default Button;
