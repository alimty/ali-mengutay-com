interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function PageLayout({ children, title }: PageLayoutProps) {
  return (
    <main className="page-layout">
      <div className="page-layout__container">
        <h1 className="page-layout__title">{title}</h1>
        {children}
      </div>
    </main>
  );
}
