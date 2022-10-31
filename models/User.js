const { Schema, model } = require('mongoose');

// Schema to create User model


const userSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
      },
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought',
        },
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
    },
    {

     // transform Objects toJSON and toObject.
    // include virtuals 
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );
  
  userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });
  
  // Initialize our User model
  const User = model('User', userSchema);
  
  module.exports = User;
  