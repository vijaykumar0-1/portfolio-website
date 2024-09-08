import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import ProfilePhoto from "@/components/ProfilePhoto";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container h-full mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between md:pt-8 md:pb-24">
          <div className="text-center md:text-left order-2 md:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I'm <br />
              <span className="text-green-400">Vijay Kumar Das</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* button and social*/}
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 rounded-full"
              >
                <span className="">download</span>
                <FiDownload className="text-xl" />
              </Button>
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
    </section>
  );
};

export default Home;
