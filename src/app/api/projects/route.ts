import { NextResponse } from "next/server";
import { Project } from "models"
import { connectMongoDB } from "libs";

export async function GET(){
    await connectMongoDB()

    const projects = await Project.find()

    return NextResponse.json(projects, { status: 200 })
}