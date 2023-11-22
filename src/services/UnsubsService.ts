import AbstractService from './AbstractService';
import {context, options} from '../types';

export class UnsubsService extends AbstractService {
    constructor(context: context) {
        super('unsubs', context);
    }
    async export(options?: options): Promise<string> {
        return this.getDocument(`/export`, options);
    }
}

// noinspection JSUnusedGlobalSymbols
export default UnsubsService;
