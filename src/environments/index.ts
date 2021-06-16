import devEnv from './environment.develop';
import stagingEnv from './environment.staging';
import prodEnv from './environment.prod';

const nodeENV = import.meta.env.VITE_ENV;
const varEnd = nodeENV === 'production' ? prodEnv : nodeENV === 'staging' ? stagingEnv : devEnv;
const environmentVariable = {
  domain: varEnd.apiUrl,
  env: varEnd.env,
  faceBookAppId: varEnd.faceBookAppId,
  production: varEnd.production,
  version: varEnd.version,
  nodeENV,
  varEnd,
};
export default environmentVariable;
