import Layout from './Layout';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <div className="flex">
        
        {/* Sidebar */}
        <aside className="w-64 p-4 bg-gray-100">
          <h2 className="font-bold mb-2">Categories</h2>
          <ul className="space-y-1">
            <li>Tech</li>
            <li>News</li>
            <li>Sports</li>
          </ul>
        </aside>

        {/* Main Blog Content */}
        <main className="flex-1 p-4">
          {children}
        </main>

      </div>
    </Layout>
  );
}
