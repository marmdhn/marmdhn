import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <Image
        src={"/images/404NotFound.svg"}
        alt={"404NotFound"}
        width={100}
        height={100}
        style={{ userSelect: "none", pointerEvents: "none" }}
        className="object-cover w-1/4"
      />
      <Link href={"/"}>
        <button className="bg-gray-400/75 dark:bg-gray-500 hover:bg-gray-500 dark:hover:bg-gray-400 transition-all duration-200 w-auto flex items-center justify-center gap-4 py-2 px-4 rounded-lg">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
