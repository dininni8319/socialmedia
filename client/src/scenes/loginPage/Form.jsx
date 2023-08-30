import { useState } from "react"
import { 
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material"
import { Formik } from "formik"
import { EditOutlined } from "@mui/icons-material/EditOutlined"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import * as yup from "yup"
import { setLogin } from "../../state"
import FlexBetween from "../../components/FlexBetween"
import Dropzone from "react-dropzone"

const registerSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().min(8).required("required"),
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  location: yup.string().required("required"),
  occupation: yup.string().required("required"),
  picture: yup.string().required("required"),
})

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().min(8).required("required"),
})

const initialValuesRegister = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  location: "",
  occupation: "",
  picture: "",
}

const initialValuesLogin = {
  email: "",
  password: "",
}


const Form = () => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const theme = useTheme()
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)")
  const [isEditing, setIsEditing] = useState(false)
  const user = useSelector((state) => state.user)

  const fullName = `${user?.firstName} ${user?.lastName}`

  return (
    <Box>
      shhsshshsh
    </Box>
  )
}

export default Form