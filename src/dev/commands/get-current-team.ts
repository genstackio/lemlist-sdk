import {createEnvSdk} from "../../utils";

export const command = ['get-current-team', '$0'];

export const describe = 'display current team info'

export const builder = {
    apiKey: {
        default: '',
    }
}

export const handler = async argv => {
    const sdk = createEnvSdk({apiKey: argv.apiKey});
    const doc = await sdk.team.getCurrent();

    console.log(doc);
}