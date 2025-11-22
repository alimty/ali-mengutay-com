import PageLayout from "../components/PageLayout";
import Card from "../components/Card";

// Using Lorem Picsum for consistent placeholder images
const blogImages = [
  "https://picsum.photos/800/600?random=1", // Random image 1
  "https://picsum.photos/800/600?random=2", // Random image 2
  "https://picsum.photos/800/600?random=3", // Random image 3
  "https://picsum.photos/800/600?random=4", // Random image 4
];

export default function Blog() {
  return (
    <PageLayout title="Blog">
      <div className="grid--3-col">
        {/* Featured Post (spans 2 columns) */}
        <Card
          title="Getting Started with Next.js 13"
          subtitle="FEATURED POST • WEB DEVELOPMENT"
          href="/blog/nextjs-13"
          imagePath={blogImages[0]}
          className="card--featured"
        />

        {/* Regular Posts */}
        <Card
          title="Understanding TypeScript"
          subtitle="TYPESCRIPT • TUTORIAL"
          href="/blog/typescript"
          imagePath={blogImages[1]}
        />
        <Card
          title="React Best Practices"
          subtitle="REACT • TIPS"
          href="/blog/react-best-practices"
          imagePath={blogImages[2]}
        />
        <Card
          title="Modern CSS Techniques"
          subtitle="CSS • TUTORIAL"
          href="/blog/css-techniques"
          imagePath={blogImages[3]}
        />
      </div>
    </PageLayout>
  );
}
