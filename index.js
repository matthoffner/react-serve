#! /usr/bin/env node
const execa = require('execa');
const fs = require('fs')
async function reactmon() {
    try {
        if (!fs.existsSync('src')) {
            const srcPath = `${process.cwd()}/node_modules/reactmon/src/`;
            const srcPathNew = `${process.cwd()}/src/`;
            await execa('cp', ['-r', srcPath, srcPathNew]);
        }
        if (!fs.existsSync('public')) {
            const htmlPath = `${process.cwd()}/node_modules/reactmon/public/`;
            const htmlPathNew = `${process.cwd()}/public/`;
            await execa('cp', ['-r', htmlPath, htmlPathNew]);
        }
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