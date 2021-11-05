module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: '@leke/rc',
        libraryDirectory: 'es',
        camel2DashComponentName: false,
        style(name) {
          return `${name}/index.less`.replace('/es/', '/style/')
        }
      },
      '@leke/rc'
    ],
    [
      'import',
      {
        libraryName: 'antd',
        style: true
      },
      'antd'
    ]
  ]
}