// "use client";

// import { useRouter, usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import { isAuthenticated } from "@/app/(utils)/auth";
// import Sidebar from "./(components)/(Sidebar)/Sidebar";
// import Loader from "./(components)/(loader)/Loader";

// export default function ProtectedLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const router = useRouter();
//   const pathname = usePathname(); // Get the current pathname
//   const [loading, setLoading] = useState(true); // Add loading state

//   useEffect(() => {
//     if (!isAuthenticated()) {
//       router.push("/signin");
//       setLoading(false);
//     } else {
//       setLoading(false);
//     }
//   }, [router]);

//   if (loading) {
//     return <Loader />; // Show a loading state while checking authentication
//   }

//   // Determine if Sidebar should be hidden
//   const hideSidebar = pathname === "/signup" || pathname === "/signin";

//   return (
//     <>
//       {!hideSidebar && <Sidebar />}
//       <div>{children}</div>
//     </>
//   );
// }
