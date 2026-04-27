//import logger from "../utils/logger.js";

'use strict';

import logger from "../utils/logger.js";
import card from "../models/card.js";

const about = {
  createView(request, response) {
    logger.info("About page loading!");

    const employeesData = card.getAppInfo();
    const employees = Array.isArray(employeesData) ? employeesData : [];

    const viewData = {
      title: "About the Playlist App",
      employees
    };

    response.render('about', viewData);  

  },
};

export default about;
