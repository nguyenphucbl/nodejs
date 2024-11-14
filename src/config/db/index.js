import mongoose from 'mongoose';

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
    console.log('Connect to database successfully!');
  } catch (err) {
    console.log('Error connecting to database', err);
  }
}

export { connect };
