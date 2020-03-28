const execa = require('execa');

async function reactmon() {
    try {
        const path = `${process.cwd()}/node_modules/.bin/nollup`;
        const configPath = `${process.cwd()}/node_modules/reactmon/rollup.config.js`;
        const contentBase = `${process.cwd()}/public`;
        await execa('node', [path, '--config', configPath, '--hot', '--content-base', contentBase, '--port', '9001']).stdout.pipe(process.stdout);
        console.log('starting reactmon');
    } catch (error) {
        console.log(error);
    }
};

reactmon();