import { NextResponse } from 'next/server'
import { createServerSupabaseClient, getOwnerUserId } from '@/lib/supabase'

export async function GET() {
  try {
    const supabase = await createServerSupabaseClient()

    if (!supabase) {
      return NextResponse.json({
        error: 'Database not configured',
        env_vars: {
          url: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
          key: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
        }
      }, { status: 503 })
    }

    const targetUserId = getOwnerUserId()

    // Test basic connection
    const { data: cars, error: carsError } = await supabase
      .from('cars')
      .select('*')
      .eq('user_id', targetUserId)

    const { data: allCars, error: allCarsError } = await supabase
      .from('cars')
      .select('*')

    // Check what user_ids actually exist
    const { data: userIds, error: userIdsError } = await supabase
      .from('cars')
      .select('user_id')

    // Test the exact query from the cars API
    const { data: apiCars, error: apiError } = await supabase
      .from('cars')
      .select(`
        *,
        fill_ups!inner(count),
        maintenance_records!inner(count)
      `)
      .eq('user_id', targetUserId)
      .order('created_at', { ascending: false })

    return NextResponse.json({
      success: true,
      targetUserId,
      env_vars: {
        url: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
        key: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      },
      cars: {
        count: cars?.length || 0,
        data: cars,
        error: carsError
      },
      allCars: {
        count: allCars?.length || 0,
        data: allCars,
        error: allCarsError
      },
      userIds: {
        data: userIds,
        error: userIdsError
      },
      apiCars: {
        count: apiCars?.length || 0,
        data: apiCars,
        error: apiError
      }
    })
  } catch (error) {
    return NextResponse.json({
      error: 'Debug error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}