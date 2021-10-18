module.exports = {
    extends: 'stylelint-config-standard',
    rules: {
        'color-no-invalid-hex': true,
        'rule-empty-line-before': null,
        'color-hex-length': 'long',
        'color-hex-case': 'lower',
        'unit-allowed-list': ['vh', 'em', 'rem', '%', 's', 'px'],
        'declaration-colon-newline-after': null,
        'declaration-block-no-duplicate-properties': [
            true,
            {
                ignore: ['consecutive-duplicates-with-different-values'],
            },
        ],
    },
};
