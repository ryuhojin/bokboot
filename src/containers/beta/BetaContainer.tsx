import Btn from "@/components/common/Btn";
import Editor from "@/components/common/Editor";
import SideBar from "@/components/common/SideBar";
import { useContent, useMulti } from "@/libs/hooks";
import ContentTemplate from "@/templates/ContentTemplate";
import ContentsTemplate from "@/templates/ContentsTemplate";
import { MdOutlineShare } from "react-icons/md";

const BetaContainer = () => {
  const [content, language, onChange] = useContent("");
  const [multiMode] = useMulti();
  return !multiMode ? (
    <ContentTemplate button={<Btn icon={<MdOutlineShare />} text="SHARE" />}>
      <SideBar />
      <Editor content={content} language={language} onChange={onChange} />
    </ContentTemplate>
  ) : (
    <ContentsTemplate
      multiZone={<></>}
      button={<Btn icon={<MdOutlineShare />} text="SHARE" />}
    >
      <SideBar />
      <Editor content={content} language={language} onChange={onChange} />
    </ContentsTemplate>
  );
};
export default BetaContainer;
