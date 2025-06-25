import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { createClient } from "@/lib/supabase/server";
import { SupabaseProvider } from "@/lib/supabase/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Swipup - Gamified Customer Engagement",
  description: "Boost your business with gamified customer engagement and reviews",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  themeColor: "#4f46e5",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}>
      <SupabaseProvider session={session}>
        {children}
      </SupabaseProvider>
    </div>
  );
}
