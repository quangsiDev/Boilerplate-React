import React, { useState } from 'react';
import AceEditor from 'react-ace';
import Output from './OutputChange';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-dracula';
import 'ace-builds/src-noconflict/theme-nord_dark';

const Editor = ({ theme, language, fontsize, valueEditor, setValueEditor }) => {
  const [result, setResult] = useState('');
  const onChange = (newValue) => {
    // console.log('change', newValue);
    setValueEditor(newValue);
  };

  const executeCodeHandle = () => {
    console.log('executeCodeHandle');
    // let result = eval(textCode);
    console.log('result:', valueEditor);
    setResult(result);
  };
  return (
    <div className="w-full h-full flex flex-col items-start px-5 py-5">
      <button
        className="text-white text-base font-bold bg-purple-500 px-3 py-1 rounded-lg mb-3 hover:bg-white hover:text-purple-800 transition-colors"
        onClick={executeCodeHandle}
      >
        Run
      </button>
      <AceEditor
        className="w-full h-full "
        // className="w-20 h-20 "
        height="800px"
        fontSize={fontsize * 1}
        mode={language}
        theme={theme}
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        highlightActiveLine={true}
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          tabSize: 2,
        }}
        // defaultValue={'let number=5\nconsole.log(number)'}
        // defaultValue={'let number=5\nconsole.log(number)'}
        // setOptions={{
        //   enableBasicAutocompletion: true,
        //   enableLiveAutocompletion: true,
        //   enableSnippets: false,
        //   showLineNumbers: true,
        // }}
        value={valueEditor}
      />
      <Output output={result}></Output>
    </div>
  );
};

export default Editor;
