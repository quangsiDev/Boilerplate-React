import React from 'react';
import './style.css';

interface QuestionListBaseProps {
  data?: any[];
}

declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    label?: string;
    value?: any;
  }
}

function QuestionListBase(props: QuestionListBaseProps) {
  const renderQuestionData = () => {
    return props.data?.map((questions: MultipleChoiceQuestionProps, index) => {
      return (
        <tr key={index}>
          <td label="#">{questions.id}</td>
          <td defaultValue="Product of Two Run-Length Encoded Arrays" label="Title">
            <button onClick={() => localStorage.setItem('mul-question-id', questions.id.toString())}>
              <a href={`#/multiple-choice-question/${questions.questionType}/${questions.id}`}>
                {questions.question.replace(':', '?')}
              </a>
            </button>
          </td>
          <td label="Solution" />
          <td label="Acceptance">{/* 64.4% */}</td>
          <td value="[object Object]" label="Difficulty">
            <span className="label label-warning round">Medium</span>
          </td>
          <td value={0} label="Frequency  ,[object Object]" className="text-center">
            <div className="frequency-locked">
              <span>
                <span
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="Frequency of problems that appear in real interviews"
                  aria-hidden="true"
                  style={{ cursor: 'pointer' }}
                >
                  <i className="fa fa-lock " />
                </span>
              </span>
            </div>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="question-list-base">
      <div className="question-filter-base">
        <div className="separator-line question-filter-hr">
          <div className="separator-op" />
          <div className="separator_left_mask" />
          <div className="separator_right_mask" />
        </div>
        <div className="flex-wrap flex -mx-3 search-bar-control text-white">
          <div className="px-4 w-3/4" style={{ maxWidth: '75%' }}>
            <input
              type="text"
              className="w-full list-search-bar p-2"
              placeholder="Search question titles, description or IDs"
            />
          </div>
          <div className="pull-right dropdown show filter-item px-1 filterTags">
            <button className="button-nav-question" type="button" aria-haspopup="true">
              <div className="filter-title">
                Tags
                <i className="fa fa-caret-down" style={{ paddingLeft: 4 }} />
              </div>
            </button>
            <div className="filter-dropdown-menu dropdown-menu hidden">
              <div className="filter-dropdown-menu-item">&nbsp; &nbsp;Loading...</div>
            </div>
          </div>
          <div className="pull-right dropdown show filter-item px-1 filterLists">
            <button className="button-nav-question" type="button" aria-haspopup="true">
              <div className="filter-title">
                Lists
                <i className="fa fa-caret-down" style={{ paddingLeft: 4 }} />
              </div>
            </button>
            <div className="filter-dropdown-menu dropdown-menu hidden">
              <div className="filter-dropdown-menu-item">&nbsp; &nbsp;Loading...</div>
            </div>
          </div>
          <div className="pull-right dropdown show filter-item px-1 filterStatus">
            <button className="button-nav-question" type="button" aria-haspopup="true">
              <div className="filter-title">
                Status
                <i className="fa fa-caret-down" style={{ paddingLeft: 4 }} />
              </div>
            </button>
            <div className="filter-dropdown-menu dropdown-menu hidden">
              <div className="filter-list">
                <div className="filter-dropdown-menu-items">
                  <div className="filter-dropdown-menu-item">
                    <i
                      className="fa fa-check filter-dropdown-menu-item-checked-icon text-green"
                      aria-hidden="true"
                      style={{ visibility: 'hidden' }}
                    />
                    Todo
                  </div>
                  <div className="filter-dropdown-menu-item">
                    <i
                      className="fa fa-check filter-dropdown-menu-item-checked-icon text-green"
                      aria-hidden="true"
                      style={{ visibility: 'hidden' }}
                    />
                    Solved
                  </div>
                  <div className="filter-dropdown-menu-item">
                    <i
                      className="fa fa-check filter-dropdown-menu-item-checked-icon text-green"
                      aria-hidden="true"
                      style={{ visibility: 'hidden' }}
                    />
                    Attempted
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pull-right dropdown show filter-item px-1 filterDifficulty">
            <button className="button-nav-question" type="button" aria-haspopup="true">
              <div className="filter-title">
                Difficulty
                <i className="fa fa-caret-down" style={{ paddingLeft: 4 }} />
              </div>
            </button>
            <div className="filter-dropdown-menu dropdown-menu hidden">
              <div className="filter-list">
                <div className="filter-dropdown-menu-items">
                  <div className="filter-dropdown-menu-item">
                    <i
                      className="fa fa-check filter-dropdown-menu-item-checked-icon text-green"
                      aria-hidden="true"
                      style={{ visibility: 'hidden' }}
                    />
                    Easy
                  </div>
                  <div className="filter-dropdown-menu-item">
                    <i
                      className="fa fa-check filter-dropdown-menu-item-checked-icon text-green"
                      aria-hidden="true"
                      style={{ visibility: 'hidden' }}
                    />
                    Medium
                  </div>
                  <div className="filter-dropdown-menu-item">
                    <i
                      className="fa fa-check filter-dropdown-menu-item-checked-icon text-green"
                      aria-hidden="true"
                      style={{ visibility: 'hidden' }}
                    />
                    Hard
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="filter-selected-tags col-xs-12">
            <div className="filter-tag-bar" />
          </div>
        </div>
      </div>
      <hr className="line dotted question-list-hr" />
      <div className="table-responsive question-list-table">
        <table className="table table-striped text-white w-full">
          <thead>
            <tr className="reactable-column-header">
              <th className="reactable-th-question_id reactable-header-sortable " role="button" tabIndex={0}>
                #
              </th>
              <th className="reactable-th-question_title reactable-header-sortable " role="button" tabIndex={0}>
                Title
              </th>
              <th
                className="reactable-th-editorial reactable-header-sortable reactable-header-sort-asc"
                role="button"
                tabIndex={0}
              >
                {/* Solution */}
              </th>
              <th className="reactable-th-acceptance reactable-header-sortable " role="button" tabIndex={0}>
                {/* Acceptance */}
              </th>
              <th className="reactable-th-difficulty reactable-header-sortable " role="button" tabIndex={0}>
                Difficulty
              </th>
              <th className="reactable-th-frequency reactable-header-sortable " role="button" tabIndex={0}>
                Frequency
              </th>
            </tr>
          </thead>
          <tbody className="reactable-data">{renderQuestionData()}</tbody>
          <tbody className="reactable-pagination">
            <tr>
              <td colSpan={7}>
                <span className="row-selector">
                  <select className="form-control">
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                    <option value={9007199254740991}>all</option>
                  </select>
                  <span className="sort-caret">
                    <i className="fa fa-sort" aria-hidden="true" />
                  </span>
                  rows per page.
                </span>
                <span className="pagination-buttons">
                  <a className="reactable-page-button reactable-current-page" href="#page-1">
                    1
                  </a>
                  <a className="reactable-page-button" href="#page-2">
                    2
                  </a>
                  <a className="reactable-page-button" href="#page-3">
                    3
                  </a>
                  <a className="reactable-page-button" href="#page-4">
                    4
                  </a>
                  <a className="reactable-page-button" href="#page-5">
                    5
                  </a>
                  <a className="reactable-next-page" href="#page-2">
                    Next
                  </a>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default QuestionListBase;
