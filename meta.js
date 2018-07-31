module.exports = {
  "helpers": {
    "if_not": function (item, options) {
      if (!item) {
        return options.fn(this);
      }
    }
  },
  prompts: {
    name: {
      when: 'isNotTest',
      type: 'string',
      required: true,
      message: 'Project name',
    },
    description: {
      when: 'isNotTest',
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'A Vue.js project',
    },
    author: {
      when: 'isNotTest',
      type: 'string',
      message: 'Author',
    },
    element: {
      when: 'isNotTest',
      type: 'confirm',
      message: 'Install element-ui?',
    },
    e2e: {
      when: 'isNotTest',
      type: 'confirm',
      message: 'Setup e2e tests?',
    },
    sso: {
      when: 'isNotTest',
      type: 'confirm',
      message: 'Use sso in project?',
    },
    ssoConfig: {
      when: 'isNotTest && sso',
      type: 'string',
      required: false,
      message: 'sso cliend id',
      default: 'your_sso_cliend_id',
    },
    ssoOriginHost: {
      when: 'isNotTest && sso',
      type: 'string',
      required: false,
      message: 'your sso origin host',
      default: 'your_sso_origin_host',
    },
    watermark: {
      when: 'isNotTest',
      type: 'confirm',
      message: 'Use watermark in project?',
    },
    portm: {
      when: 'isNotTest',
      type: 'confirm',
      message: 'Use portm in project?',
    },
    portmTarget: {
      when: 'isNotTest && portm',
      type: 'string',
      required: false,
      message: 'portm target',
      default: 'portm_target',
    },
    portmUserToken: {
      when: 'isNotTest && portm',
      type: 'string',
      required: false,
      message: 'portm user token',
      default: 'your_user_token',
    },
    portmProjectToken: {
      when: 'isNotTest && portm',
      type: 'string',
      required: false,
      message: 'portm project token',
      default: 'your_project_token',
    },
    commitLint: {
      when: 'isNotTest',
      type: 'confirm',
      message: 'Use commit lint?',
    },
    autoInstall: {
      when: 'isNotTest',
      type: 'list',
      message:
        'Should we run `npm install` for you after the project has been created? (recommended)',
      choices: [
        {
          name: 'Yes, use NPM',
          value: 'npm',
          short: 'npm',
        },
        {
          name: 'Yes, use Yarn',
          value: 'yarn',
          short: 'yarn',
        },
        {
          name: 'No, I will handle that myself',
          value: false,
          short: 'no',
        },
      ],
    },
  },
  filters: {
    'tests/e2e/**/*': 'e2e',
    'cypress.json': "e2e",
    'commitlint.config.js': "commitLint",
    'src/views/SSOCallback.vue': "sso",
    'src/utils/sso.ts': "sso",
    'src/styles/element.scss': "element"
  },
  "completeMessage": "vpack had build {{destDirName}} 🎉\n\nTo get started: 🤔\n\n  cd {{destDirName}}\n  npm install\n  npm run dev{{#electron}}\n\nIn another tab:\n\n  npm run app{{/electron}}"
}
