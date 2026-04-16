"use server";

import { createClient } from "@/lib/supabase/server";

export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  unitPrice: number;
  currency: string;
}

export interface CreateOrderInput {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  address: string;
  postcode: string;
  items: OrderItem[];
  totalPrice: number;
  currency: string;
}

export interface CreateOrderResult {
  success: boolean;
  orderId?: string;
  error?: string;
}

export async function createOrder(
  input: CreateOrderInput
): Promise<CreateOrderResult> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("orders")
      .insert({
        full_name:   input.fullName,
        email:       input.email,
        phone:       input.phone,
        city:        input.city,
        address:     input.address,
        postcode:    input.postcode,
        items:       input.items,
        total_price: input.totalPrice,
        currency:    input.currency,
        status:      "pending",
      })
      .select("id")
      .single();

    if (error) {
      console.error("[createOrder] Supabase error:", error.message);
      return { success: false, error: error.message };
    }

    return { success: true, orderId: data.id };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[createOrder] Unexpected error:", message);
    return { success: false, error: message };
  }
}
