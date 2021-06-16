import React, { useEffect, useState } from 'react';

import Editor from './Editor';
import OptionEditor from './OptionEditor';

interface Props {
  name: string;
}

export default function MultipleChoiceFunction({ name }: Props) {
  const code = `function add(a, b) {
    return a + b;
  }
  `;

  const [theme, setTheme] = useState('dracula');
  const [language, setLanguage] = useState('javascript');
  const [fontsize, setFontsize] = useState(14);
  const [valueEditor, setValueEditor] = useState(code);

  const handleChangeTheme = (value) => {
    setTheme(value);
  };
  const handleChangeLanguage = (value) => {
    setLanguage(value);
  };
  const handleChangeFontsize = (value) => {
    setFontsize(value);
  };

  return (
    <>
      <div className="cl-header  pt-24" style={{ background: '#111827', borderBottom: '1px solid gray' }}>
        <a className="button-back" href="#/category">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </a>
        <div className="task-name pl-3 text-white">JavaScript Basic</div>
      </div>
      <div className="bg-gray-900 p-10 flex justify-between w-screen min-h-screen absolute">
        <OptionEditor
          handleChangeTheme={handleChangeTheme}
          handleChangeLanguage={handleChangeLanguage}
          handleChangeFontsize={handleChangeFontsize}
        />
        <Editor
          theme={theme}
          language={language}
          fontsize={fontsize}
          valueEditor={valueEditor}
          setValueEditor={setValueEditor}
        />
      </div>
    </>
  );
}
