import "zone.js";
import "core-js/proposals/reflect-metadata";

import * as React from "react";
import { PageComponentProps } from "isz-app";
import { defineNgModule, fromNg } from "piral-ng/convert";
import { PageComponent } from "./app/page.component";
import { AppModule } from "./app/app.module";

let fresh = true;

const AngularPage: React.FC<PageComponentProps> = ({ piral }) => {
  if (fresh) {
    defineNgModule(AppModule);
    piral.registerExtension("angular-page", fromNg(PageComponent));
    fresh = false;
  }

  const [state, setState] = React.useState(0);

  return <piral.Extension name="angular-page" params={{ count: state }} />;
};

export default AngularPage;