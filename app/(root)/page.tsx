"use client";
import Hero from "@/components/Hero";
import SearchForm from "@/components/SearchForm";
import StartUpCard from "@/components/StartUpCard";
import { db } from "@/lib/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

// Define a type for your post data
interface Post {
  id: string;
  // Add other properties your post has
  title?: string;
  description?: string;
  // Add all other properties you need
  [key: string]: unknown; // This allows for any other properties
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const postsArray: Post[] = [];

      querySnapshot.forEach((doc) => {
        postsArray.push({ id: doc.id, ...doc.data() });
      });

      setPosts(postsArray);
    } catch (error) {
      console.log("this is the catch section", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col w-full">
        <section>
          <Hero />
          <SearchForm />
        </section>

        <section className="section_container mt-10 mx-4">
          <p className="font-semibold text-xl my-2 sm:text-2xl md:text-3xl lg:text-[30px] text-black">
            Different StartUps
          </p>
          <ul className="grid md:grid-cols-4 sm:grid-cols-2 gap-5">
            {posts?.length > 0 ? (
              posts.map((post) => <StartUpCard post={post} key={post.id} />)
            ) : (
              <p className="no-results">No startups found</p>
            )}
          </ul>
        </section>
      </div>
    </>
  );
}