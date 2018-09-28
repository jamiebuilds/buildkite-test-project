module.exports = {
  presets: [
    ['@babel/preset-env', {
      debug: true,
      loose: true,
      targets: {
        browsers: [
          '>2%',
          'not dead',
          'not ie 11'
        ]
      }
    }],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  'plugins': [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    ['@babel/plugin-transform-runtime', {
      helpers: false
    }]
  ]
}
