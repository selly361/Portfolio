import { Document, Schema, model } from "mongoose"

interface ProjectDocument extends Document {
    title: string
    description: string
    imageUrl: string
    technologies: string[]
    githubUrl?: string
    liveDemoUrl?: string
}

const ProjectSchema = new Schema<ProjectDocument>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  technologies: { type: [String], required: true },
  githubUrl: { type: String },
  liveDemoUrl: { type: String }
})

const Project = model("Project", ProjectSchema)

export default Project