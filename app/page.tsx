import Image from "next/image";
import HomeComponent from "./components/Home";
import Navbar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex flex-col justify-between width-full h-screen">
      <Navbar />
      <HomeComponent />
    </main>
  );
}
