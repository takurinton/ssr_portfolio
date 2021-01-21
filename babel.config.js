module.exports = {
  presets: [
    "@babel/preset-react",
    "@babel/preset-typescript", 
    [
			"@babel/preset-env",
			{
				"targets": {
					"node": "current"
				}
			}
		], 
    // "@linaria", 
    "linaria/babel",
  ],
  plugins: [
    "@babel/plugin-transform-typescript",
    "@babel/plugin-transform-react-jsx",
    // "babel-plugin-transform-scss", 
  ],
};