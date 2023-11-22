import yargs from 'yargs/yargs';
import * as c1 from './commands/get-current-team';
import * as c2 from './commands/search-activities';

export function cli(argv: string[]) {
    yargs(argv.slice(2))
        .command(c1)
        .command(c2)
        .argv
    ;
}

export default cli;