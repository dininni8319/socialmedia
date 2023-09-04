import {
  EditOutlined,
  DeleteOutlined,
  AttachedFileOutlined,
  GiftOutlined,
  ImageOutlined,
  MicOutlined, 
  MoreHorizOutlined, 
} from "@mui/icons-material"
import { 
  Box, 
  Divider,
  Typography,
  InputBase,
  useTheme,
  Button,
  IconButton,
  useMediaQuery
} from "@mui/material"
import FlexBetween from "../../components/FlexBetween"
import UserImage from "../../components/UserImage"
import WidgetWrapper from "../../components/WidgetWrapper"
import Dropzone from 'react-dropzone'
import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux" 

const MyPostWidget = ({ picturePath }) => {
  const dispatch = useDispatch()
  const [isImage, setIsImage] = useState(false)
  const [post, setPost] = useState('')
  const [image, setImage] = useState(null)
  const { palette } = useTheme()
  const { _id } = useSelector((state) => state.user)
  const token = useSelector((state) => state.token)
  const isNonMobileScreen = useMediaQuery("min-width: 1000px")
  const mediumMain = palette.neutral.mediumMain
  const medium = palette.neutral.medium

  const handlePost = async () => {
    const formData = new FormData()
    formData.append('userId', _id)
    formData.append('description', post)
    if (image) {
      formData.append('picture', image)
    }
  }
}

export default MyPostWidget