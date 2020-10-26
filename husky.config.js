module.exports = {
  hooks: {
    'pre-commit': 'pretty-quick --staged && lint-staged -c lint-staged.config.js',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
};
