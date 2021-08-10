import container from 'src/container';
import useSWR from 'swr';

const {
    cradle: { questionsService },
} = container;

export const useQuestions = (className: string, chapter: string) => {
    return useSWR(
        [className, chapter, `questions/className&chapter`],
        questionsService.APIfetchListQuestions.bind(questionsService),
    );
};
