export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      businesses: {
        Row: {
          id: string
          created_at: string
          name: string
          description: string | null
          logo_url: string | null
          user_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          description?: string | null
          logo_url?: string | null
          user_id: string
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          description?: string | null
          logo_url?: string | null
          user_id?: string
        }
      }
      games: {
        Row: {
          id: string
          created_at: string
          business_id: string
          name: string
          type: 'wheel' | 'scratch' | 'other'
          config: Json
          is_active: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          business_id: string
          name: string
          type: 'wheel' | 'scratch' | 'other'
          config: Json
          is_active?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          business_id?: string
          name?: string
          type?: 'wheel' | 'scratch' | 'other'
          config?: Json
          is_active?: boolean
        }
      }
      // Add more tables as needed
    }
  }
}
