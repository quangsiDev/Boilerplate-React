interface MultipleChoiceQuestionProps {
    data: [];
    id: number;
    created: number;
    modified: number;
    question: string;
    questionType: number;
    assetUrl: null;
    createdBy: null;
    level: null;
    questionTypeName: string;
    answer: [
        {
            answerId: number;
            content: string;
        },
        {
            answerId: number;
            content: string;
        },
        {
            answerId: number;
            content: string;
        },
        {
            answerId: number;
            content: string;
        },
    ];
}