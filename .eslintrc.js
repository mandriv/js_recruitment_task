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
    "jsx-a11y/label-has-for": [ 2, {
      "required": {
        "every": [ "id" ]
      },
    }],
    "jsx-a11y/label-has-associated-control": [ 2, {
      "assert": "htmlFor",
    }],
  }
}
