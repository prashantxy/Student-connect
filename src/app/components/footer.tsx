import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-primary">About Us</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary">Careers</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary">Press</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-primary">Blog</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary">Help Center</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary">Community</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-primary">Twitter</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary">Facebook</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary">LinkedIn</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">&copy; 2023 StudentConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

