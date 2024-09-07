import React from "react";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container h-full mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Senior Software Engineer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br /> <span className="text-accent">Raghu S</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at creating digital experience and I am proficient in
              various programming languages and technologies.
            </p>
          </div>

          {/* photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
