import { Schema, model, models } from 'mongoose'
import { User } from 'types/User'

const UserSchema = new Schema(
  {
    password: { type: String, required: true, unique: true, dropDups: true },
    username: { type: String, required: true },
    role: String,
  },
  {
    timestamps: true,
  }
)

export default models.User || model('User', UserSchema)
