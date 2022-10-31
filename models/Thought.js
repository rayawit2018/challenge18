const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');


// Schema to create Post model

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: 'please leave a thought',
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);
// Create a virtual property `reactions` that gets the amount of reaction per thought
thoughtSchema.virtual('reactionCount')
// getter
.get(function() {
  return this.reactions.length;
});

// Initialize Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
