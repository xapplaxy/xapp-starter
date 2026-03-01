import './app.css'
import { mount } from 'svelte';
import App from './App.svelte'
interface AppConfig {
  appId: string;
}

// Initialize config using environment variable
const app_config: AppConfig = {
  appId: import.meta.env.VITE_XAPP_KEY as string,
};
const miniAppId = `wg-${app_config.appId}`;
const targetElement= document.getElementById(miniAppId);

if (!targetElement) {
  throw new Error(`Element with id ${miniAppId} not found.`);
}

const app = mount(App,{target: targetElement})

export default app
