import Unauthorised from 'jscommons/dist/errors/Unauthorised';
import ClientModel from '../models/ClientModel';
import GetClientOptions from '../repoFactory/options/GetClientOptions';
import GetClientResult from '../repoFactory/results/GetClientResult';
import Config from './Config';

export default (config: Config) => {
  return async (opts: GetClientOptions): Promise<GetClientResult> => {
    try {
      const json = await fetch(config.llClientInfoEndpoint, {
        headers: {
          Authorization: opts.authToken,
        },
      }).then((res) => {
        return res.json();
      });

      const client: ClientModel = {
        isTrusted: json.isTrusted as boolean,
        lrs_id: json.lrs_id as string,
        organisation: json.organisation as string,
        scopes: json.scopes as string[],
      };
      return { client };
    } catch (err) {
      throw new Unauthorised();
    }
  };
};
