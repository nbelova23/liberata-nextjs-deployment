import BlogLayout from '../components/BlogLayout';

export default function BlogPost() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Post 1</h1>
      <p>This is the first blog post using a custom layout.</p>
    </div>
  );
}

BlogPost.getLayout = function getLayout(page: React.ReactNode) {
  return <BlogLayout>{page}</BlogLayout>;
};
