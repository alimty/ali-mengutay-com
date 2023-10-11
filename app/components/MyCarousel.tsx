"use client"; // This is a client component
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
// import sanityClient from '@sanity/client';

// Comment out the Sanity client initialization
// const client = sanityClient({
//   projectId: 'your_project_id',
//   dataset: 'your_dataset',
// });

const MyCarousel: React.FC = () => {
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    // Comment out the fetch from Sanity
    // const fetchImages = async () => {
    //   const data = await client.fetch('*[_type == "imageType"]');
    //   setImages(data);
    // };

    // fetchImages();
  }, []);

  return (
    <Carousel>
      {images.map((image, index) => (
        <div key={index}>
          <Image
            src="/path/to/your/image.jpg"
            alt="Description"
            width={500}
            height={300}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
