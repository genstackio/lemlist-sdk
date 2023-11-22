import AbstractService from './AbstractService';
import {Hook, context, options, AddHookInput} from '../types';

export class HookService extends AbstractService {
    constructor(context: context) {
        super('hook', context);
    }
    async find(options?: options): Promise<Hook[]> {
        return this.findDocuments('', options);
    }
    async add(data?: AddHookInput, options?: options): Promise<Hook> {
        return this.createDocument('', data);
    }
    async delete(id: string, options?: options): Promise<Hook> {
        return this.deleteDocument(`/${this._validate('code', id)}`);
    }
}

// noinspection JSUnusedGlobalSymbols
export default HookService;
