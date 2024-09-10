import React, { Suspense } from 'react';

const HomePage = React.lazy(() => import('@/entities/homepage'));
const SpeakingPage = React.lazy(() => import('@/entities/speaking'));
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
    path: '/speaking',
    element: (
      <Suspense fallback={<Loading isOpen={true} />}>
        <SpeakingPage />
      </Suspense>
    ),
    layout: true,
  },
];

export default AppRoutes;
