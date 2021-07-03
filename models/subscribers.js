import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const subscriberSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
});

mongoose.models = {};

const Subscribe = mongoose.model('subscriber', subscriberSchema);

export default Subscribe;