import { Box} from "@mui/material";
import HeroSection from "../components/HeroSection";

import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";
import EducationSection from "../components/EducationSection";
import Footer from "../components/Footer";

function PublicPage() {

    return (
        <Box>
            <HeroSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <EducationSection />
            <ContactSection />
            <Footer />
        </Box>
    );
}

export default PublicPage;
