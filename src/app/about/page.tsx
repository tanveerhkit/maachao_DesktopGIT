import MainLayout from "@/components/layout/MainLayout";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "About Us | MaaChao",
  description: "Learn about MaaChao - your one-stop destination for celebrations. Discover our story, mission, values, and the team behind our celebration services.",
};

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Founder & CEO",
    bio: "With over 15 years of experience in event planning, Sarah founded MaaChao with a vision to make celebrations accessible, beautiful, and stress-free for everyone.",
    image: "/images/team/sarah.jpg" // Placeholder - would be replaced with actual image
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Head of Cake Design",
    bio: "A pastry chef with international training, Michael brings artistry and innovation to our cake designs, ensuring each creation is both beautiful and delicious.",
    image: "/images/team/michael.jpg" // Placeholder
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Lead Decorator",
    bio: "Priya's eye for aesthetics and attention to detail transforms ordinary spaces into extraordinary settings for celebrations of all kinds.",
    image: "/images/team/priya.jpg" // Placeholder
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Head Photographer",
    bio: "With a background in fine arts and photojournalism, James captures the authentic emotions and special moments that make each celebration unique.",
    image: "/images/team/james.jpg" // Placeholder
  },
  {
    id: 5,
    name: "Aisha Rahman",
    role: "Lead Makeup Artist",
    bio: "Trained in both traditional and modern techniques, Aisha specializes in creating looks that enhance natural beauty and make clients feel confident on their special day.",
    image: "/images/team/aisha.jpg" // Placeholder
  },
  {
    id: 6,
    name: "David Lopez",
    role: "Gift Curator",
    bio: "David's knack for finding the perfect gift for any occasion comes from his background in retail merchandising and his passion for thoughtful gift-giving.",
    image: "/images/team/david.jpg" // Placeholder
  }
];

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Section variant="accent" padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About MaaChao</h1>
          <p className="text-xl mb-8">
            Your one-stop destination for making every celebration special, memorable, and stress-free.
          </p>
        </div>
      </Section>

      {/* Our Story Section */}
      <Section padding="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4">
              <p>
                MaaChao was born from a simple idea: celebrations should be joyful, not stressful. Our founder, Sarah Johnson, noticed that while planning celebrations should be exciting, it often became overwhelming for many people.
              </p>
              <p>
                In 2015, she started MaaChao as a small cake shop. As clients repeatedly asked for help with other aspects of their celebrations, we expanded our services to include decorations, gifts, makeup artistry, and photography.
              </p>
              <p>
                Today, MaaChao has grown into a comprehensive celebration service provider, helping thousands of clients create memorable moments without the stress of coordinating multiple vendors.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            {/* Placeholder for company image */}
            <div className="bg-gray-200 h-96 w-full flex items-center justify-center">
              <p className="text-gray-500 text-lg">[Company Story Image]</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Values Section */}
      <Section variant="primary" padding="xl">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Mission & Values</h2>
          <p className="text-xl">
            We're dedicated to making every celebration special, personalized, and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card variant="elevated">
            <Card.Header>
              <Card.Title>Quality</Card.Title>
            </Card.Header>
            <Card.Content>
              <p>
                We never compromise on quality. From the ingredients in our cakes to the equipment used by our photographers, we ensure everything meets our high standards.
              </p>
            </Card.Content>
          </Card>

          <Card variant="elevated">
            <Card.Header>
              <Card.Title>Personalization</Card.Title>
            </Card.Header>
            <Card.Content>
              <p>
                We believe every celebration should reflect the unique personality and preferences of our clients. We take the time to understand your vision and bring it to life.
              </p>
            </Card.Content>
          </Card>

          <Card variant="elevated">
            <Card.Header>
              <Card.Title>Reliability</Card.Title>
            </Card.Header>
            <Card.Content>
              <p>
                When you're planning an important celebration, you need vendors you can count on. We pride ourselves on being dependable, punctual, and consistent in everything we do.
              </p>
            </Card.Content>
          </Card>
        </div>
      </Section>

      {/* Team Section */}
      <Section padding="xl">
        <Section.Header
          title="Meet Our Team"
          description="The passionate professionals behind MaaChao's celebration services."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {teamMembers.map((member) => (
            <Card key={member.id} variant="elevated">
              <div className="aspect-w-1 aspect-h-1 w-full">
                {/* Placeholder for team member image */}
                <div className="bg-gray-200 w-full h-64 flex items-center justify-center">
                  <p className="text-gray-500">[{member.name}'s Photo]</p>
                </div>
              </div>
              <Card.Content>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </Card.Content>
            </Card>
          ))}
        </div>
      </Section>

      {/* Achievements Section */}
      <Section variant="secondary" padding="xl" className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Achievements</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Best Local Business Award (2022)</h3>
                <p className="text-gray-600">
                  Recognized for our contribution to the local community and exceptional customer service.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Excellence in Cake Design (2021)</h3>
                <p className="text-gray-600">
                  Our cake design team won first place in the regional cake design competition.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">5,000+ Celebrations Served</h3>
                <p className="text-gray-600">
                  We've helped create memorable moments for over 5,000 celebrations since our founding.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Sustainable Business Certification (2023)</h3>
                <p className="text-gray-600">
                  Recognized for our commitment to environmentally friendly practices and sustainable sourcing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Join Our Team Section */}
      <Section padding="xl" className="bg-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl">
            Passionate about making celebrations special? We're always looking for talented individuals to join our team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Current Openings</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Junior Cake Designer
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Event Coordinator
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Assistant Photographer
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Customer Service Representative
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Benefits of Working With Us</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Competitive salary and benefits
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Professional development opportunities
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Creative and collaborative work environment
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Flexible work arrangements
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Button variant="primary" size="lg">
            View All Job Openings
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="accent" padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make Your Celebration Special?</h2>
          <p className="text-xl mb-8">
            Contact us today to discuss how we can help with your next celebration.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" size="lg" href="/contact">
              Contact Us
            </Button>
            <Button variant="outline" size="lg" href="/services">
              Explore Our Services
            </Button>
          </div>
        </div>
      </Section>
    </MainLayout>
  );
}