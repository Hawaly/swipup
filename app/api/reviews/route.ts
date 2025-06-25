import { NextResponse } from 'next/server';

export async function GET() {
  // In a real app, you'd fetch reviews from Supabase
  const reviews = [
    { id: 1, author: 'Jane Doe', text: 'Great coffee!', rating: 5 },
    { id: 2, author: 'John Smith', text: 'Amazing atmosphere.', rating: 4 },
  ];

  return NextResponse.json({ reviews });
}
