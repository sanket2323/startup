import Hero from "@/components/Hero";
import SearchForm from "@/components/SearchForm";
import StartUpCard from "@/components/StartUpCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
  {
    _createdAt: new Date(),
    views: 55,
    author: { _id: 1,name:"Sanket" },
    _id: 1,
    description: "This is a description",
    image:
      "https://images.unsplash.com/photo-1634912314704-c646c586b131?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYwdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Robots",
    title: "We Robots",
  },
];

  return (
    <>
      <div className="flex flex-col  w-full">
        <section>
          <Hero />
          <SearchForm query={query} />
        </section>

        <section className="section_container mt-10 mx-4">
          <p className="font-semibold text-xl my-2 sm:text-2xl md:text-3xl lg:text-[30px] text-black">
            {query ? "Search results for: " + query : "All result"}
          </p>
          <ul className="grid md:grid-cols-3 sm:grid-cols-2 gap-5">
            {posts?.length > 0 ? (
              posts.map((post: StartupTypeCard) => (
                <StartUpCard key={post?._id} post={post} />
              ))
            ) : (
              <p className="no-results">No startups found</p>
            )}
          </ul>
        </section>
      </div>
    </>
  );
}
