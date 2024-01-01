import Link from "next/link";
import React from "react";

const PostCard = ({ data }) => {
  console.log(data,'🐽')
  return (
    <div>
      <Link href={`/posts/${data.id}`}>
        <h1 className="text-3xl">
          {data.id}.- {data.title}
        </h1>
      </Link>
      <p>{data.body}</p>
      <button>Click</button>
    </div>
  );
};

export default PostCard;
