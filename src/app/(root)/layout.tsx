import LeftSideBar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <main className="relative flex bg-black-3">
        <LeftSideBar />
        <section className="min-h-screen  border-color flex flex-1 flex-col px-4 sm:px-14">
          <div className="mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
            <div className="flex h-16 items-center justify-between md:hidden">
              <Image src="/icons/logo.svg" alt="logo" width={30} height={30} />
              <MobileNav />
            </div>
            <div className="flex flex-col md:pb-14">Toaster {children}</div>
          </div>
        </section>
        <RightSidebar />
      </main>
    </div>
  );
}