import PageLayout from "../components/PageLayout";
import Card from "../components/Card";

// Using Lorem Picsum for project images
const projectImages = [
  "https://picsum.photos/800/600?random=10", // Different random seeds
  "https://picsum.photos/800/600?random=11",
  "https://picsum.photos/800/600?random=12",
  "https://picsum.photos/800/600?random=13",
];

export default function Projects() {
  return (
    <PageLayout title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card
          title="Note on browser tab"
          subtitle="A COOL WEB APP"
          href="/projects/project1"
          imagePath={projectImages[0]}
          className="col-span-full" // Featured project spans full width
        />
        <Card
          title="Project 2"
          subtitle="MOBILE APPLICATION"
          href="/projects/project2"
          imagePath={projectImages[1]}
        />
        <Card
          title="Project 3"
          subtitle="UI/UX DESIGN"
          href="/projects/project3"
          imagePath={projectImages[2]}
        />
        <Card
          title="Project 4"
          subtitle="FULL STACK APP"
          href="/projects/project4"
          imagePath={projectImages[3]}
        />
      </div>
    </PageLayout>
  );
}
