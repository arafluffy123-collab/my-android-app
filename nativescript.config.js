module.exports = {
  id: 'com.javascriptapp.myapp', // This matches Google's exact naming rule!
  appPath: '.',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
};
