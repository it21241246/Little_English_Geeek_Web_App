import { useId } from "react";
import { SquareParking, Trash2, ShieldCheck, Car } from "lucide-react";

const grid = [
  {
    icon: ShieldCheck,
    title: "Surveillance Enhancement",
    description:
      "Implement advanced surveillance systems with real-time threat detection capabilities, improving public safety through intelligent monitoring and rapid response mechanisms.",
  },
  {
    icon: Trash2,
    title: "Smart Waste Management",
    description:
      "Develop smart waste management solutions using computer vision for efficient sorting, collection optimization, and environmental impact reduction in urban areas.",
  },
  {
    icon: Car,
    title: "Special Accident Detection",
    description:
      "Create a robust system for detecting and responding to special accidents on motorways, including accidents and emergency vehicle presence, ensuring quick response times.",
  },
  {
    icon: SquareParking,
    title: "Vehicle Parking Management",
    description:
      "Develop an efficient system for managing vehicle parking, including real-time monitoring, automated counting, and integrated billing solutions for improved urban parking management.",
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
