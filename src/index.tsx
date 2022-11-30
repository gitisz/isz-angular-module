import * as React from "react";
import { PiletApi, PiralStoreDataEvent } from "isz-app";
import { ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import { Javascript } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { FaAngular } from 'react-icons/fa';

import "./theme.scss";

export function setup(app: PiletApi) {

  const AngularPage = React.lazy(() =>
    System.import("@angular/compiler@^14").then(() =>
      System.import(`${app.meta.basePath}angular-app.js`)
    )
  );

  app.registerPage("/angular-app", AngularPage);

  app.registerMenu(() =>
    <ListItemButton component={Link}

      to="/angular-app">
      <ListItemIcon>
        <div style={{ paddingLeft: 5}}>
          <FaAngular size="24" />
        </div>
      </ListItemIcon>
      <ListItemText primary="Angular App" sx={{ opacity: open ? 1 : 0 }} />
    </ListItemButton>
  );
}