import { SupabaseClient } from 'vue-supabase'

declare module 'vue/types/vue' {
  interface Vue {
    $supabase: SupabaseClient
  }
}

declare module '@nuxt/types' {
  interface Context {
    $supabase: SupabaseClient
  }
}

declare module 'vuex' {
  interface Store<S> {
    $supabase: SupabaseClient
  }
}
