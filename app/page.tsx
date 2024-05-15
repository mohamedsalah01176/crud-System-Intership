import Image from "next/image";
import { IoIosArrowDropleft } from "react-icons/io";
import { CgSearch } from "react-icons/cg";

export default function Home() {
  return (
    <main className="min-h-screen p-5">
      <section className="flex justify-between items-center w-full">
        <IoIosArrowDropleft className="text-2xl text-[#ccc] font-semibold"/>
        <h1 className="text-xl font-semibold">Here you can make add ,delete ,update and showing the data</h1>
        <div className="border border-[#ccc] p-2 rounded-xl flex items-center">
          <input type="text" placeholder="search" className="outline-none"/>
          <CgSearch  className="text-2xl text-[#ccc] font-semibold" />
        </div>
      </section>

      <section>
        <h1 className="text-xl font-semibold">Students List</h1>
        <button className="sk"> add New Student</button>
      </section>
    </main>
  );
}
