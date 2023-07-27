import { Document, Schema, model, models } from "mongoose"

interface TechStackDocument extends Document {
  languages: string[]
  databases: string[]
  frameworks: string[]
  tools: string[]
}

const TechStackSchema = new Schema<TechStackDocument>({
  languages: [{ type: String, required: true }],
  databases: [{ type: String, required: true }],
  frameworks: [{ type: String, required: true }],
  tools: [{ type: String }]

})

const TechStack = models.TechStack || model<TechStackDocument>("TechStack", TechStackSchema)

export default TechStack
