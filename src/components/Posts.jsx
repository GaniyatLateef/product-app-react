import React from "react"; 
import Post from "./Post";

const Posts = () => {
  const posts = [
    {
      id: 1,
      title: "Blog Title 1",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut repellat distinctio illo laboriosam commodi animi ipsa. Consequuntur autem laboriosam corporis fuga neque cupiditate nam! Excepturi pariatur maxime ratione blanditiis laborum.",
    },
    {
      id: 2,
      title: "Welcome to our World!",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut repellat distinctio illo laboriosam commodi animi ipsa. Consequuntur autem laboriosam corporis fuga neque cupiditate nam! Excepturi pariatur maxime ratione blanditiis laborum.",
    },
    {
      id: 3,
      title: "Hello World!",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut repellat distinctio illo laboriosam commodi animi ipsa. Consequuntur autem laboriosam corporis fuga neque cupiditate nam! Excepturi pariatur maxime ratione blanditiis laborum.",
    },
  ];
  const [data, setData] = React.useState(posts);

  return (
    <div>
      <h3>Posts</h3>
      {data.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default Posts;
