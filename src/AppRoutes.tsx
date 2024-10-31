import React, { Suspense } from 'react';

const HomePage = React.lazy(() => import('@/entities/homepage'));
const OverViewPage = React.lazy(() => import('@/entities/overview'));
const Loading = React.lazy(() => import('@/components/loading'));

const AppRoutes = [
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading isOpen={true} />}>
        <HomePage />
      </Suspense>
    ),
    layout: true,
  },
  {
    path: '/overView',
    element: (
      <Suspense fallback={<Loading isOpen={true} />}>
        <OverViewPage />
      </Suspense>
    ),
    layout: true,
  },
];

export default AppRoutes;
