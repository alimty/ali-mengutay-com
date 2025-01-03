import PageLayout from "../components/PageLayout";
import Card from "../components/Card";

// Using Lorem Picsum for shop product images
const shopImages = [
  "https://picsum.photos/800/600?random=20", // Featured product
  "https://picsum.photos/800/600?random=21",
  "https://picsum.photos/800/600?random=22",
  "https://picsum.photos/800/600?random=23",
];

export default function Shop() {
  return (
    <PageLayout title="Shop">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Featured Product */}
        <Card
          title="Premium Course Bundle"
          subtitle="FEATURED • $99"
          href="/shop/premium-bundle"
          imagePath={shopImages[0]}
          className="col-span-full md:col-span-2"
        />

        {/* Regular Products */}
        <Card
          title="React Fundamentals"
          subtitle="COURSE • $49"
          href="/shop/react-fundamentals"
          imagePath={shopImages[1]}
        />
        <Card
          title="TypeScript Guide"
          subtitle="EBOOK • $29"
          href="/shop/typescript-guide"
          imagePath={shopImages[2]}
        />
        <Card
          title="Web Development Tools"
          subtitle="RESOURCES • $19"
          href="/shop/dev-tools"
          imagePath={shopImages[3]}
        />
      </div>
    </PageLayout>
  );
}
