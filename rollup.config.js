import node_resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs-alternate';
import replace from 'rollup-plugin-replace';
import refresh from 'rollup-plugin-react-refresh';

let config = {
    input: `${process.cwd()}/src/index.js`,
    output: {
        dir: 'dist',
        format: 'esm',
        entryFileNames: '[name].js'
    },
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        babel({
            presets: ["@babel/preset-react"],
            plugins: ["react-refresh/babel"]
        }),
        node_resolve(),
        commonjs({
            namedExports: {
                'node_modules/react/index.js': [
                    'Component', 'useState', 'useEffect'
                ]
            }
        }),
        refresh()
    ]
}

export default config;