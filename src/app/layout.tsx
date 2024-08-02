import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactQueryProvider from "@/providers/react_query/reactQueryProvider";

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient()
export const metadata: Metadata = {
  title: "Edsynapse",
  description: "Your learning App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <ReactQueryProvider>
          <Providers
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

            {children}
          </Providers>
        </ReactQueryProvider>

      </body>
    </html>
  );
}
