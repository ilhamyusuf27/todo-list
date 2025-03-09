import React from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import Home from '../pages/Home';

export interface SubRoutes {
  path: string;
  element: React.ReactNode;
  index?: boolean;
}

export interface Router {
  subRoutes?: SubRoutes[];
  path?: string;
  element: React.ReactNode;
  index?: boolean;
}

const router: Router[] = [
  {
    element: <DefaultLayout />,
    index: true,
    subRoutes: [
      {
        path: '/',
        element: <Home />,
        index: true,
      },
    ],
  },
];

export default router;
