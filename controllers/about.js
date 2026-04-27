//import logger from "../utils/logger.js";

'use strict';

import logger from "../utils/logger.js";
import card from "../models/card.js";

const about = {
  createView(request, response) {
    logger.info("About page loading!");

    const viewData = {
      title: "About the Playlist App",
      employee: card.getAppInfo()
    };

    response.render('about', viewData);  

  },
};

export default about;
