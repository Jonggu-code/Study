import Button from "./Button";

type CardProps = {
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
};

export default function Card({
  title,
  description,
  buttonText = "Action",
  onButtonClick,
}: CardProps) {
  return (
    <div className="bg-surface rounded-[var(--radius)] shadow p-6 space-y-3">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <Button variant="primary" onClick={onButtonClick}>
        {buttonText}
      </Button>
    </div>
  );
}
