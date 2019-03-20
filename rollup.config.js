import babel from 'rollup-plugin-babel';

export default {
    input: 'src/main.js',
    output: {
        file: 'build/bundle.js',
        format: 'umd',
        name: 'myModule'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
};