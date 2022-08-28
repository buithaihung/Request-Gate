import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import PropTypes from 'prop-types';

const Alert = (props) => {
  return <MuiAlert elevation={10} variant="filled" {...props} />;
};

const Message = (props) => {
  const { open, handleClose, title, status } = props;
  const vertical = "bottom";
  const horizontal = "left";
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={status}>{title}</Alert>
    </Snackbar>
  );
};

Message.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  title: PropTypes.string,
  status: PropTypes.string
}

export default Message;
