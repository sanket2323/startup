import Hero from "@/components/Hero";
import SearchForm from "@/components/SearchForm";
import StartUpCard from "@/components/StartUpCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [{}];
  return (
    <>
      <div className="flex flex-col  w-full">
        <section>
          <Hero />
          <SearchForm query={query} />
        </section>

        <section className="section_container mt-10 mx-4">
          <p className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[30px] text-black">
            {query ? "Search results for: " + query : "All result"}
          </p>
          <ul className="grid md:grid-cols-3 sm:grid-cols-2 gap-5">
            {posts.length > 0 ? (<>
              posts.map((post:StartUpCard, index :number) => (<StartUpCard/>))
            </>) : (<>
            <p>No results Found</p>
            </>)}
          </ul>
        </section>
      </div>
    </>
  );
}
