module.exports = {
  presets: [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "linaria/babel",
    "@babel/preset-typescript"
  ],
  plugins: [
    [
      "transform-react-jsx",
      {
        "pragma": "h"
      }
    ], 
  ]
};