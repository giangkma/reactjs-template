import { APP_CONFIG } from 'src/config';
import { ApiResponse } from 'src/infra/api/interfaces';
import { ApiService } from 'src/infra/api/ApiService';
import { Consumer } from 'src/domain/consumer';

interface Dependencies {
    apiService: ApiService;
}

export interface GetRepoConsumerRes {
    consumers: Consumer[];
}

export class ConsumerRepository {
    private apiService: ApiService;

    constructor({ apiService }: Dependencies) {
        this.apiService = apiService;
    }

    async getRepoCommits(page?: number): Promise<GetRepoConsumerRes> {
        const url = `get`;

        const res: ApiResponse<Consumer[]> = await this.apiService.get({
            url,
            data: {
                page,
                per_page: APP_CONFIG.QUERY_PAGE_SIZE,
            },
        });

        if (this.apiService.isFailureResponse(res.data)) {
            throw new Error(res.data.message);
        }

        return {
            consumers: [],
        };
    }
}
