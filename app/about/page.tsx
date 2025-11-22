import PageLayout from "../components/PageLayout";
import Card from "../components/Card";

export default function About() {
  return (
    <PageLayout title="About">
      <div className="grid--3-col">
        {/* Bio Card */}
        <Card
          title={
            <span>
              <span className="card__title-normal">Hi, I&apos;m</span>{" "}
              <span className="text-bold">Ali Mengütay</span>
            </span>
          }
          subtitle="SOFTWARE ENGINEER (Former Mechanical Engineer)"
          href="#"
          className="card--span-2-md"
          imagePath="/images/profile.webp"
        >
          <p className="text-tertiary mt-2">Software Engineer at Pix4D</p>
        </Card>

        {/* Family Cards */}
        <Card
          title="Arya Mengütay"
          subtitle="MY DAUGHTER"
          href="#"
          imagePath="/images/arya.webp"
        />

        <Card
          title="Mir Mustafa Mengütay"
          subtitle="MY SON"
          href="#"
          imagePath="/images/mmm.png"
        />

        {/* Quick Links */}
        <Card title="Connect" subtitle="SOCIAL LINKS" href="/contact" />

        {/* Skills Section */}
        <Card
          title="Skills"
          subtitle="TECHNOLOGIES"
          href="/resume"
          className="card--span-3-md"
        />
      </div>
    </PageLayout>
  );
}
