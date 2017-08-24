import HasProfileOptions from '../repoFactory/options/HasProfileOptions';
import HasProfileResult from '../repoFactory/results/HasProfileResult';
import Config from './Config';
declare const _default: (config: Config) => ({client, activityId, profileId}: HasProfileOptions) => Promise<HasProfileResult>;
export default _default;
