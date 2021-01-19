module.exports = {
  presets: [
    "@babel/preset-react",
    "@babel/preset-env", 
    "@babel/preset-typescript"
  ],
  plugins: [
    "@babel/plugin-transform-typescript",
    "@babel/plugin-transform-react-jsx",
    "babel-plugin-transform-scss", 
  ],
};