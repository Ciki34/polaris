"use server";

import { createClient } from "@/lib/supabase/server";

export interface CreateContactInput {
  fullName: string;
  email: string;
  message: string;
}

export interface CreateContactResult {
  success: boolean;
  error?: string;
}

export async function createContact(
  input: CreateContactInput
): Promise<CreateContactResult> {
  try {
    const supabase = await createClient();

    const { error } = await supabase.from("contacts").insert({
      full_name: input.fullName,
      email:     input.email,
      message:   input.message,
      status:    "new",
    });

    if (error) {
      console.error("[createContact] Supabase error:", error.message);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[createContact] Unexpected error:", message);
    return { success: false, error: message };
  }
}
