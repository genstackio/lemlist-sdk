import TeamService from './services/TeamService';
import CampaignService from './services/CampaignService';
import LeadService from './services/LeadService';
import ActivityService from './services/ActivityService';
import UnsubscribeService from './services/UnsubscribeService';
import UnsubsService from './services/UnsubsService';
import HookService from './services/HookService';
import { context, endpoints } from './types';

export class Sdk {
    public team: TeamService;
    public campaign: CampaignService;
    public lead: LeadService;
    public activity: ActivityService;
    public unsubscribe: UnsubscribeService;
    public unsubs: UnsubsService;
    public hook: HookService;
    constructor({ fetch, endpoints }: { fetch: Function; endpoints: endpoints }) {
        const context = { fetch };
        this.team = new TeamService(this.createContextFor('team', endpoints, context));
        this.campaign = new CampaignService(this.createContextFor('campaign', endpoints, context));
        this.lead = new LeadService(this.createContextFor('lead', endpoints, context));
        this.activity = new ActivityService(this.createContextFor('activity', endpoints, context));
        this.unsubscribe = new UnsubscribeService(this.createContextFor('unsubscribe', endpoints, context));
        this.unsubs = new UnsubsService(this.createContextFor('unsubs', endpoints, context));
        this.hook = new HookService(this.createContextFor('hook', endpoints, context));
    }
    setApiKey(apiKey: string) {
        this.team.setApiKey(apiKey);
        this.campaign.setApiKey(apiKey);
        this.lead.setApiKey(apiKey);
        this.activity.setApiKey(apiKey);
        this.unsubscribe.setApiKey(apiKey);
        this.unsubs.setApiKey(apiKey);
        this.hook.setApiKey(apiKey);
        return this;
    }
    protected createContextFor(type: string, endpoints: any, context: any): context {
        return { ...context, endpoint: endpoints[type] };
    }
}

export default Sdk;
