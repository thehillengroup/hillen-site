import { NextResponse } from "next/server";

const VPIC_BASE = "https://vpic.nhtsa.dot.gov/api/vehicles";

export async function GET() {
  const response = await fetch(`${VPIC_BASE}/getallmakes?format=json`, {
    next: { revalidate: 60 * 60 }, // cache for an hour
  });
  if (!response.ok) {
    return NextResponse.json(
      { error: "Unable to fetch vehicle makes" },
      { status: 502 },
    );
  }
  const data = await response.json();
  const makes =
    data?.Results?.map((item: { Make_Name: string; Make_ID: number }) => ({
      id: item.Make_ID,
      name: item.Make_Name.trim(),
    })) ?? [];
  return NextResponse.json({ data: makes });
}
