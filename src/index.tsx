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
    <ListItemButton
      component={Link}
      to="/angular-app"
      sx={{
        minHeight: 48,
        justifyContent: open ? 'initial' : 'center',
        px: 2.5,
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : 'auto',
          justifyContent: 'center',
          height: '1em',
          width: '1.5em'
        }}
      >
        <FaAngular size="22" />
      </ListItemIcon>
      <ListItemText primary="Angular App" sx={{ opacity: open ? 1 : 0 }} />
    </ListItemButton>
  );
}