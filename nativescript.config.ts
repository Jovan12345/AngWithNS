import { NativeScriptConfig } from '@nativescript/core'

export default {
  id: 'org.nativescript.AngWithNS',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
  },
  appPath: 'src',
} as NativeScriptConfig
