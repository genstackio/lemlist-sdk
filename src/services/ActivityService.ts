import AbstractService from './AbstractService';
import {SearchActivitiesQuery, Activity, options, context} from '../types';

export class ActivityService extends AbstractService {
    constructor(context: context) {
        super('activity', context);
    }
    async search(query?: SearchActivitiesQuery, limit?: number, offset?: number, options?: options): Promise<Activity[]> {
        const qs = [
            (query?.type !== undefined) && `type=${query.type}`,
            (query?.campaignId !== undefined) && `type=${query.campaignId}`,
            (query?.isFirst !== undefined) && `type=${query.isFirst ? 'true' : 'false'}`,
            (limit !== undefined) && `limit=${limit}`,
            (offset !== undefined) && `offset=${offset}`,
        ].filter(x => !!x).join('&');
        return this.findDocuments(qs ? `?${qs}` : '', options);
    }
}

// noinspection JSUnusedGlobalSymbols
export default ActivityService;
