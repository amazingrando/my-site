interface SkillsCardProps {
  title: string;
  description: string;
  subhead?: string;
  className?: string;
}

export default function SkillsCard({ title, description, className }: SkillsCardProps) {
  return (
    <div className={`bg-blue-800 p-6 space-y-4 ${className || ''}`}>
      <h3 className="text-2xl lg:text-3xl font-semibold text-balance">{title}</h3>
      <p className="text-sm lg:text-xl font-medium text-blue-200">{description}</p>
    </div>
  );
} 