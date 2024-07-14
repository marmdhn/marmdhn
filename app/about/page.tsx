import AboutMeSection from "@/app/about/AboutMeSection";
import ExperienceSection from "@/app/about/ExperienceSection";

const About = () => {
  return (
    <div className="max-w-7xl px-8 xl:px-0 mx-auto py-10 h-full">
      <div className="text-center mb-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold text-primary mt-4">About Me</h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold">
            marmdhn.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <AboutMeSection />
        <ExperienceSection />
      </div>
    </div>
  );
};

export default About;
