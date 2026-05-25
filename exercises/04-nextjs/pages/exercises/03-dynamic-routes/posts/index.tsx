
import Link from 'next/link';

function PostCard({ post }: any) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-bold mb-2">{post.title}</h3>
      <p className="text-gray-600 mb-4">
        {post.body.substring(0, 100)}...
      </p>

        <Link href={`/exercises/03-dynamic-routes/posts/${post.id}`}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Read More
            </button>
        </Link>
    </div>
  );
}

export default function PostsPage({ posts }: { posts: any[] }) {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>

      <div className="grid gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}
