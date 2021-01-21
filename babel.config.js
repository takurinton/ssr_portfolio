module.exports = {
  presets: [
    "@babel/preset-react",
    "@babel/preset-typescript", 
    [
			"@babel/preset-env", {
        "useBuiltIns": "usage",
        "corejs": 3
      }
    ], 
    [
      "minify",{}
    ]
  ],
  // "presets": [
  //   [
  //     "@babel/preset-env", {
  //       "useBuiltIns": "usage",
  //       "corejs": 3
  //     }
  //   ],
  //   "@babel/preset-react",
  //   [
  //     "minify",{}
  //   ]
  // ], 
  plugins: [
    "@babel/plugin-transform-typescript",
    "@babel/plugin-transform-react-jsx",
    "babel-plugin-transform-scss", 
  ],
};