/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import { Eye } from 'lucide-react';
import Image from 'next/image';

const StartUpCard = ({post}:{post:StartUpTypeCard}) => {
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
          <div className="flex flex-row items-start gap-1 justify-center">
            <Eye size={15} />
            <span className=" text-xs">{post.views}</span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <div className="">
              <Link href={`/startup/${post._id}`}>
                <h3 className="text-lg font-medium">{post.title}</h3>
              </Link>
              <p>{post.description}</p>
            </div>
            <div>
              {post?.img ? (
                <Image
                  src={post.img}
                  alt="Startup logo"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              ) : (
                <div className="w-12 h-12 bg-gray-200 rounded-full" />
              )}
            </div>
          </div>
          <Link href={`/startup/${post._id}`}>
            <img
              src="person.jpg"
              alt="js"
              className="w-full h-[164px] rounded-[10px] object-cover mt-2"
            />
          </Link>
        </CardContent>
        <CardFooter>
          <div className="flex-between gap-3 mt-5">
            {/* <Link href={`/?query=${category?.toLowerCase()}`}>
              <p className="text-16-medium">{category}</p>
            </Link> */}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default StartUpCard
