import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
            <p className="text-xl mt-4">Oops! The page you're looking for doesn't exist.</p>
            <p className="text-md mt-2 text-gray-600">
                You might have mistyped the address, or the page has been moved.
            </p>
            <Link href="/" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Go Back Home

            </Link>
        </div>
    )
}