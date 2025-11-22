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
      <div className="grid--2-col grid--gap-6">
        {/* Experience Section - Full Width */}
        <Card
          title="Experience"
          subtitle="CAREER JOURNEY"
          href="#"
          imagePath={resumeImages[0]}
          className="card--full-width"
        >
          <div className="resume-content">
            <div className="resume-item">
              <h3 className="resume-item__title">Software Developer</h3>
              <p className="resume-item__meta">2022 - Present</p>
              <ul className="resume-item__list">
                <li>
                  Developing web applications using Python Django and Next.js
                </li>
                <li>Building RESTful APIs and integrating with frontend</li>
                <li>Implementing responsive designs with modern CSS</li>
              </ul>
            </div>
            <div className="resume-item">
              <h3 className="resume-item__title">Mechanical Engineer</h3>
              <p className="resume-item__meta">Previous Experience</p>
              <ul className="resume-item__list">
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
          <div className="skill-badge-container">
            {[
              "Python",
              "Django",
              "Next.js",
              "TypeScript",
              "CSS",
              "PostgreSQL",
              "Git",
              "REST APIs",
            ].map((skill) => (
              <span key={skill} className="skill-badge">
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
          <div className="resume-content">
            <h3 className="resume-item__title">Mechanical Engineering</h3>
            <p className="resume-item__meta">Bachelor&apos;s Degree</p>
            <p className="resume-item__text">
              Transitioned from mechanical engineering to software development,
              bringing analytical and problem-solving skills to web development.
            </p>
          </div>
        </Card>
      </div>

      {/* Download Resume Button */}
      <div className="mt-6">
        <a href="/resume.pdf" className="button">
          Download Resume
        </a>
      </div>
    </PageLayout>
  );
}
