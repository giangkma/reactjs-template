export enum ConsumerStatus {
    active = 'active',
    inactive = 'inactive',
}

export interface Consumer {
    id: string;

    /**
     * List of creator ids that this consumer belong to
     */
    creators: string[];

    status: ConsumerStatus;
}
