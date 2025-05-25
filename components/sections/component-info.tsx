import { useId } from "react";
import { SquareParking, Trash2, ShieldCheck, Car, Mic2Icon, BookOpenCheck, Gamepad2, LucideImages } from "lucide-react";

const grid = [
  {
    icon: Mic2Icon,
    title: "Fluency and Pronunciation Assesment",
    description:
      "Develop a comprehensive assistant tool that helps primary school students in Sri Lanka improve their English speaking fluency and pronunciation by providing real-time feedback and personalized practice."
  },
  {
    icon: BookOpenCheck,
    title: "Question Generation and Answering with Difficulty Adjustment",
    description:
      "Develop a system that evaluates text passages and creates questions that are in line with the Sri Lankan curriculum based on dynamically changing difficulty levels which depend on students' performance."
  },
  {
    icon: Gamepad2,
    title: "Vocabulary Building Game and Kids Tube Integration",
    description:
      "Improve children's language skills through interactive vocabulary games and curated educational video content."
  },
  {
    icon: LucideImages,
    title: "Image Generation with Real-Time Grammar and Comprehension Feedback",
    description:
      "Develop a system that uses image generation and NLP to improve reading and comprehension skills, as well as the ability to identify objects for students in grades 3, 4, and 5 by providing interactive and engaging learning experiences."
  },
];

const ComponentInfo = () => {
  return (
    <div className="my-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-6 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <div className="relative z-20 flex flex-col items-start">
              <feature.icon className="h-8 w-8 mb-4 text-emerald-500" />
              <h3 className="font-bold text-neutral-800 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentInfo;

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p =
    pattern ??
    Array.from({ length: 5 }, () => [
      Math.floor(Math.random() * 4) + 7,
      Math.floor(Math.random() * 6) + 1,
    ]);
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: number[], index: number) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}-${index}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
