module.exports = {
  handlers: [
    {
      path: '/nested/twice/zip',
      method: 'GET',
      mode: 'mergeDeep',
      payload: {
        EnterpriseId: 7546210,
        EnterpriseLicensed: false,
        BuData: [{
          businessUnitLicensed: false,
          id: 7546210,
          label: 'gunwupase',
          type: 'item',
          _isExpandable: false
        }]
      }
    }
  ]
}
