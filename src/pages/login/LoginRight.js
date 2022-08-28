import Input from '../../components/Input';
import Button from '../../components/Button';
import { useThemes, Form } from './style';
import { Grid, Box, CircularProgress, FormHelperText, Link } from '@material-ui/core';
import GoogleLogin from 'react-google-login';
import Title from '../../components/Title';
import PropTypes from 'prop-types';
import Google from '../../assets/img/gg.png';

const LoginRight = (props) => {
  const {
    onSubmit,
    valueEmail,
    valuePassword,
    onChangeEmail,
    onChangePassword,
    onSuccess,
    onFailure,
    isLoading,
    errorEmail,
    errorPassword,
    touchedEmail,
    touchedPassword,
    forgotPassword
  } = props;
  const classes = useThemes();
  return (
    <Grid container direction="row" justify="flex-start" alignItems="center">
      <Box className={classes.right}>
        <Title className={classes.signinText} title="Sign in" variant="h3" />
        <Form 
        onSubmit={onSubmit}
        >
          <Grid component="div" className={classes.boxSelect}>
            <Input
              className={classes.input}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              type="email"
              value={valueEmail}
              onChange={onChangeEmail}
            />
            <FormHelperText className={classes.error}>
              {touchedEmail && errorEmail}
            </FormHelperText>
          </Grid>
          <Grid component="div" className={classes.boxSelect}>
            <Input
              className={classes.input}
              id="outlined-basic-2"
              label="PassWord"
              variant="outlined"
              name="password"
              type="password"
              value={valuePassword}
              onChange={onChangePassword}
            />
            <FormHelperText className={classes.error}>
              {touchedPassword && errorPassword}
            </FormHelperText>
          </Grid>
          <Title
            className={classes.forgotPass}
            title={
              <Link
                href="/forgot-password"
                onClick={forgotPassword}
              >Forgot Password?</Link>
            }
          />
          <Button
            className={classes.button}
            type="submit"
            title={
              isLoading ? (
                <CircularProgress color="inherit" size={27} />
              ) : (
                "Sign in"
              )
            }
          />
        </Form>
        <hr className={classes.hr} />
        <Title className={classes.signinTextGG} title="Sign in with Google" variant="h3" />
        <GoogleLogin
          // clientId={CLIENT_ID}
          render={(renderProps) => (
            <Button
              color="default"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className={classes.singGG}
              startIcon={
                <img
                  alt="Google"
                  title="Sign in with Google"
                  src={Google}
                  className={classes.sizeGoogle}
                />
              }
              title="Google"
            />
          )}
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
        />
      </Box>
    </Grid>
  );
};

LoginRight.propTypes = {
  onSubmit: PropTypes.func,
  valueEmail: PropTypes.string,
  valuePassword: PropTypes.string,
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
  onSuccess: PropTypes.func,
  onFailure: PropTypes.func,
  isLoading: PropTypes.bool,
  touchedEmail: PropTypes.bool,
  touchedPassword: PropTypes.bool,
  errorEmail: PropTypes.string,
  errorPassword: PropTypes.string,
  forgotPassword: PropTypes.func
};

export default LoginRight;
