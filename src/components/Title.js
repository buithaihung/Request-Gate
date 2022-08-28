import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const Title = (props) => {
  const { title } = props;
  return (
    <Typography variant="body2" {...props}>
      {title}
    </Typography>
  );
};

Title.propTypes = {
  title: PropTypes.node,
};

export default Title;
