const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema( 
  {
    userId: {
      type: String,
      required: [true, "userId is required"],
      unique: [true, "userId must unique"],
    },
    videos: [
      {
        id:mongoose.Schema.ObjectId ,
        videoId: {
          type: String,
          required: [true, "video is required"],
        },
        imageUrl:{
          type:String ,
          required : [true , "image of video required"]
        },
        title : String ,
        isLiked: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  { timestamps: true }
);

const UserModule = mongoose.model("user", UserSchema);

module.exports = UserModule;
