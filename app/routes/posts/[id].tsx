import { useParams } from "react-router";
import { useFetch } from "~/hooks/useFetch";

type PostModel = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function Post() {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch<PostModel>(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );

  if (isLoading) return <p>Loading post...</p>;

  if (error) return <p>There was an error: {error}</p>;

  return (
    data && (
      <>
        <h1 className="text-lg font-bold mb-2">{data.title}</h1>
        <div>{data.body}</div>
      </>
    )
  );
}
