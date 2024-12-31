import React from "react";
import Link from "next/link";
interface ProgressBarProps {
  progress: { color: string; width: string }[];
}

interface ModuleLinkProps {
  href: string;
  title: string;
  description: string;
  status?: string;
  statusColor?: string;
  extraContent?: React.ReactNode;
  isCurrent?: boolean;
}

// Reusable ProgressBar Component
const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => (
  <div className="overflow-hidden h-2 text-xs flex items-center bg-gray-200 rounded-full w-24 dark:bg-gray-700">
    {progress.map((bar, index) => (
      <div
        key={index}
        className={`h-2 ${bar.color} dark:${bar.color}-800`}
        style={{ width: bar.width }}
      />
    ))}
  </div>
);

// Reusable ModuleLink Component
const ModuleLink: React.FC<ModuleLinkProps> = ({
  href,
  title,
  description,
  status,
  statusColor,
  extraContent,
  isCurrent = false,
}) => (
  <span
    className={`relative block before:content-[''] before:absolute before:w-0.5 before:block before:left-[calc(-1px-1.75rem)] before:top-0 before:bottom-0 min-[768px]:before:left-[calc(-1px-3rem)] before:bg-muted dark:before:bg-muted after:border-[#3ad353] after:border-2 after:bg-[#3ad353] min-[768px]:after:left-[calc(-8px-3rem)] after:left-[calc(-8px-1.85rem)] after:top-[calc(-8px+1.5rem)] after:w-[16px] after:h-[16px] after:content-[''] after:absolute after:rounded-full after:z-10 ${
      isCurrent && "after:scale-125"
    }`}
  >
    <Link
      href={href}
      className={`before:content-[''] before:left-[calc(-9px-1.75rem)] before:top-[calc(-9px+1.5rem)] before:h-[18px] before:w-[18px] before:absolute  before:rounded-full md:before:left-[calc(-9px-3rem)]  transition-transform  before:bg-[#3ad353] before:opacity-100  ${
        isCurrent
          ? "before:animate-ping motion-reduce:before:hidden"
          : "before:hidden"
      }`}
    >
      <div className="transition-all ease-in-out duration text-[rgba(31,41,55,var(--tw-text-opacity))] text-xl leading-6 py-3 group">
        <p className="text-foreground dark:text-primary-foreground transition mb-1 flex items-center">
          <span className="mr-2 inline-flex items-end">{title}</span>
        </p>
        {status && (
          <p
            className={`text-sm flex items-center leading-4 mb-1 ${statusColor}`}
          >
            {extraContent}
            <span className="ml-1  text-green-700 dark:text-green-400">
              {status}
            </span>
          </p>
        )}
        <p className="block text-sm  leading-5">
          {description}
          <br />
        </p>
      </div>
    </Link>
  </span>
);

// Reusable SectionHeader Component
const SectionHeader: React.FC = () => (
  <div className="flex-1 md:text-right pr-12 group">
    <h2 className="text-2xl font-semibold leading-6 py-3 text-foreground dark:text-primary-foreground   ">
      Getting Started
    </h2>
    <div className="leading-6 py-3 text-muted-foreground justify-end flex">
      <div className="flex items-center">
        <ProgressBar
          progress={[
            { color: "bg-green-500", width: "0%" },
            { color: "bg-yellow-300", width: "0%" },
            { color: "bg-blue-500", width: "0%" },
          ]}
        />
        <span className="ml-1 text-sm font-semibold">0/15</span>
      </div>
    </div>
    <p className="md:max-w-sm md:ml-auto text-gray-400 dark:text-gray-500 dark:group-hover:text-dark-med-emphasis group-hover:text-gray-600 transition" />
  </div>
);

// Main Component
const SyllabusTemplate: React.FC = () => {
  return (
    <div className="m-1 min-[768px]:flex-row flex flex-col">
      <SectionHeader />
      <div className="flex-1 pl-12">
        <ModuleLink
          href="/bronze/time-comp"
          title="Time Complexity"
          description="Measuring the number of operations an algorithm performs."
        />
        <ModuleLink
          href="/bronze/intro-ds"
          title="Introduction to Data Structures"
          description="What a data structure is, (dynamic) arrays, pairs, and tuples."
        />
        <ModuleLink
          href="/bronze/simulation"
          title="Simulation"
          description="Directly simulating the problem statement."
          status="Very Frequent"
          statusColor="text-green-600"
          isCurrent={true}
          extraContent={
            <>
              <svg
                className="mr-0.5 h-2.5 w-2.5  text-green-600 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 8 8"
              >
                <circle cx={4} cy={4} r={3} />
              </svg>
              <svg
                className="mr-0.5 h-2.5 w-2.5  text-green-600 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 8 8"
              >
                <circle cx={4} cy={4} r={3} />
              </svg>
              <svg
                className="mr-0.5 h-2.5 w-2.5  text-green-600 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 8 8"
              >
                <circle cx={4} cy={4} r={3} />
              </svg>
              <svg
                className="mr-0.5 h-2.5 w-2.5  text-green-600 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 8 8"
              >
                <circle cx={4} cy={4} r={3} />
              </svg>
            </>
          }
        />
      </div>
    </div>
  );
};
