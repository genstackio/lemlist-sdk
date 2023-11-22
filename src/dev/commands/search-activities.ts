import {createEnvSdk} from "../../utils";

export const command = ['search-activities'];

export const describe = 'search activities'

export const builder = {
    apiKey: {
        default: '',
    }
}

export const handler = async argv => {
    const sdk = createEnvSdk({apiKey: argv.apiKey});
    const docs = await sdk.activity.search();

    console.log(docs);
}