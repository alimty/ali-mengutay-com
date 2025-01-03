interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function PageLayout({ children, title }: PageLayoutProps) {
  return (
    <main className="p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white text-3xl mb-6">{title}</h1>
        {children}
      </div>
    </main>
  );
}
