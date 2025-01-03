import PageLayout from "../components/PageLayout";
import Card from "../components/Card";

// Using more relevant Picsum IDs for specific images
const resumeImages = [
  "https://picsum.photos/id/0/800/600", // Laptop/Tech image
  "https://picsum.photos/id/180/800/600", // Code/Development
  "https://picsum.photos/id/160/800/600", // Engineering/Technical
];

export default function Resume() {
  return (
    <PageLayout title="Resume">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Experience Section - Full Width */}
        <Card
          title="Experience"
          subtitle="CAREER JOURNEY"
          href="#"
          imagePath={resumeImages[0]}
          className="col-span-full"
        >
          <div className="mt-4 space-y-4 text-gray-300">
            <div>
              <h3 className="text-white font-semibold">Software Developer</h3>
              <p className="text-sm text-gray-400">2022 - Present</p>
              <ul className="list-disc list-inside mt-2 text-sm">
                <li>
                  Developing web applications using Python Django and Next.js
                </li>
                <li>Building RESTful APIs and integrating with frontend</li>
                <li>Implementing responsive designs with Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold">Mechanical Engineer</h3>
              <p className="text-sm text-gray-400">Previous Experience</p>
              <ul className="list-disc list-inside mt-2 text-sm">
                <li>Designed and analyzed mechanical systems</li>
                <li>Project management and team coordination</li>
                <li>Transitioned to software development</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Skills Section */}
        <Card
          title="Technical Skills"
          subtitle="TECHNOLOGIES & TOOLS"
          href="#"
          imagePath={resumeImages[1]}
        >
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              "Python",
              "Django",
              "Next.js",
              "TypeScript",
              "Tailwind",
              "PostgreSQL",
              "Git",
              "REST APIs",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-[#212224] rounded-full text-sm text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>

        {/* Education Section */}
        <Card
          title="Education"
          subtitle="ACADEMIC BACKGROUND"
          href="#"
          imagePath={resumeImages[2]}
        >
          <div className="mt-4 text-gray-300">
            <h3 className="text-white font-semibold">Mechanical Engineering</h3>
            <p className="text-sm text-gray-400">Bachelor's Degree</p>
            <p className="mt-2 text-sm">
              Transitioned from mechanical engineering to software development,
              bringing analytical and problem-solving skills to web development.
            </p>
          </div>
        </Card>
      </div>

      {/* Download Resume Button */}
      <div className="mt-6">
        <a
          href="/resume.pdf"
          className="inline-flex items-center px-6 py-3 bg-[#FFC148] text-black rounded-xl font-medium hover:bg-[#FFD577] transition-colors"
        >
          Download Resume
        </a>
      </div>
    </PageLayout>
  );
}
