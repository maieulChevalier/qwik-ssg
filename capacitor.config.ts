import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.maieulchevalier',
  appName: 'qwik-capacitor',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
