import React, { useEffect, useState } from 'react';
import httpServ from '../../../services/http.service';
import './style.css';

interface multipleChoiceQuestionsProps {}
interface questionDetailProps {
  answer?: any[];
  questionType?: number;
  question?: string;
}

declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    init?: number;
  }
}

const MultipleChoiceQuestions = (props: multipleChoiceQuestionsProps) => {
  const [data, setData] = useState([]);
  const [questionDetail, setQuestionDetail] = useState<questionDetailProps>({});
  const [state, setState] = useState({
    answerId: 0,
    content: '',
  });

  useEffect(() => {
    httpServ.getAllMultipleChoice().then((res: any) => {
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    data?.forEach((item: MultipleChoiceQuestionProps) => {
      const id = parseInt(localStorage.getItem('mul-question-id') || '');
      if (item.id === id) setQuestionDetail(item);
    });
    // console.log(questionDetail);
  }, [data]);

  const handleChange = (e) => {
    const value = e.target?.value;
    const title = e.target?.title;

    setState({
      ...state,
      answerId: value,
      content: title,
    });
  };

  const handleReset = () => {
    console.log('handleReset');
    setState({
      answerId: 0,
      content: '',
    });
  };

  const handleSubmit = () => {
    console.log('handleSubmit');
  };

  useEffect(() => {
    // console.log(state);
  }, [state]);

  const renderListAnswer = () => {
    return (
      <div className="list" id="list-answer">
        <ul>
          {questionDetail?.answer?.map((answer: any) => {
            return (
              <li className="single-select" key={answer.answerId}>
                <div className="select">
                  <input
                    type="radio"
                    name="answer"
                    value={answer.answerId}
                    title={answer.content}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <span className="checkmark" />
                </div>
                <div className="content">
                  <p>{answer.content}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <div id="pnCodeDetail" className="cl pt-20 ">
      <div className="cl-header" style={{ background: '#111827' }}>
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
        <div className="task-name pl-3 text-white">
          {questionDetail?.questionType === 1
            ? 'JavaScript Basic'
            : questionDetail?.questionType === 2
            ? 'CSS Basic'
            : ''}
        </div>
      </div>
      <div className="cl-task-main-content">
        <div className="code-panel-left ui-resizable" style={{ width: '50%', height: 560 }}>
          <div className="tab-content">
            <div id="pnCLTabContent">
              <div className="description-code-content">
                <div className="tab-language" id="vn">
                  <h3 style={{ textAlign: 'justify' }}>
                    <strong>Câu hỏi</strong>
                  </h3>
                  <ul>
                    <li style={{ textAlign: 'justify' }}>{questionDetail?.question}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="ui-resizable-handle ui-resizable-e" style={{ zIndex: 90 }} init={1}>
            <p style={{ top: 264, position: 'relative' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                style={{ margin: '-10px' }}
              >
                <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
              </svg>
            </p>
          </div>
        </div>
        <div className="code-panel-right" style={{ width: 1079, height: 560 }}>
          <div className="input-header">
            <ul className="left-menu">
              <li />
              <li>
                <a id="btnResetCL" className="reset flex" onClick={() => handleReset()}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  <span>Reset</span>
                </a>
              </li>
            </ul>
          </div>
          <div id="pnCLRender" className="code-input" style={{ height: 469 }}>
            <div className="quiz-container" id="quiz-container">
              {renderListAnswer()}
            </div>
          </div>
          <div className="cl-wrap-task-footer">
            <ul className="left-menu">
              <li />
              <li>
                <a id="btnSubmit" className="reset flex" onClick={() => handleSubmit()}>
                  <span>Submit</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipleChoiceQuestions;
