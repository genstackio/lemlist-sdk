import { Sdk } from './Sdk';
import crossFetch from 'cross-fetch';

// try to obfuscate a little
const protocol = 'https';
const rootDomain = 'lemlist.com';
const buildEndpoint = (e, n) => `${protocol}://api.${'prod' === e ? '' : `${e}.`}${rootDomain}/api/${n}`;

export function createEnvSdk({ fetch, defaultEnv = 'prod' }: { fetch?: Function; defaultEnv?: string } = {}) {
    return createSdk({
        fetch: fetch || ('undefined' !== typeof window && window.fetch ? window.fetch.bind(window) : undefined),
        env:
            process.env.RAZZLE_LEMLIST_ENV ||
            process.env.STORYBOOK_LEMLIST_ENV ||
            process.env.LEMLIST_SDK_ENV ||
            defaultEnv,
    });
}

export function createSdk({ fetch, env = 'prod' }: { fetch?: Function; env?: string } = {}) {
    const sdk = new Sdk({
        fetch: fetch || crossFetch,
        endpoints: {
            team: buildEndpoint(env, 'team'),
            campaign: buildEndpoint(env, 'campaigns'),
            lead: buildEndpoint(env, 'leads'),
            activity: buildEndpoint(env, 'activities'),
            unsubscribe: buildEndpoint(env, 'unsubscribes'),
            unsubs: buildEndpoint(env, 'unsubs'),
            hook: buildEndpoint(env, 'hooks'),
        },
    });
    const apiKey = process.env.RAZZLE_LEMLIST_API_KEY || process.env.STORYBOOK_LEMLIST_API_KEI || process.env.LEMLIST_API_KEY || undefined;
    if (apiKey) sdk.setApiKey(apiKey);
    return sdk;
}
