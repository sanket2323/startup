
import Link from "next/link";
import { Slack, User } from "lucide-react";
import Image from "next/image";
import { auth } from "@/auth";
import { handleSignOut, handleSignIn } from "@/app/actions/authActions";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Slack className="text-black" />

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span className="max-sm:hidden">Create</span>
              </Link>

              <Link href="/startup/create">
                <span className="max-sm:hidden">Option</span>
              </Link>

              <form action={handleSignOut}>
                <button type="submit" className="cursor-pointer">
                  <span className="">Logout</span>
                </button>
              </form>

              <div className="max-sm:hidden w-9 h-9 rounded-full bg-gray-50">
                <Image
                  src={session.user?.image as string}
                  alt="User Avatar"
                  className="h-9 w-9 rounded-full"
                  width={20}
                  height={20}
                />
              </div>
            </>
          ) : (
            <>
              <form action={handleSignIn}>
                <button type="submit">Login</button>
              </form>
              <div className="max-sm:hidden w-9 h-9 rounded-full bg-gray-50">
                <User className="w-full h-full rounded-full" />
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
