import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import ProfilePhoto from "@/components/ProfilePhoto";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container h-full mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between md:pt-8 md:pb-24">
          <div className="text-center md:text-left order-2 md:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I'm <br />
              <span className="text-green-400">Vijay Das</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            Java developer with over 2 years of experience specializing in full-stack development. Led cross-
            functional teams of up to 10 members in delivering scalable solutions, resulting in a 60% improvement in
            application performance. Committed to continuous improvement, staying updated with the latest
            technologies.
            </p>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* button and social*/}
              <a 
              href="resume/Resume.pdf"
              download="vijay-resume.pdf"
              >
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 rounded-full"
              >
                <span className="">download cv</span>
                <FiDownload className="text-xl" />
              </Button>
              </a>
              <div className="mb-8 md:mb-0">
                <Social
                  containerStyle="flex gap-6"
                  iconStyle="w-9 h-9 border-2 border-accent rounded-full flex justify-center items-center 
                              text-accent text-base hover:bg-accent hover:text-primary 
                              hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 md:order-none mb-8 md:mb-0"> 
            <ProfilePhoto/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  );
};

export default Home;
