import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme:{
    themes:{
    light:{
      primary:'#4f46e5',
      secondary:'#0ea5e9',
      accent:'#9747ff',
      error:'#f8754f',
      background: '#0ea4e966'      
    },
  },
  },
});
