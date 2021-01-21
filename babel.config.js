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
    "@linaria", 
  ],
  plugins: [
    "@babel/plugin-transform-typescript",
    "@babel/plugin-transform-react-jsx",
    // "babel-plugin-transform-scss", 
  ],
};