import PortfolioSection from "@/app/projects/PortfolioSection";

const Projects = () => {
  return (
    <div className="max-w-7xl px-8 xl:px-0 mx-auto py-10 h-full">
      <div className="text-center mb-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold text-primary mt-4">Marmdhn</h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold">
            Personal Website Portfolio.
          </p>
        </div>
      </div>
      <PortfolioSection />
    </div>
  );
};

export default Projects;
