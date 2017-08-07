import * as stringToStream from 'string-to-stream';
import ClientModel from '../../../models/ClientModel';
import service from '../../../utils/testService';
import {
  JSON_CONTENT_TYPE,
  TEST_ACTIVITY_ID,
  TEST_OBJECT_CONTENT,
  TEST_PROFILE_ID,
} from '../../../utils/testValues';

export default async (client: ClientModel) => {
  await service.patchProfile({
    activityId: TEST_ACTIVITY_ID,
    client,
    content: stringToStream(TEST_OBJECT_CONTENT),
    contentType: JSON_CONTENT_TYPE,
    profileId: TEST_PROFILE_ID,
  });
};
