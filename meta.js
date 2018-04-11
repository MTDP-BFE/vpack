module.exports = {
  "helpers": {
    "if_not": function (item, options) {
      if (!item) {
        return options.fn(this);
      }
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "New Vue Project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "eslint": {
      "type": "confirm",
      "message": "Do you want to use ESLint(With BFE ESLint)?"
    },
    "lodash": {
      "type": "confirm",
      "message": "Do you want to use lodash?"
    },
    "api": {
      "type": "confirm",
      "message": "Do you want to have API case?"
    },
    "useUI": {
      "type": "confirm",
      "message": "Do you want to use BFUI or ElementUI"
    },
    "UIConfig": {
      "when": "useUI",
      "type": "list",
      "message": "Pick an UI library",
      "choices": [
        {
          "name": "BFUI",
          "value": "bfui",
          "short": "bfui"
        },
        {
          "name": "ElementUI",
          "value": "ElementUI",
          "short": "ElementUI"
        },
        {
          "name": "none (configure it yourself)",
          "value": "none",
          "short": "none"
        }
      ]
    },
    "testcafe": {
      "type": "confirm",
      "message": "Add testcafe to run integration tests?",
      "default": false
    }
  },
  "filters": {
    "client/service/*": "api",
    "client/api/*": "api",
    "client/types/ajax.d.ts": "api",
    "app/*": "electron",
    ".eslintrc": "eslint",
    "test/e2e/*": "testcafe"
  },
  "completeMessage": "vpack had build {{destDirName}} 🎉\n\nTo get started: 🤔\n\n  cd {{destDirName}}\n  npm install\n  npm run dev{{#electron}}\n\nIn another tab:\n\n  npm run app{{/electron}}"
}
