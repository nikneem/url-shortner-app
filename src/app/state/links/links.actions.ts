import { createActionGroup, props } from '@ngrx/store';
import { ShortLinkDetailsDto } from './links.models';

export const ShortLinkActions = createActionGroup({
  source: 'ShortLink',
  events: {
    Add: props<{ endpointUrl: string }>(),
  },
});

export const ShortLinkApiActions = createActionGroup({
  source: 'ShortLink API',
  events: {
    'Retrieved Book List': props<{
      shortLinks: ReadonlyArray<ShortLinkDetailsDto>;
    }>(),
  },
});
