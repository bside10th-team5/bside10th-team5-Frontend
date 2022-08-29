import React, { useLayoutEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import PropTypes from "prop-types";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { templateListState } from "../../../../state/writeDiaryState";

const FreeTemplate = ({ id }) => {
  const editorRef = useRef(null);
  const [templateList, setTemplateList] = useRecoilState(templateListState);

  useLayoutEffect(() => {
    const freeTemplate = templateList.filter((el) => el.id === id)[0];
    const markDown = freeTemplate.content;
    if (markDown) {
      editorRef.current.getInstance().setMarkdown(markDown);
    }
  }, []);

  const onChangeEditor = () => {
    const editorMarkDownData = editorRef.current.getInstance().getMarkdown();
    const changedObj = { id, type: "free", content: editorMarkDownData };
    setTemplateList((prev) => {
      const newTemplateList = [...prev].filter((el) => el.id !== id);
      newTemplateList.push(changedObj);
      return newTemplateList;
    });
  };

  return (
    <>
      <Editor
        ref={editorRef}
        // initialValue={}
        // initialValue="hello react editor world!"
        placeholder="내용을 입력해주세요."
        onChange={onChangeEditor}
        // previewStyle="vertical" // 미리보기 스타일 지정
        height="300px" // 에디터 창 높이
        initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
        toolbarItems={[
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
          ["ul", "ol", "task", "indent", "outdent"],
          ["table", "image", "link"],
          ["code", "codeblock"],
        ]}
      ></Editor>
    </>
  );
};

export default FreeTemplate;

FreeTemplate.propTypes = {
  id: PropTypes.string.isRequired,
};
