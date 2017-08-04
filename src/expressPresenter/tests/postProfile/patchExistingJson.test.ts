import * as stringToStream from 'string-to-stream';
import {
  JSON_CONTENT_TYPE,
  TEST_ACTIVITY_ID,
  TEST_CLIENT,
  TEST_CONTENT,
  TEST_JSON_CONTENT,
  TEST_OBJECT_CONTENT,
  TEST_PROFILE_ID,
  TEXT_CONTENT_TYPE,
} from '../../../utils/testValues';
import { CLIENT_ERROR_400_HTTP_CODE } from '../../utils/httpCodes';
import setup from '../utils/setup';
import patchContent from './utils/patchContent';
import patchExistingContent from './utils/patchExistingContent';

describe('expressPresenter.postProfile with existing JSON content', () => {
  const { service } = setup();

  const createJsonContent = async () => {
    await service.overwriteProfile({
      activityId: TEST_ACTIVITY_ID,
      client: TEST_CLIENT,
      content: stringToStream(TEST_JSON_CONTENT),
      contentType: JSON_CONTENT_TYPE,
      profileId: TEST_PROFILE_ID,
    });
  };

  it('should error when patching with text content', async () => {
    await createJsonContent();
    await patchContent(TEST_CONTENT, TEXT_CONTENT_TYPE).expect(CLIENT_ERROR_400_HTTP_CODE);
  });

  it('should error when patching with JSON content', async () => {
    await createJsonContent();
    await patchContent(TEST_JSON_CONTENT, JSON_CONTENT_TYPE).expect(CLIENT_ERROR_400_HTTP_CODE);
  });

  it('should error when patching with object content', async () => {
    await createJsonContent();
    await patchExistingContent(TEST_OBJECT_CONTENT, JSON_CONTENT_TYPE, CLIENT_ERROR_400_HTTP_CODE);
  });
});
