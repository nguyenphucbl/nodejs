import mongoose from 'mongoose';
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;
const Course = new Schema({
  name: { type: String, maxLength: 255 },
  description: { type: String, maxLength: 600 },
  image: { type: String, maxLength: 255 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
const CourseModel = mongoose.model('Course', Course);
export default CourseModel;
