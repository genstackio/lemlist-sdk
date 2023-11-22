import AbstractService from './AbstractService';
import { Lead, context, options } from '../types';

export class LeadService extends AbstractService {
    constructor(context: context) {
        super('lead', context);
    }
    async get(id: string, options?: options): Promise<Lead> {
        return this.getDocument(`/?${this._validate('code', id)}`, options);
    }
    async getByEmail(email: string, options?: options): Promise<Lead> {
        return this.getDocument(`/${this._validate('email', email)}`, options);
    }
    async getByEmailAndCampaign(email: string, campaingId: string, options?: options): Promise<Lead> {
        return this.getDocument(`/${this._validate('email', email)}?campaignId=${this._validate('code', campaingId)}`, options);
    }
    async pauseLead(email: string, options?: options): Promise<Lead[]> {
        return this.createDocument(`/pause/${this._validate('email', email)}`, options);
    }
    async resumeLead(email: string, options?: options): Promise<Lead[]> {
        return this.createDocument(`/start/${this._validate('email', email)}`, options);
    }
    async markLeadAsInterested(email: string, options?: options): Promise<Lead[]> {
        return this.createDocument(`/interested/${this._validate('email', email)}`, options);
    }
    async markLeadAsNotInterested(email: string, options?: options): Promise<Lead[]> {
        return this.createDocument(`/notinterested/${this._validate('email', email)}`, options);
    }
}

export default LeadService;
