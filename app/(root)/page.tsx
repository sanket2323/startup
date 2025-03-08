"use client";
import Hero from "@/components/Hero";
import SearchForm from "@/components/SearchForm";
import StartUpCard from "@/components/StartUpCard";
import { db } from "@/lib/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

// Define a type for your post data
type Post = {
  id: string;
  _id:string;
  _createdAt: string;
  author: {
    _id: string;
    name: string;
  };
  profile_url?: string;
  title: string;
  description: string;
  image: string;
  category: string;
  views: number;
};


export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const postsArray: Post[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const post: Post = {
          id: doc.id,
          _id: doc.id, // Assign doc.id to _id
          _createdAt: data._createdAt || "",
          author: data.author || { _id: "", name: "" },
          profile_url: data.profile_url || "",
          title: data.title || "Untitled",
          description: data.description || "",
          image: data.image || "",
          category: data.category || "Uncategorized",
          views: data.views || 0,
        };
        postsArray.push(post);
      });

      setPosts(postsArray);
    } catch (error) {
      console.log("this is the catch section", error);
    }
  };


  // const fetchData = async () => {
  //   try {
  //     const querySnapshot = await getDocs(collection(db, "posts"));
  //     const postsArray: Post[] = [];

  //     querySnapshot.forEach((doc) => {
  //       postsArray.push({ id: doc.id, ...doc.data() });
  //     });

  //     setPosts(postsArray);
  //   } catch (error) {
  //     console.log("this is the catch section", error);
  //   }
  // };

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