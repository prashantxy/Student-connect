import { Users, BookOpen, Briefcase, Globe } from 'lucide-react'

const features = [
  {
    title: 'Connect with Peers',
    description: 'Build a network with fellow students from your university and beyond.',
    icon: Users
  },
  {
    title: 'Discover Opportunities',
    description: 'Find internships, part-time jobs, and career opportunities tailored for students.',
    icon: Briefcase
  },
  {
    title: 'Learn and Grow',
    description: 'Access exclusive educational content and skill-building resources.',
    icon: BookOpen
  },
  {
    title: 'Global Community',
    description: 'Connect with students worldwide and expand your horizons.',
    icon: Globe
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose StudentConnect?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <feature.icon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

