import Task from "@/models/Task";
import dbConnect from "@/utils/mongoose";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    try {
        dbConnect()

        const taskFound = await Task.findById(params.id)

        if (!taskFound) {
            return NextResponse.json({ message: 'Tarea no encontrada' }, { status: 404 })
        }

        return NextResponse.json(taskFound)
    } catch (error) {
        return NextResponse.json({ message: 'Tarea no encontrada' }, { status: 404 })
    }
}

export async function PUT(req, { params }) {
    try {
        const data = await req.json()
        const taskUpdated = await Task.findByIdAndUpdate(params.id, data, {
            new: true
        })
        return NextResponse.json(taskUpdated)
    } catch (error) {
        return NextResponse.json(error.message, { status: 400 })
    }
}


export async function DELETE(req, { params }) {
    try {
        const taskDeleted = await Task.findByIdAndDelete(params.id)
        if (!taskDeleted) {
            return NextResponse.json({ message: 'Tarea no encontrada' }, { status: 404 })
        }
        return NextResponse.json(taskDeleted)
    }
    catch (error) {
        return NextResponse.json(error.message, { status: 400 })
    }
}

