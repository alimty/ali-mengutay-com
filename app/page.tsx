import Card from "./components/Card";

export default function Home() {
  return (
    <main className="page-layout">
      <div className="page-layout__container">
        <div className="bento-grid">
          {/* Profile Card (larger size) */}
          <Card
            title={
              <span>
                <span className="card__title-normal">Hey, I&apos;m</span>{" "}
                <span className="text-bold">Ali</span> <span>👋</span>
              </span>
            }
            subtitle="Software Engineer (Former Mechanical Engineer)"
            href="/about"
            imagePath="/images/profile.webp"
            className="card--featured"
          />

          <Card
            title="Contact"
            subtitle="LET'S TALK"
            imagePath="/images/contact.webp"
            href="/contact"
          />

          <Card
            title="See my resume"
            subtitle="LEARN MORE ABOUT ME"
            imagePath="/images/resume.webp"
            href="/resume"
          />
          <Card
            title="Projects"
            subtitle="CHECK OUT MY WORK"
            imagePath="/images/projects.webp"
            href="/projects"
          />
          <Card
            title="Blog"
            subtitle="READ MY THOUGHTS"
            imagePath="/images/blog.webp"
            href="/blog"
          />
          <Card
            title="Shop"
            subtitle="CHECK OUT MY STORE"
            imagePath="/images/shop.webp"
            href="/shop"
          />
        </div>
      </div>
    </main>
  );
}
