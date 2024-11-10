import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import Project from "@/components/project/Project";
import { projectData } from "@/data/projectData";

const ProjectPage = () => {
  const props = {
    title: "소개",
    subtitle: "✨ 서브타이틀",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <Project projectData={projectData} />
      </SectionWrapper>
    </PageLayout>
  );
};

export default ProjectPage;
