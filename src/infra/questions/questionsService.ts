import { QuestionType } from 'src/domain/question';
import { ApiService } from '../api/ApiService';
import { AuthService } from '../auth/authService';

interface Dependencies {
    apiService: ApiService;
    authService: AuthService;
}

export class QuestionsService {
    private apiService: ApiService;
    private authService: AuthService;

    constructor({ apiService, authService }: Dependencies) {
        this.apiService = apiService;
        this.authService = authService;
    }

    async APIfetchListQuestions(
        className: string,
        chapter: string | undefined,
    ): Promise<QuestionType[]> {
        // get auth token
        const token = await this.authService.getToken();
        const res = await this.apiService.authGet({
            url: 'questions',
            data: { className, chapter },
            userToken: { authToken: token },
        });

        return res;
    }
}
