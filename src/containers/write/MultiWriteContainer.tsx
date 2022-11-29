import { Btn, Editor, SideBar } from "@/components/common";
import useContents from "@/libs/hooks/useContents";
import ContentsTemplate from "@/templates/ContentsTemplate";
import { useEffect } from "react";
import { MdOutlineShare } from "react-icons/md";
import MultiItemContainer from "./MultiItemContainer";

const MultiWriteContainer = () => {
  const [contents, language, , , onChange] = useContents();

  return (
    <ContentsTemplate
      multiZone={<MultiItemContainer />}
      button={<Btn icon={<MdOutlineShare />} text="SHARE" />}
    >
      <SideBar type="write" />
      <Editor content={contents} language={language} onChange={onChange} />
    </ContentsTemplate>
  );
};
export default MultiWriteContainer;
