import { useContext } from 'react';
import AuthContext from './context/AuthContext';
import { useRouter } from 'next/router';

export default function Profile() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const router = useRouter();

  //protect route
  if (!isLoggedIn) {
    return (
      <div className="max-w-md mx-auto py-8">
        <p className="mb-4">You must be logged in to view this page.</p>
        <button
          onClick={() => router.push('/exercises/05-authentication/signin')}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Go to Sign In
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>

      <p className="mb-4">You are logged in</p>

      <button
        onClick={() => {
          logout();
          router.push('/exercises/05-authentication/signin');
        }}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Sign Out
      </button>
    </div>
  );
}