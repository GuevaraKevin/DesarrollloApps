import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'components/button',
    loadComponent: () => import('./components/button/button.page').then((m) => m.ButtonPage),
  },
  {
    path: 'components/card',
    loadComponent: () => import('./components/card/card.page').then((m) => m.CardPage),
  },
  {
    path: 'components/input',
    loadComponent: () => import('./components/input/input.page').then((m) => m.InputPage),
  },
  {
    path: 'components/alert',
    loadComponent: () => import('./components/alert/alert.page').then((m) => m.AlertPage),
  },
  {
    path: 'components/modal',
    loadComponent: () => import('./components/modal/modal.page').then((m) => m.ModalPage),
  },
  {
    path: 'components/toast',
    loadComponent: () => import('./components/toast/toast.page').then((m) => m.ToastPage),
  },
  {
    path: 'components/list',
    loadComponent: () => import('./components/list/list.page').then((m) => m.ListPage),
  },
  {
    path: 'components/checkbox',
    loadComponent: () => import('./components/checkbox/checkbox.page').then((m) => m.CheckboxPage),
  },
  {
    path: 'components/toggle',
    loadComponent: () => import('./components/toggle/toggle.page').then((m) => m.TogglePage),
  },
  { path: 'components/accordion', loadComponent: () => import('./components/accordion/accordion.page').then((m) => m.AccordionPage) },
  { path: 'components/action-sheet', loadComponent: () => import('./components/action-sheet/action-sheet.page').then((m) => m.ActionSheetPage) },
  { path: 'components/badge', loadComponent: () => import('./components/badge/badge.page').then((m) => m.BadgePage) },
  { path: 'components/chip', loadComponent: () => import('./components/chip/chip.page').then((m) => m.ChipPage) },
  { path: 'components/datetime', loadComponent: () => import('./components/datetime/datetime.page').then((m) => m.DatetimePage) },
  { path: 'components/fab', loadComponent: () => import('./components/fab/fab.page').then((m) => m.FabPage) },
  { path: 'components/grid', loadComponent: () => import('./components/grid/grid.page').then((m) => m.GridPage) },
  { path: 'components/icon', loadComponent: () => import('./components/icon/icon.page').then((m) => m.IconPage) },
  { path: 'components/infinite-scroll', loadComponent: () => import('./components/infinite-scroll/infinite-scroll.page').then((m) => m.InfiniteScrollPage) },
  { path: 'components/item', loadComponent: () => import('./components/item/item.page').then((m) => m.ItemPage) },
  { path: 'components/avatar', loadComponent: () => import('./components/avatar/avatar.page').then((m) => m.AvatarPage) },
  { path: 'components/menu', loadComponent: () => import('./components/menu/menu.page').then((m) => m.MenuPage) },
  { path: 'components/popover', loadComponent: () => import('./components/popover/popover.page').then((m) => m.PopoverPage) },
  { path: 'components/progress-bar', loadComponent: () => import('./components/progress-bar/progress-bar.page').then((m) => m.ProgressBarPage) },
  { path: 'components/radio', loadComponent: () => import('./components/radio/radio.page').then((m) => m.RadioPage) },
  { path: 'components/range', loadComponent: () => import('./components/range/range.page').then((m) => m.RangePage) },
  { path: 'components/refresher', loadComponent: () => import('./components/refresher/refresher.page').then((m) => m.RefresherPage) },
  { path: 'components/reorder', loadComponent: () => import('./components/reorder/reorder.page').then((m) => m.ReorderPage) },
  { path: 'components/searchbar', loadComponent: () => import('./components/searchbar/searchbar.page').then((m) => m.SearchbarPage) },
  { path: 'components/segment', loadComponent: () => import('./components/segment/segment.page').then((m) => m.SegmentPage) },
  { path: 'components/select', loadComponent: () => import('./components/select/select.page').then((m) => m.SelectPage) },
  { path: 'components/tabs', loadComponent: () => import('./components/tabs/tabs.page').then((m) => m.TabsPage) },
  { path: 'components/tabs/:pestana', redirectTo: 'components/tabs', pathMatch: 'full' },
  { path: 'components/toolbar', loadComponent: () => import('./components/toolbar/toolbar.page').then((m) => m.ToolbarPage) },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
