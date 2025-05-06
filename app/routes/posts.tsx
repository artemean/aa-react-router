import type { Route } from "./+types/posts";
import { useFetch } from "~/hooks/useFetch";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Posts" }, { name: "description", content: "Posts page" }];
}

type PostModel = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function Posts() {
  const { data, error, isLoading } = useFetch<PostModel[]>(
    "https://jsonplaceholder.typicode.com/posts",
  );

  if (isLoading) return <p>Loading all posts...</p>;

  if (error) return <p>There was an error: {error}</p>;

  return (
    <div>
      <h1 className="text-lg font-bold mb-2">Posts page</h1>
      {data?.map((post) => (
        <Link to={`/posts/${post.id}`} className="block">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-300 p-6 mx-auto my-6 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 first-letter:uppercase">
              {post.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">{post.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
