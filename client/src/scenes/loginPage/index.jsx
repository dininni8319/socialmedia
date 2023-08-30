import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
 } from "@mui/material";
import Form from "./Form.jsx";

const LoginPage = () => {
  const theme = useTheme()
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)")

  return (
    <Box>
      <Box width='100%'
        p='1rem 6%'
        display='flex'
        textAlign='center'
        backgroundColor={theme.palette.background.alt}
      >
        <Typography
          fontWeight="bold"
          fontSize="32px"
          color='primary'
        >Login Page
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p='2rem'
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography
          fontWeight="500"
          variant="h5"
          sx={{ mb: "1.5rem"}}
        >
          Welcome to Sociopedia, the Social Media for Sociopaths!
        </Typography>
        <Form>

        </Form>
      </Box>
    </Box>
  );
}

export default LoginPage;  