import React from 'react';

const Cards: React.FC = () => {
  const Card: React.FC<{ icon: React.ReactNode; title: string; subtitle: string; size: 'small' | 'medium' | 'large' | 'xlarge' }> = ({ icon, title, subtitle, size }) => {
    let sizeClasses = '';

    switch (size) {
      case 'small':
        sizeClasses = 'col-span-1 row-span-1';
        break;
      case 'medium':
        sizeClasses = 'col-span-1 row-span-2';
        break;
      case 'large':
        sizeClasses = 'col-span-2 row-span-2';
        break;
      case 'xlarge':
        sizeClasses = 'col-span-2 row-span-3';
        break;
      default:
        sizeClasses = 'col-span-1 row-span-1';
    }

    return (
      <div className={`bg-gray-700 bg-opacity-50 p-6 rounded-lg flex flex-col justify-between ${sizeClasses}`}>
        <div className="flex items-center space-x-4">
          <div className="text-4xl">
            {icon}
          </div>
          <div>
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-gray-300">{subtitle}</p>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="text-yellow-400 hover:underline flex items-center">
            <span>Learn More</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card size="large" icon={<span>👤</span>} title="Hey, I'm Andrew" subtitle="A senior UX Designer at Revolution" />
      <Card size="medium" icon={<span>📄</span>} title="See my resume" subtitle="Learn more about me" />
      <Card size="small" icon={<span>📱</span>} title="Fitt" subtitle="Mobile App" />
      <Card size="small" icon={<span>🎵</span>} title="Jukerr" subtitle="Mobile App" />
      <Card size="small" icon={<span>🐦</span>} title="Twitter" subtitle="Social Media" />
      <Card size="small" icon={<span>🌀</span>} title="Rotation" subtitle="Branding" />
      <Card size="xlarge" icon={<span>✨</span>} title="Get in touch now" subtitle="Let's work together" />
      <Card size="medium" icon={<span>🖌️</span>} title="Web, Visual, Branding" subtitle="What I Do" />
    </div>
  );
};

export default Cards;
