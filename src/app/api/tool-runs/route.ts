import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const { tool_id, input_data, output_data, user_id } = await req.json();

    if (!tool_id || !input_data || !output_data) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    const { data, error } = await supabase
      .from('tool_runs')
      .insert([
        {
          tool_id,
          input_data,
          output_data,
          user_id: user_id || null, // Optional for now
        },
      ])
      .select();

    if (error) throw error;

    return NextResponse.json({ data: data[0] });
  } catch (error) {
    console.error('Error saving tool run:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to save tool run';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const user_id = searchParams.get('user_id');

    const supabase = getSupabaseAdmin();
    let query = supabase.from('tool_runs').select('*, tools(name, icon, category)');

    if (user_id) {
      query = query.eq('user_id', user_id);
    }

    const { data, error } = await query.order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error fetching tool runs:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch tool runs';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
