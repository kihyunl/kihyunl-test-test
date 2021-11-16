module.exports = {
  routes: './src/routes.ts',
  connector: '@layer0/starter',
  backends: {
    origin: {
      domainOrIp: 'origin.kihyunl.tk',
      hostHeader: 'origin.kihyunl.tk',
    },
  },
}
