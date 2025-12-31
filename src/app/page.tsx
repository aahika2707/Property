import CampusSection from "@/components/sections/home/CampusSection";
import CourseSection from "@/components/sections/home/CourseSection";
import FacultySection from "@/components/sections/home/FacultySection";
import HeroSection from "@/components/sections/home/HeroSection";
import StudentSection from "@/components/sections/home/StudentSection";
import PropertySection from "@/components/sections/home/ProductSection"
import { Fragment } from "react";

const Home = async () => {

  return (
    <Fragment>
      <HeroSection />
      <CourseSection />
      <CampusSection />
      <FacultySection />
      <StudentSection />
    </Fragment>
  );
};

export default Home;
