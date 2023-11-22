import AbstractService from './AbstractService';
import {
    Campaign,
    CampaignExport,
    CampaignExportStatus,
    AddCampaignLeadInput,
    AddCampaignLeadOpts,
    CampaignLead,
    UpdateCampaignLeadInput,
    context,
    options,
    Lead
} from '../types';

export class CampaignService extends AbstractService {
    constructor(context: context) {
        super('campaign', context);
    }
    async get(id: string, options?: options): Promise<Campaign> {
        return this.getDocument(`/${this._validate('code', id)}`, options);
    }
    async find(limit?: number, offset?: number, options?: options): Promise<Campaign[]> {
        const qs = [(limit !== undefined) && `limit=${limit}`, (offset !== undefined) && `offset=${offset}`].filter(x => !!x).join('&');
        return this.findDocuments(qs ? `?${qs}` : '', options);
    }
    async startExport(id: string, options?: options): Promise<CampaignExport> {
        return this.getDocument(`/${this._validate('code', id)}/export/start`, options);
    }
    async getExportStatus(id: string, campaignId: string, options?: options): Promise<CampaignExportStatus> {
        return this.getDocument(`/${this._validate('code', campaignId)}/export/${this._validate('code', id)}/status`, options);
    }
    async addLead(campaignId: string, email?: string, data?: AddCampaignLeadInput, opts?: AddCampaignLeadOpts, options?: options): Promise<CampaignLead> {
        const qs = [
            (opts?.deduplicate !== undefined) && `deduplicate=${opts.deduplicate ? 'true' : 'false'}`,
            (opts?.scannerLinkedin !== undefined) && `scannerLinkedin=${opts.scannerLinkedin ? 'true' : 'false'}`,
            (opts?.smartEnrichment !== undefined) && `smartEnrichment=${opts.smartEnrichment ? 'true' : 'false'}`,
            (opts?.verifyEmail !== undefined) && `verifyEmail=${opts.verifyEmail ? 'true' : 'false'}`,
        ].filter(x => !!x).join('&');
        return this.createDocument(`/${this._validate('code', campaignId)}/leads/${email ? this._validate('email', email) : ''}${qs ? `?${qs}` : ''}`, data);
    }
    async updateLead(campaignId: string, email: string, data: UpdateCampaignLeadInput, options?: options): Promise<CampaignLead> {
        return this.patchDocument(`/${this._validate('code', campaignId)}/leads/${this._validate('email', email)}`, data);
    }
    async unsubscribeLead(campaignId: string, email: string, options?: options): Promise<CampaignLead> {
        return this.deleteDocument(`/${this._validate('code', campaignId)}/leads/${this._validate('email', email)}`);
    }
    async deleteLead(campaignId: string, email: string, options?: options): Promise<CampaignLead> {
        return this.deleteDocument(`/${this._validate('code', campaignId)}/leads/${this._validate('email', email)}?action=remove`);
    }
    async markLeadAsInterested(campaignId: string, email: string, options?: options): Promise<Lead[]> {
        return this.createDocument(`/${this._validate('code', campaignId)}/leads/${this._validate('email', email)}/interested`, options);
    }
    async markLeadAsNotInterested(campaignId: string, email: string, options?: options): Promise<Lead[]> {
        return this.createDocument(`/${this._validate('code', campaignId)}/leads/${this._validate('email', email)}/notinterested`, options);
    }
}

export default CampaignService;
