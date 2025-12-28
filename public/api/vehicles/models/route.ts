import { NextResponse } from "next/server";

const VPIC_BASE = "https://vpic.nhtsa.dot.gov/api/vehicles";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const make = searchParams.get("make");
  if (!make) {
    return NextResponse.json(
      { error: "Query parameter `make` is required" },
      { status: 400 },
    );
  }

  const response = await fetch(
    `${VPIC_BASE}/getmodelsformake/${encodeURIComponent(make)}?format=json`,
    { next: { revalidate: 60 * 60 } },
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: "Unable to fetch vehicle models" },
      { status: 502 },
    );
  }

  const data = await response.json();
  const models =
    data?.Results?.map(
      (item: { Model_Name: string; Model_ID?: number }) => ({
        id: item.Model_ID ?? item.Model_Name,
        name: item.Model_Name.trim(),
      }),
    ) ?? [];

  return NextResponse.json({ data: models });
}
