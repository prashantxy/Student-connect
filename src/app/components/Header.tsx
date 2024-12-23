import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-4 px-6 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          StudentConnect
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="#features" className="text-gray-600 hover:text-blue-600">Features</Link>
          <Link href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</Link>
          <Link href="#" className="text-gray-600 hover:text-blue-600">About</Link>
        </nav>
        <div className="space-x-2">
          <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-100">Log in</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Sign up</button>
        </div>
      </div>
    </header>
  )
}

