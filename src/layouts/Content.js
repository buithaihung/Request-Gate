import { useTheme } from "./style";
import PropTypes from "prop-types";

const Content = (props) => {
  const { children } = props;
  const classes = useTheme();
  return (
    <main className={classes.content}>
      <div className={classes.hidden} />
      {children}
    </main>
  );
};

Content.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Content;
