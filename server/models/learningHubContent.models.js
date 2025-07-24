import mongoose from 'mongoose'

const contentSchema = new mongoose.Schema(
{
    title: String,
    description: String,
    ageGroup: String,
}
)

export const Content = mongoose.model("Content", contentSchema)