module.exports = {
    default: {
        requireModule: ['ts-node/register'],
        require: ['steps/**/*.ts'],
        format: [
            'progress-bar',
            'html:cucumber-report.html'
        ],
        paths: ['features/'],
        parallel: 1
    }
};