<script>
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { TrinityDashboardSample } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  // components: {
  //  TrinityDashboardSample,
  // }
});
</script>

<template>
  <div id="app">
    <trinity-dashboard-sample />
  </div>
</template>
