import { Box, FormHelperText, makeStyles, Paper, TextField } from "@material-ui/core";
import Title from "./Title";
import PropTypes from "prop-types";
import { red } from "@material-ui/core/colors";
const useTheme = makeStyles((theme) => ({
  box: {
    width: "100%",
  },
  title: {
    display: "inline-block",
    width: "40%",
    height: "100%",
  },
  boxSelect: {
    width: "60%",
    position: "relative",
  },
  error: {
    position: "absolute",
    bottom: theme.spacing(-5),
    left: "0",
    color: red[500]
  },
  input: {
    display: "inline-block",
    width: "100%",
    height: "100%",
  },
}));

const InputTitle = (props) => {
  const {
    type,
    title,
    valueInput,
    handleChangeInput,
    handleBlurInput,
    idInput,
    typeInput,
    variant,
    disabled,
    style,
    name,
    error
  } = props;
  const classes = useTheme();
  return type === true ? (
    <Box
      className={classes.box}
      display="flex"
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Title title={title} variant="h6" className={classes.title} />
      <Box className={classes.boxSelect}>
        <TextField
          className={classes.input}
          value={valueInput}
          onChange={handleChangeInput}
          onBlur={handleBlurInput}
          id={idInput}
          type={typeInput}
          variant={variant}
          disabled={disabled}
          name={name}
          fullWidth
        />
        <FormHelperText className={classes.error}>{error}</FormHelperText>
      </Box>
    </Box>
  ) : (
    <Paper elevation={0} className={style}>
      <Title title={title} />
      <TextField
        value={valueInput}
        onChange={handleChangeInput}
        id={idInput}
        type={typeInput}
        variant="outlined"
        fullWidth
      />
    </Paper>
  );
};

InputTitle.propTypes = {
  type: PropTypes.bool,
  title: PropTypes.string.isRequired,
  valueInput: PropTypes.node,
  handleChangeInput: PropTypes.func.isRequired,
  idInput: PropTypes.string,
  style: PropTypes.node,
  typeInput: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  error: PropTypes.string
};

export default InputTitle;
