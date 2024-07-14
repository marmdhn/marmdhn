import Image from "next/image";

const companies = [
  {
    src: "/images/companies/baituladab.svg",
    alt: "Otak Kanan",
    active: false,
  },
  {
    src: "/images/companies/comingsoon.svg",
    alt: "Coming Soon",
    active: false,
  },
  {
    src: "/images/companies/comingsoon.svg",
    alt: "Coming Soon",
    active: false,
  },
  {
    src: "/images/companies/comingsoon.svg",
    alt: "Coming Soon",
    active: false,
  },
];

const ClientSection = () => {
  return (
    <section className="text-center p-8 transition-all duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-8">
          My Clients for Business
        </h2>
        <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 p-8 bg-gradient-to-r from-secondary to-primary rounded-xl animate-gradient bg-[length:200%_200%]">
          {companies.map((company, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-center items-center p-4 bg-white bg-opacity-50 rounded-xl shadow-lg transition-all duration-200 ${
                company.active && "border-4 border-primary shadow-primary"
              } animate-rotate`}
            >
              {company.active && (
                <span className="absolute top-4 text-xl font-bold text-primary-dark animate-scale">
                  I&apos;m Here
                </span>
              )}
              <Image
                src={company.src}
                alt={company.alt}
                width={100}
                height={100}
                priority
                unoptimized
                className={`w-1/2 h-auto object-cover transition-all duration-200 hover:scale-110  ${
                  company.active ? "" : "grayscale hover:grayscale-0"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
