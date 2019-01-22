import store from 'store';

const app = {
  state: {
    sidebar: {
      opened: store.get('sidebarStatus') || false, // 导航栏状态, false是展开
    },
    language: store.get('language') || 'zh', // 多语言
  },
  mutations: {
    TOGGLE_SIDEBAR(state) {
      store.set('sidebarStatus', !state.sidebar.opened);
      state.sidebar.opened = !state.sidebar.opened;
    },
    SET_LANGUAGE(state, language) {
      state.language = language;
      store.set('language', language);
    },
  },
  actions: {
    toggle_sidebar({ commit }) {
      commit('TOGGLE_SIDEBAR');
    },
    set_language({ commit }, language) {
      commit('SET_LANGUAGE', language);
    },
  },
};

export default app;
