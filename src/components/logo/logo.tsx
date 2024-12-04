import { AiOutlineDeploymentUnit } from "react-icons/ai";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <AiOutlineDeploymentUnit className="stroke h-9 w-9 stroke-gray-600 text-gray-500 dark:text-gray-300" />
      <h1 className="text-black font-bold text-xl lg:text-xl">
        Doc<span className="text-blue-500">Zone</span>
      </h1>
    </div>
  );
}
