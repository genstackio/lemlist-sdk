import AbstractService from './AbstractService';
import {UnsubscribedLead, context, options, Lead} from '../types';

export class UnsubscribeService extends AbstractService {
    constructor(context: context) {
        super('unsubscribe', context);
    }
    async find(limit?: number, offset?: number, options?: options): Promise<UnsubscribedLead[]> {
        const qs = [(limit !== undefined) && `limit=${limit}`, (offset !== undefined) && `offset=${offset}`].filter(x => !!x).join('&');
        return this.findDocuments(qs ? `?${qs}` : '', options);
    }
    async addEmail(email: string, options?: options): Promise<UnsubscribedLead> {
        return this.createDocument(`/${this._validate('email', email)}`, options);
    }
    async addDomain(domain: string, options?: options): Promise<undefined> {
        return this.createDocument(`/${this._validate('atdomain', domain)}`, options);
    }
    async deleteEmail(email: string, options?: options): Promise<Lead> {
        return this.deleteDocument(`/${this._validate('email', email)}`);
    }
}

// noinspection JSUnusedGlobalSymbols
export default UnsubscribeService;
