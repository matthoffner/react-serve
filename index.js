const execa = require('execa');

async function reactmon() {
    try {
        await execa('node', [`${process.cwd()}/node_modules/.bin/nollup`, '-c', '--hot', '--content-base', 'public', '--port', '9001']).stdout.pipe(process.stdout);
        console.log('starting reactmon');
    } catch (error) {
        console.log(error);
    }
};

reactmon();