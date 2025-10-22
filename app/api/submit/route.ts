import { supabase } from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, contact, location, gender, age, mbti_type } = body;

        // Validate required fields
        if (!name || !contact || !location || !gender || !age || !mbti_type) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        // Insert data into Supabase
        const { data, error } = await supabase
            .from("mbti_submissions")
            .insert([
                {
                    name,
                    contact,
                    location,
                    gender,
                    age,
                    mbti_type,
                    created_at: new Date().toISOString(),
                },
            ])
            .select();

        if (error) {
            console.error("Supabase error:", error);
            return NextResponse.json({ error: "Database error" }, { status: 500 });
        }

        return NextResponse.json(
            {
                message: "Submission successful",
                data: data?.[0],
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
