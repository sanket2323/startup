import Link from "next/link";
import { auth, signOut, signIn } from "@/auth";
import { Slack , User} from "lucide-react";
import Image from "next/image";


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

              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                  
                }}
              >
                <button type="submit" className="cursor-pointer">
                  <span className="max-sm:hidden">Logout</span>
                </button>
              </form>

              <div className="max-sm:hidden w-9 h-9 rounded-full bg-gray-50">
                <Image
                  src={session.user?.image as string}
                  alt="User Avatar"
                  className="h-9 w-9 rounded-full fill"
                  width={20}
                  height={20}
                />
              </div>
            </>
          ) : (
            <>
              <form
                action={async () => {
                  "use server";
                  await signIn("github");
                }}
              >
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
