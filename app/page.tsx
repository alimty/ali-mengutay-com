import Card from "./components/Card";

export default function Home() {
  return (
    <main className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Profile Card (larger size) */}
          <Card
            title={
              <span>
                <span className="font-normal text-gray-300">Hey, I&apos;m</span>{" "}
                <span className="font-bold">Ali</span> <span>👋</span>
              </span>
            }
            subtitle="Software Engineer (Former Mechanical Engineer)"
            href="/about"
            imagePath="/images/profile.webp"
            className="col-span-full md:col-span-2"
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
