import Link from "next/link";
import { Logo } from "@/components/logo/logo";
import { SearchInput } from "./search-input";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-hull w-full">
      <div className="flex gap-3 items-center shrink-0 pr-6">
        <Link href={"/"}>
          <Logo />
        </Link>
      </div>
      <SearchInput />
    </nav>
  );
};
