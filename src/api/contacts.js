const axios = require("axios");

const fetchContacts = () => {
  return axios.get(
    "http://wp-diber-gridsome.host1670806.hostland.pro/wp-json/acf/v3/options/options"
  );
};

export default fetchContacts;
