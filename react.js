module.exports = {
  extends: [
    "airbnb",
    "@daisypayments/eslint-config/base",
    "plugin:react/recommended",
    "prettier/react",
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 100,
        trailingComma: "all",
      },
    ],
    "react/state-in-constructor": "off",
    "react/static-property-placement": "off",
    // It's ok not using destructing
    "react/destructuring-assignment": "off",
    // Adapt to our codebase
    "react/sort-comp": [
      "error",
      {
        order: [
          "static-lifecycle",
          "static-variables",
          "static-methods",
          "lifecycle",
          "everything-else",
          "/^on.+$/",
          "rendering",
        ],
        groups: {
          "static-lifecycle": ["displayName", "contextTypes", "propTypes", "defaultProps"],
          lifecycle: [
            "state",
            "instance-variables",
            "getters",
            "setters",
            "constructor",
            // 'getDefaultProps',
            // 'getInitialState',
            // 'getChildContext',
            "getDerivedStateFromProps",
            "componentWillMount",
            "UNSAFE_componentWillMount",
            "componentDidMount",
            "componentWillReceiveProps",
            "UNSAFE_componentWillReceiveProps",
            "shouldComponentUpdate",
            "componentWillUpdate",
            "UNSAFE_componentWillUpdate",
            "getSnapshotBeforeUpdate",
            "componentDidUpdate",
            "componentDidCatch",
            "componentWillUnmount",
          ],
          rendering: ["/^render.+$/", "render"],
        },
      },
    ],
    // We use it
    "react/jsx-props-no-spreading": "off",
    // Do not use .jsx
    "react/jsx-filename-extension": "off",
    // Allow escaping text like: <span>{`You don't have...`}</span>
    "react/jsx-curly-brace-presence": "off",
    // Checks rules of Hooks
    "react-hooks/rules-of-hooks": "error",
    // Checks effect dependencies
    "react-hooks/exhaustive-deps": "warn",
    // Do not force `export default`
    "import/prefer-default-export": "off",

    "jsx-a11y/control-has-associated-label": "off",
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
