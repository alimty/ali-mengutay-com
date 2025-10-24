import PageLayout from "../components/PageLayout";
import Card from "../components/Card";

export default function About() {
  return (
    <PageLayout title="About">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Bio Card */}
        <Card
          title={
            <span>
              <span className="font-normal text-gray-300">Hi, I&apos;m</span>{" "}
              <span className="font-bold">Ali Mengütay</span>
            </span>
          }
          subtitle="SOFTWARE ENGINEER (Former Mechanical Engineer)"
          href="#"
          className="col-span-full md:col-span-2"
          imagePath="/images/profile.webp"
        >
          <p className="text-gray-300 mt-2">Software Engineer at Pix4D</p>
        </Card>

        {/* Family Cards */}
        <Card
          title="Arya Mengütay"
          subtitle="MY DAUGHTER"
          href="#"
          className="md:col-span-1"
          imagePath="/images/arya.webp"
        />

        <Card
          title="Mir Mustafa Mengütay"
          subtitle="MY SON"
          href="#"
          className="md:col-span-1"
          imagePath="/images/mmm.png"
        />

        {/* Quick Links */}
        <Card
          title="Connect"
          subtitle="SOCIAL LINKS"
          href="/contact"
          className="md:col-span-1"
        />

        {/* Skills Section */}
        <Card
          title="Skills"
          subtitle="TECHNOLOGIES"
          href="/resume"
          className="md:col-span-3"
        />
      </div>
    </PageLayout>
  );
}
