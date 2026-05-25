export default function StaticPage({ posts }: { posts: any[] }) {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Static Data Fetching</h1>

      {posts.length === 0 ? (
        <p>No posts found</p>
      ) : (
        <ul className="space-y-4">
          {posts.slice(0, 5).map((post) => (
            <li key={post.id} className="p-4 border rounded">
              <h3 className="font-bold">{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return {
      props: {
        posts: data,
      },
    };
  } catch (error) {
    return {
      props: {
        posts: [],
      },
    };
  }
}

