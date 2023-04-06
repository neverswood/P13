import './FeatureItem.scss';

type FeatureItemProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

export function FeatureItem({
  src,
  alt,
  title,
  description,
}: FeatureItemProps) {
  return (
    <div className="feature-item">
      <img src={src} alt={alt} className="feature-item__icon" />
      <h3 className="feature-item__title">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
