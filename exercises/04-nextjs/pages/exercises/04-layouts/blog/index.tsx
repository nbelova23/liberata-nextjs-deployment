import BlogLayout from '../components/BlogLayout';
import Link from 'next/link';

export default function BlogHome() {

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Blog Home</h1>
            <ul>
                <li>
                    <Link href="/exercises/04-layouts/blog/post-1">
                        Here’s your first blog post
                    </Link>
                </li>
            </ul>
        </div>
    );

}

BlogHome.getLayout = function getLayout(page: React.ReactNode) {
  return <BlogLayout>{page}</BlogLayout>;
};
