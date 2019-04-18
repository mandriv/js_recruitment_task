module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
  },
  "settings": {
    "import/resolver": {
      "parcel": {
        "rootDir": 'src',
      }
    }
  },
  "rules": {
    "import/no-absolute-path": 0,
  }
}
