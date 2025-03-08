/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { Eye } from "lucide-react";
import Image from "next/image";

const StartUpCard = ({ post }: { post: StartUpTypeCard }) => {
  return (
    <div>
      <Card>
        <CardHeader className="flex-1 flex-row justify-between items-center">
          <div>
            {formatDate(post._createdAt)}
            <CardDescription>
              {
                <Link href={`/user/${post?.author?._id}`}>
                  <p>{post.author.name}</p>
                </Link>
              }
            </CardDescription>
          </div>
          <div>
            {post?.profile_url ? (
              <Image
                src={post.profile_url}
                alt="Author profile"
                width={48}
                height={48}
                className="rounded-full"
              />
            ) : (
              <div className="w-12 h-12 bg-gray-200 rounded-full" />
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <div className="">
              <Link href={`/startup/${post._id}`}>
                <h3 className="text-lg font-medium">{post.title}</h3>
              </Link>
              <p className="line-clamp-2 text-sm text-gray-600 mt-1">
                {post.description}
              </p>
            </div>
          </div>
          <Link href={`/startup/${post._id}`}>
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[164px] rounded-[10px] object-cover mt-2"
            />
          </Link>
        </CardContent>
        <CardFooter>
          <div className="flex w-full justify-between items-center">
            <Link href={`/?query=${post.category?.toLowerCase()}`}>
              <p className="text-sm font-medium px-3 py-1 bg-gray-100 rounded-full">
                {post.category}
              </p>
            </Link>
            <div className="flex items-center gap-1">
              <Eye size={15} />
              <span className="text-xs">{post.views}</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default StartUpCard;
