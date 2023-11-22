import AbstractService from './AbstractService';
import { context, Team, options } from '../types';

export class TeamService extends AbstractService {
    constructor(context: context) {
        super('team', context);
    }
    async getCurrent(options?: options): Promise<Team> {
        return this.getDocument<Team>('', options);
    }
}

// noinspection JSUnusedGlobalSymbols
export default TeamService;
