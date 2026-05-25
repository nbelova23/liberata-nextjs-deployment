
import Link from 'next/link';

function Button({
  children,
  variant = 'primary',
  ...props
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  [key: string]: any;
}) {
  const styles =
    variant === 'primary'
      ? 'bg-blue-500 hover:bg-blue-600 text-white'
      : 'bg-gray-500 hover:bg-gray-600 text-white';

  return (
    <button className={`px-4 py-2 rounded transition-colors ${styles}`} {...props}>
      {children}
    </button>
  );
}

function Card({
  title,
  children
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border">
      {title && <h3 className="text-lg font-bold mb-3">{title}</h3>}
      {children}
    </div>
  );
}

export default function About() {
  return (
    <div className="max-w-xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">About Page</h1>

      <Card title="About This App">
        <p>This is the About page you just created using Next.js routing.</p>
      </Card>

      <div className="mt-4">
        <Link href = "/exercises/01-getting-started">
          <Button>Go Back</Button>
        </Link>
      </div>
    </div>
  );
}



