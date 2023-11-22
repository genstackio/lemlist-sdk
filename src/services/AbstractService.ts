import { context, options } from '../types';
import SdkError from '../errors/SdkError';
import validate from '@genstackio/validator';

export abstract class AbstractService {
    protected context: context;
    protected type: string;
    protected apiKey: string|undefined;
    protected constructor(type: string, context: context) {
        this.type = type;
        this.context = context;
    }
    public setApiKey(apiKey: string) {
        this.apiKey = apiKey;
        return this;
    }
    protected getApiKey(): string|undefined {
        return this.apiKey;
    }
    protected base64encode(text: string, urlEncode = true): string {
        return new Buffer(text).toString(urlEncode ? 'base64url' : 'base64');
    }
    protected async request(uri: string, method = 'GET', body: string | undefined = undefined, headers: any = {}) {
        let response;
        try {
            const apiKey = this.getApiKey();
            apiKey && (headers = {...headers, 'Authorization': `:${apiKey}`});

            response = await this.context.fetch(`${this.context.endpoint}${uri}`, { method, body, headers });
        } catch (e) {
            throw new SdkError(e);
        }
        let r;
        try {
            r = await response.json();
        } catch (e) {
            r = e;
        }
        if (200 > response.status || response.status >= 300) throw new SdkError(r, response.status);
        return r;
    }
    protected getRandomCacheKey() {
        return `${Math.round(Math.random() * 100000)}${new Date().getTime()}${Math.round(Math.random() * 100000)}`;
    }
    protected buildUri(uri: string, options: options = {}) {
        if (!uri || undefined === options?.cache || true === options?.cache) return uri;
        if (-1 < uri.indexOf('?')) {
            if ('&' !== uri.slice(-1)) uri = `${uri}&`;
        } else {
            uri = `${uri}?`;
        }
        return `${uri}_=${this.getRandomCacheKey()}`;
    }
    protected async getDocument<T>(uri: string, options?: options): Promise<T> {
        return this.request(this.buildUri(uri, options), 'GET');
    }
    protected async findDocuments<T>(uri: string, options?: options): Promise<T> {
        return this.request(this.buildUri(uri, options), 'GET');
    }
    protected async createDocument<T>(uri: string, data: unknown): Promise<T> {
        return this.request(uri, 'POST', JSON.stringify(data), { 'Content-Type': 'application/json;charset=utf-8' });
    }
    protected async updateDocument<T>(uri: string, data: unknown): Promise<T> {
        return this.request(uri, 'PUT', JSON.stringify(data), { 'Content-Type': 'application/json;charset=utf-8' });
    }
    protected async patchDocument<T>(uri: string, data: unknown): Promise<T> {
        return this.request(uri, 'PATCH', JSON.stringify(data), { 'Content-Type': 'application/json;charset=utf-8' });
    }
    protected async deleteDocument<T>(uri: string): Promise<T> {
        return this.request(uri, 'DELETE', undefined, { 'Content-Type': 'application/json;charset=utf-8' });
    }
    protected _validate(type: string, value: string, startsWith?: string) {
        validate(type, value, { ...(startsWith ? { startsWith } : {}) });
        return value;
    }
}

export default AbstractService;
