import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
    userId: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    location: String,
    description: String,
    picturePath: String,
    userPicturePath: String,
    likes: {
      type: Map,
      of: Boolean, // more performat than the array
    },
    comments: {
      type: Array,
      default: [],
    },
}, { timestamps: true })

export default mongoose.model("Post", PostSchema)