import * as React from 'react';
import NestedCheckboxes from './pages/nested-chekboxes/NestedCheckboxes';
import TransferList from './pages/transfer-list/TransferList';
import Stopwatch from './pages/stopwatch/Stopwatch';
import ImageCarouselOne from './pages/carousels/one/ImageCarouselOne';
import UseQueryChallenge from './pages/customUseQuery/UseQueryChallenge';
import StarRating from './pages/StarRating';

type Routes = {
  path: string;
  component: React.ComponentType;
};

export const routes: Routes[] = [
  {
    path: '/nested-checkboxes',
    component: NestedCheckboxes,
  },
  {
    path: '/transfer-list',
    component: TransferList,
  },
  {
    path: '/stopwatch',
    component: Stopwatch,
  },
  {
    path: '/carousel/one',
    component: ImageCarouselOne,
  },
  {
    path: '/use-query',
    component: UseQueryChallenge,
  },
  {
    path: '/star-rating',
    component: StarRating,
  },
];
