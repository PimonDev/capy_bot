import Image from 'next/image';

interface FoodCardProps {
  name: string;
  description: string;
  imageSrc: string;
  alt: string;
}

export default function FoodCard({ name, description, imageSrc, alt }: FoodCardProps) {
  return (
    <div className="food-card" style={{ display: 'flex', alignItems: 'stretch' }}>
      <Image src={imageSrc} alt={alt} width={200} height={180} style={{ objectFit: 'cover', borderRadius: '12px 0 0 12px' }} />
      <div className="food-card-content" style={{ flex: 1, padding: '1.5rem' }}>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
