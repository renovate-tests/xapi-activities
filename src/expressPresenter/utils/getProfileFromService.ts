import { Response } from 'express';
import { get } from 'lodash';
import { xapiHeaderVersion } from '../../utils/constants';
import Config from '../Config';
import getActivityId from './getActivityId';
import getClient from './getClient';
import getProfileId from './getProfileId';
import { OK_200_HTTP_CODE } from './httpCodes';
import validateVersionHeader from './validateVersionHeader';

export interface Options {
  readonly query: any;
  readonly config: Config;
  readonly headers: any;
  readonly res: Response;
}

export default async ({ query, config, headers, res }: Options) => {
  const client = await getClient(config, get(headers, 'authorization', ''));
  validateVersionHeader(get(headers, 'x-experience-api-version'));

  const activityId = getActivityId(get(query, 'activityId'));
  const profileId = getProfileId(get(query, 'profileId'));

  const getProfileResult = await config.service.getProfile({ activityId, client, profileId });

  res.status(OK_200_HTTP_CODE);
  res.setHeader('ETag', `"${getProfileResult.etag}"`);
  res.setHeader('Last-Modified', getProfileResult.updatedAt.toISOString());
  res.setHeader('X-Experience-API-Version', xapiHeaderVersion);
  res.setHeader('Content-Type', getProfileResult.contentType);
  getProfileResult.content.pipe(res);
};
