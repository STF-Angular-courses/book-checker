import { Route, UrlMatchResult, UrlSegment, UrlSegmentGroup } from '@angular/router';

export function testMatcher(segments: UrlSegment[], group: UrlSegmentGroup, route: Route) {
  const check = segments[0] && segments[0].path === 'test';

  if (!check) {
    return null;
  }

  const params: {
    [name: string]: UrlSegment
  } = {};

  for (let i = 1; i < segments.length; i += 2) {
    params[segments[i].path] = segments[i + 1] || new UrlSegment('', {});
  }

  const response: UrlMatchResult = {
    consumed: segments,
    posParams: params,
  };

  return response;
}
