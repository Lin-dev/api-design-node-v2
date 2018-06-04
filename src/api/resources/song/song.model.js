import mongoose from 'mongoose';

export const schema = {
  title: {
    type: String,
    required: [true, 'Please include a title'],
  },

  url: {
    type: String,
    unique: true,
    required: [true, 'Please include an url'],
  },

  album: {
    type: String,
  },

  artist: {
    type: String,
  },

  rating: {
    type: Number,
  },

  favorite: {
    type: Boolean,
  },
};

const songSchema = new mongoose.Schema(schema);

export const Song = mongoose.model('song', songSchema);
