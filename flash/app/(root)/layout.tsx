import SideBar from "@/components/SideBar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-full gap-3 font-inter">
       <SideBar/>
        {children}
    </main>
  );
}
