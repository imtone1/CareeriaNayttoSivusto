import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

export default function CodeBlockk({ code }) {
return (
<>
    <CopyBlock
    text={code}
    language='python'
    showLineNumbers='true'
    theme={dracula}
    codeBlock
    wrapLines
  />
	</>
);
}
