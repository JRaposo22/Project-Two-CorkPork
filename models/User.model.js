const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: false,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      default: 'https://res.cloudinary.com/dkoe4o8w1/image/upload/v1676914008/profile_pic_c9ynkq.png'
    },
    title: {
      required: true,
      type: String,
    },
    favourites:[{
      type: Schema.Types.ObjectId,
      ref: 'Wine'
    }],
    wishList:[{
      type: Schema.Types.ObjectId,
      ref: 'Wine'
    }],
    tastedWines:[{
      type: Schema.Types.ObjectId,
      ref: 'Wine'
    }],
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Review',
      },
    ]
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
