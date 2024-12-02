import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      Clique{" "}
      <Link href={"/documents/123"}>
        <span className="text-blue-500 underline">&nbsp;aqui&nbsp;</span> para
        ir para o documento
      </Link>
    </div>
  );
};

export default Home;
