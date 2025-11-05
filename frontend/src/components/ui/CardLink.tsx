import { Link } from "react-router-dom";
import type { IconType } from "react-icons";

export type Tone = "primary" | "success" | "purple";

const toneBg: Record<Tone, string> = {
  primary: "bg-blue-600", // Blazor .bg-primary
  success: "bg-green-700", // Blazor .bg-success
  purple: "bg-brand-purple",
};

type Props = {
  to: string;
  title: string;
  description: string;
  Icon: IconType;
  tone: Tone;
};

export default function CardLink({
  to,
  title,
  description,
  Icon,
  tone,
}: Props) {
  return (
    <Link to={to} className="block h-full">
      <div
        className="
flex flex-col justify-stretch min-h-[200px] w-full cursor-pointer
rounded-lg bg-white border shadow-sm border-slate-200
transition-[box-shadow,border-color,ring] duration-200
hover:ring-2 hover:ring-yellow-400 hover:shadow-(--shadow-card)
"
        aria-label={title}
      >
        <div className="flex items-center gap-3 p-4">
          <div className={`rounded p-2 text-white ${toneBg[tone]}`}>
            <Icon className="w-8 h-8" aria-hidden />
          </div>
          <div className="grow">
            <div className="font-semibold text-slate-900">{title}</div>
          </div>
        </div>
        <div className="p-4 text-slate-500">{description}</div>
      </div>
    </Link>
  );
}
