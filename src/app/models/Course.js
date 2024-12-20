// @ts-ignore
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import slug from 'mongoose-slug-updater';
import mongooseDelete from 'mongoose-delete';
// const ObjectId = Schema.ObjectId;
const Course = new Schema(
  {
    name: { type: String, maxLength: 255, required: true },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    videoId: { type: String, maxLength: 255, required: true },
    level: { type: String, maxLength: 255 },
    slug: { type: String, slug: 'name', unique: true },
  },
  {
    timestamps: true,
  },
);

// NOTE: Add plugin

mongoose.plugin(slug);
Course.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });
const CourseModel = mongoose.model('Course', Course);
export default CourseModel;
