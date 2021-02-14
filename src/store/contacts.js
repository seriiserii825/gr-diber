import fetchContacts from "../api/contacts";

const contacts = {
  state: {
    contacts: null
  },
  mutations: {
    setContacts(state, payload) {
      state.contacts = payload;
    }
  },
  actions: {
    contacts({ commit }) {
      fetchContacts().then(response => {
        commit("setContacts", response.data.acf.contacts);
      });
    }
  }
};
export default contacts;
