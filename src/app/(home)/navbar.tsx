import Link from "next/link";
import Image from "next/image";
import { SearchInput } from "./search-input";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-hull w-full">
      <div className="flex gap-3 items-center shrink-0 pr-6 max-h-7">
        <Link href={"/"}>
          <Image
            alt="Logo"
            src={"/logo1.webp"}
            width={56}
            height={56}
            quality={100}
            priority
          />
        </Link>
        <h1 className="text-black font-extrabold text-xl lg:text-xl">
          Doc<span className="text-cyan-700">Zone</span>
        </h1>
      </div>
      <SearchInput />
    </nav>
  );
};
