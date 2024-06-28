import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BasicModal from "../components/BasicModal";


const defaultTheme = createTheme();

export default function SignIn() {
  const [emailErrors, setEmailErrors] = useState(true);
  const [passwordErrors, setPasswordErrors] = useState(true);
  const [sendData, setSendData] = useState({
      email: "",
      password: "",
  });
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
    nav("/");
  };

  const checkEmail = (e) => {
    var regExp =
        /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    setEmailErrors(!regExp.test(e.target.value));
  };

  const checkPassword = (e) => {
    var regExp2 =
        /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/;
    setPasswordErrors(!regExp2.test(e.target.value));
  };

  const onchange = (e) => {
    setSendData({
        ...sendData,
        [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const reponse = await.axios.post(
        "https://my-little-pelican-58844a067eda.herokuapp.com//api/signin",
        sendData
      );

      

    } catch (err) {
      setShowModal(true);
    }
    
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              value={sendData.email}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={emailErrors && sendData.email !== ""}
              onChange={(e) => {
                onchange(e);
                checkEmail(e);
              }}
              helperText={
                emailErrors && sendData.email !== ""
                  ? "이메일 형식을 지켜주세요."
                  : null
              }
            />
            <TextField
              value={sendData.password}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={passwordErrors && sendData.password !== ""}
              onChange={(e) => {
                onchange(e);
                checkPassword(e);
              }}
              helperText={
                passwordErrors && sendData.password !== ""
                  ? "비밀번호 형식을 지켜주세요."
                  : null
              }
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <Link href="SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <BasicModal
              text={"로그인에 실패했습니다."}
              title={"올바른 이메일과 비밀번호를 입력하세요."}
              open={showModal}
              closeModal={closeModal}
            />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}