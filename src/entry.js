// iife/cjs usage extends esm default export - so import it all
import plugin, * as components from '@/entry.esm';
// import Vue from 'vue';
// import echarts from 'echarts';

// Attach named exports directly to plugin. IIFE/CJS will
// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)
Object.entries(components).forEach(([componentName, component]) => {
  if (componentName !== 'default') {
    plugin[componentName] = component;
  }
});

export default plugin;
