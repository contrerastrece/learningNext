import React, { Suspense } from "react";
import Posts from "../page";

const loadPost = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();
  return data;
};

const page = async ({ params }) => {
  const data = await loadPost(params.postId);
  return (
    <div>
      <h1>
        {data.id}.- {data.title}
      </h1>
      <p>{data.body}</p>

      <hr />
      <h2>Others posts</h2>
      <Suspense fallback={<div>Loading Posts...</div>}>
      <Posts/>

      </Suspense>
    </div>
  );
};

export default page;
