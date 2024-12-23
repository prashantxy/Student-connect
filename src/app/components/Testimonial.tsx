const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Computer Science Student',
      content: 'StudentConnect helped me land my dream internship! The networking opportunities are unparalleled.',
      avatar: '/placeholder.svg?height=40&width=40'
    },
    {
      name: 'Michael Chen',
      role: 'Business Administration Student',
      content: 'I\'ve learned so much from the community and resources on StudentConnect. It\'s been invaluable for my career growth.',
      avatar: '/placeholder.svg?height=40&width=40'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Engineering Student',
      content: 'The global community on StudentConnect has broadened my perspective and opened up incredible opportunities.',
      avatar: '/placeholder.svg?height=40&width=40'
    }
  ]
  
  export default function Testimonials() {
    return (
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  