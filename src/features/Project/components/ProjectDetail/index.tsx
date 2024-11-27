import Button from "@/components/Button";
import NotFoundPage from "@/pages/NotFoundPage";
import { useEffect, useState } from "react";
import { ProjectData } from "../../types/type";
import { ProjectEdit } from "../ProjectHeaderButton";
import Description from "./Description";
import Overview from "./Overview";
import { updateData } from "@/api/firebase-crud-api";
import { toast } from "react-toastify";

interface ProjectDetailProps {
  data: ProjectData;
}

const ProjectDetail = ({ data }: ProjectDetailProps) => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState<ProjectData>(data);

  console.log("ProjectDetail formData:", formData.docID);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  if (!data) return <NotFoundPage />;

  const handleEditMode = () => setEditMode((prev) => !prev);

  const handleUpdate = async () => {
    try {
      if (!formData.docID) {
        throw new Error("Document ID is required for update");
      }
      await updateData({
        collectionName: "projects",
        docID: formData.docID,
        formData,
      });
      toast.success("수정 성공"); // 성공 피드백
      setEditMode(false); // 수정 모드 종료
    } catch (error) {
      toast.error("수정 실패"); // 사용자에게 에러 메시지 표시
      console.error("Error in handleUpdate:", error); // 디버깅을 위한 에러 로그
    }
  };

  return (
    <>
      <ProjectEdit
        formData={formData}
        editMode={editMode}
        onToggleEditMode={handleEditMode}
      />
      <Overview
        formData={formData}
        editMode={editMode}
        setFormData={setFormData}
      />
      <Description
        formData={formData}
        editMode={editMode}
        setFormData={setFormData}
      />

      {editMode && (
        <div className="sticky bottom-2 w-full max-w-screen-xl">
          <Button
            label="저장하기"
            width="w-full"
            mt="mt-4"
            onClick={handleUpdate}
          />
        </div>
      )}
    </>
  );
};

export default ProjectDetail;
