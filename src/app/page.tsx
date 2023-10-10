import Navbar from "./components/Navbar";
import { getCurrentUser } from "./lib/session";

export default async function Home() {
  const user = await getCurrentUser();
  console.log(user);
  return (
    <>
      <main className="max-w-[1280px] mx-auto px-5">
        <Navbar />
      </main>
    </>
  )
}
