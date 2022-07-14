import React, { useEffect, useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
// import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";

const FreeTemplate = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    const test = localStorage.getItem("test");
    console.dir(test);
    if (test) {
      editorRef.current.getInstance().setMarkdown(test);
    }
  }, []);

  return (
    <>
      <Editor
        ref={editorRef}
        // initialValue={}
        // initialValue="hello react editor world!"
        placeholder="내용을 입력해주세요."
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

      <button
        onClick={() => {
          const saveTest = editorRef.current.getInstance().getMarkdown();
          // console.log(editorRef.current.getValue());
          console.log("save");
          localStorage.setItem("test", saveTest);
        }}
      >
        save
      </button>
    </>
  );
};

export default FreeTemplate;
