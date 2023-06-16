import { createActionGroup, props } from '@ngrx/store';
import {
  IShortLinkListItemDto,
  IShortLinksListDto,
} from './shortlinklist.models';

export const ShortLinkListActions = createActionGroup({
  source: 'ShortLinkList',
  events: {
    List: props<{ query?: string }>(),
  },
});
