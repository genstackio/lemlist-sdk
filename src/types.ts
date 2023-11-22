export type context = { fetch: Function; endpoint: string };

export type options = {
    cache?: boolean;
};

export type endpoints = {
    team: string;
    campaign: string;
    lead: string;
    activity: string;
    unsubscribe: string;
    unsubs: string;
    hook: string;
};

export type Team = {
    _id: string; // "tea_ZSC4DkNwPGMe7rMJi"
    name: string; // "My team"
    userIds: string[]; // ["usr_WhvZ6kTGMcDkg7iH9", "usr_5AJZjmsDGTwvjvbt7"]
    createdBy: string; // "usr_WhvZ6kTGMcDkg7iH9"
    createdAt: string; // "2023-02-07T15:13:40.668Z"
    beta: string[]; //
    invitedUsers: UserInvitation[]; //
    customDomain: string; // "my-domain.com"
};

export type UserInvitation = {
    email: string; // "new.user@my-domain.com"
    role: string; // "member"
    invitedBy: string; // "usr_WhvZ6kTGMcDkg7iH9"
    invitedAt: string; // "2023-02-17T10:36:42.279Z"
};

export type Campaign = {
    _id: string; // "cam_aaWL92T22Sei3Bz6v"
    name: string; // "Campaign1"
    labels: string[]; // ["label 1", "label 2"]
};

export type CampaignExport = {
    id: string; // "exp_123456"
    teamId: string; // "team_123456"
    campaignId: string; // "cam_123456"
    campaignName: string; // "my new campaign"
    status: string; // "pending"
    startedAt: string; // "2020-01-01T00:00:00.000Z"
    progressIndex: number; // 0
    progressTime: number; // 1639138958972
    progressLastStepDuration: number; // 0
    progressType: string; // "starting"
    progress: number; // 0
    total: number; // 0
};

export type CampaignExportStatus = {
    ok: boolean; // true,
    status: CampaignExportStatusDetail; //
};

export type CampaignExportStatusDetail = {
    id: string; // "exp_123456"
    teamId: string; // "team_123456"
    campaignId: string; // "cam_123456"
    campaignName: string; // "my new campaign"
    status: string; // "done"
    startedAt: string; // "2020-01-01T00:00:00.000Z"
    endedAt: string; // "2020-01-01T00:00:00.000Z"
    progressIndex: number; // 6
    progressTime: number; // 1639138959979
    progressLastStepDuration: number; // 476
    progressType: string; // "done"
    progress: number; // 0
    total: number; // 0
    url: string; // "https://api.lemlist.com/api/files/exports/fil_exp_my_new_campaign.csv"
};

export type AddCampaignLeadInput = {
    firstName?: string;
    lastName?: string;
    companyName?: string;
    icebreaker?: string;
    phone?: string;
    picture?: string;
    linkedinUrl?: string;
    companyDomain?: string;
    [key: string]: any;
};

export type AddCampaignLeadOpts = {
    deduplicate?: boolean;
    smartEnrichment?: boolean;
    scannerLinkedin?: boolean;
    verifyEmail?: boolean;
};

export type CampaignLead = {
    campaignId: string; // "cam_aa7uvyxECcni5KXBM"
    campaignName: string; // "Campaign1"
    leadUrl: string; // "https://api.lemlist.com/api/leads/richard%40piedpiper.com"
    _id: string; // "lea_aaNfSAHJoa4gj86Px"
    isPaused: boolean; // false
    email: string; // "richard@piedpiper.com"
    firstName: string; // "Richard"
    lastName: string; // "Hendricks"
    companyName: string; // "Piedpiper"
    icebreaker: string; // "Icebreaker text"
    phone: string; // "(555) 555-1234"
    picture: string; // "https://piedpiper.com/richard-hendricks.jpg"
    linkedinUrl: string; // "https://www.linkedin.com/in/richard-hendricks/
};

export type UpdateCampaignLeadInput = {
    firstName?: string;
    lastName?: string;
    companyName?: string;
    icebreaker?: string;
    phone?: string;
    picture?: string;
    linkedinUrl?: string;
    companyDomain?: string;
    [key: string]: any;
};

export type Lead = {
    _id: string; // "lea_aaNfSAHJoa4gj86Px"
    email: string; // "richard@piedpiper.com"
    firstName: string; // "Richard"
    lastName: string; // "Hendricks"
    isPaused: boolean; // true
    campaignId: string; // "cam_aaBB11C22Def3Gh4i"
};

export type UnsubscribedLead = {
    _id: string; // "lead_123456"
    email: string; // "a@a.com"
    source: string; // "bounce"
    createdAt: string; // "2018-04-30T12:19:42.829Z"
    alreadyUnsubscribed?: boolean; // true
};

export type Hook = {
    _id: string; // "hoo_aadabFv7dRoP2L8GJ"
    targetUrl: string; // "https://youserver.com/lemlist-hook"
    createdAt: string; // "2018-11-27T12:19:26.608Z"
};

export type AddHookInput = {
    targetUrl: string;
    type?: 'contacted' | 'hooked' | 'attracted' | 'warmed' | 'interested' | 'skipped' | 'notInterested' | 'emailsSent' | 'emailsOpened' | 'emailsClicked' | 'emailsReplied' | 'emailsBounced' | 'emailsSendFailed' | 'emailsFailed' | 'emailsUnsubscribed' | 'emailsInterested' | 'emailsNotInterested' | 'opportunitiesDone' | 'aircallCreated' | 'aircallEnded' | 'aircallDone' | 'aircallInterested' | 'aircallNotInterested' | 'apiDone' | 'apiInterested' | 'apiNotInterested' | 'apiFailed' | 'linkedinVisitDone' | 'linkedinVisitFailed' | 'linkedinInviteDone' | 'linkedinInviteFailed' | 'linkedinInviteAccepted' | 'linkedinReplied' | 'linkedinSent' | 'linkedinInterested' | 'linkedinNotInterested' | 'linkedinSendFailed' | 'manualInterested' | 'manualNotInterested' | 'paused' | 'resumed';
    campaignId?: string;
    isFirst?: boolean;
};

export type SearchActivitiesQuery = {
    type?: 'emailsSent' | 'emailsOpened' | 'emailsClicked' | 'emailsReplied' | 'emailsDone' | 'emailsBounced' | 'emailsFailed' | 'emailsUnsubscribed' | 'emailsInterested' | 'emailsNotInterested' | 'snoozed' | 'annotated' | 'aircallDone' | 'aircallCreated' | 'aircallEnded' | 'aircallInterested' | 'aircallNotInterested' | 'apiDone' | 'apiInterested' | 'apiNotInterested' | 'apiFailed' | 'linkedinVisitDone' | 'linkedinVisitFailed' | 'linkedinInviteDone' | 'linkedinSent' | 'linkedinOpened' | 'linkedinInviteAccepted' | 'linkedinInviteFailed' | 'linkedinSendFailed' | 'linkedinReplied' | 'linkedinInterested' | 'linkedinNotInterested' | 'linkedinDone' | 'manualDone' | 'manualInterested' | 'manualNotInterested' | 'paused' | 'resumed' | 'skipped' | 'contacted' | 'hooked' | 'attracted' | 'warmed' | 'interested' | 'notInterested';
    campaignId?: string;
    isFirst?: boolean;
};

export type Activity = {
    _id: string; // "act_aavmrPCCZGMSsCSNw"
    isFirst: boolean; // true
    type: string; // "emailsSent"
    teamId: string; // "tea_aqam5a3BkY8zje24"
    createdAt: string; // "2018-08-24T14:51:35.726Z"
    sendUserId: string; // "usr_aawMB5Gd5JJCFYvjp"
    sendUserEmail: string; // "richard@piedpiper.com"
    sendUserName: string; // "Richard Hendricks"
    leadId: string; // "lea_aafF6i3BjsDRDNAWN"
    leadFirstName: string; // "Jeanne"
    leadLastName: string; // "Doe"
    leadEmail: string; // "jeanne"
    campaignId: string; // "cam_aaktcZg9z9xJKQgqK"
    campaignName: string; // "Campaign1"
    listId: string; // "lst_aa5tgpggEfYeJ9vbJ"
    sequenceId: string; // "seq_aaPoZgbALLQhcLmqz"
    sequenceStep: number; // 1
    emailTemplateId: string; // "etp_aak9yNgefLCCB7ghA"
    emailTemplateName: string; // "I Just Call"
    emailId: string; // "eml_aabhRvzfe9sFErQ2b"
    sequenceTested: string; // "A"
    stepTested: string; // "A"
};
