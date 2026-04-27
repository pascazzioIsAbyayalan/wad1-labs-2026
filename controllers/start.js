/*import logger from "../utils/logger.js";

'use strict';

const start = {
  createView(request, response) {
    logger.info("Start page loading!");
    response.send("Welcome to Grettel's Playlist app!");   
  },
};

export default start;

'use strict';
import logger from "../utils/logger.js";
import appStore from "../models/app-store.js";

const start = {

  createView(request, response) {
    const info = appStore.getAppInfo();
    logger.debug(info);
    
    logger.info("Start page loading!")
    response.json(info);   
  },
};

export default start;*/

'use strict';

import logger from "../utils/logger.js";
import appStore from "../models/app-store.js";

const start = {
  createView(request, response) {
    logger.info("Start page loading!");
    
    const viewData = {
      title: "Welcome to the Playlist app!",
      info: appStore.getAppInfo()
    };
    
    //logger.debug(viewData);
    response.render('start', viewData);   
  },
};

export default start;
