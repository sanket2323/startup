
'use client'
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CreateProject = () => {
  const router = useRouter();
  const [formData] = useState({
    title: "",
    description: "",
    category: "",
    profile_url: "",
  });

  const handleChange = () => {
  
  };

  const handleSubmit = async () => {
    router.push("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-2xl p-5 shadow-lg bg-white">
        <CardHeader>
          <h2 className="text-2xl font-bold">Create a New Project</h2>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Profile Image URL</label>
              <input
                type="text"
                name="profile_url"
                value={formData.profile_url}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </CardContent>
        <CardFooter>
          <Link href="/">
            <span className="text-blue-500 hover:underline">Go Back</span>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreateProject;
