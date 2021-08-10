import * as awilix from 'awilix';

import makeApiService, { ApiService } from 'src/infra/api/ApiService';

import { ConsumerRepository } from 'src/infra/consumer/consumerRepository';

export interface Cradle {
    apiService: ApiService;
    consumerRepository: ConsumerRepository;
}

// Create the container and set the injectionMode to PROXY (which is also the default).
const container = awilix.createContainer<Cradle>();

/* ------------- Infra ------------- */
container
    // services
    .register({
        apiService: awilix.asFunction(makeApiService).singleton(),
    })
    // repositories
    .register({
        consumerRepository: awilix.asClass(ConsumerRepository).singleton(),
    });

/* ------------- App ------------- */
container
    // commit
    .register({});

export default container;
