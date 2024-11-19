"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from "./components/Navbar";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      
      <div className='flex flex-col items-center justify-center h-screen bg-lime-900 text-amber-100 font-serif text-5xl'>
        Welcome To Main Page with Navigation Bar!</div>
    </>
  );
}