import UserContentChallengeDetail from '../../../components/UserContentChallengeDetail/UserContentChallengeDetail';
import React, { useEffect, useState } from 'react';
import Editor from './EditorChange';

interface Props {
  name: string;
}

export default function ChallengeDetail() {
  const code = ` function swap(arr, first_Index, second_Index){
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

function bubble_Sort(arr){
    var len = arr.length,
        i, j, stop;
    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (arr[j] > arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }
    return arr;
}
console.log(bubble_Sort([3, 0, 2, 5, -1, 4, 1]));
  `;

  const [theme, setTheme] = useState('dracula');
  const [language, setLanguage] = useState('javascript');
  const [fontsize, setFontsize] = useState(16);
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
    <div className=" h-screen pt-16 flex">
      <div className="w-full h-full bg-white flex">
        <div className="w-2/5 h-full flex-shrink-0">
          <UserContentChallengeDetail question="a"></UserContentChallengeDetail>
        </div>
        <div className="w-full h-full bg-gray-400">
          <Editor
            theme={theme}
            language={language}
            fontsize={fontsize}
            valueEditor={valueEditor}
            setValueEditor={setValueEditor}
          />
        </div>
      </div>
    </div>
  );
}
