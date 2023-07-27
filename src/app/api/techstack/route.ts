import { NextResponse } from "next/server";
import { TechStack } from "models"
import { connectMongoDB } from "libs";

export async function GET(){
    await connectMongoDB()

    const teckStack = await TechStack.find()

    return NextResponse.json(teckStack, { status: 200 })
}