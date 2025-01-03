import PageLayout from "../components/PageLayout";
import Card from "../components/Card";

export default function About() {
  return (
    <PageLayout title="About">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Bio Card - spans 2 columns */}
        <Card
          title="Hi, I'm Ali"
          subtitle="SOFTWARE DEVELOPER"
          href="#"
          className="col-span-full md:col-span-2"
          imagePath="/images/profile.webp"
        />

        {/* Quick Links */}
        <Card title="Connect" subtitle="SOCIAL LINKS" href="/contact" />

        {/* Skills Section */}
        <Card
          title="Skills"
          subtitle="TECHNOLOGIES"
          href="/resume"
          className="md:col-span-2"
        />

        {/* Experience Preview */}
        <Card title="Experience" subtitle="WORK HISTORY" href="/resume" />
      </div>
    </PageLayout>
  );
}
