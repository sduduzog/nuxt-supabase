import Vue from 'vue'
import { createSupabase } from 'vue-supabase'

const options = {
  supabaseUrl: '<%= options.supabaseUrl %>',
  supabaseKey: '<%= options.supabaseKey %>'
}

const supabaseClient = createSupabase(options)

Vue.use(supabaseClient)

export default (ctx, inject) => {
  ctx.$supabase = supabaseClient;
  inject('supabase', supabaseClient)
}