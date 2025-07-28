import globalCacheDir from 'global-cache-dir'
import { saveCache, isFeatureAvailable } from '@actions/cache';
import { existsSync } from 'fs';
import { getCacheKeys } from '../shared/cache';

async function run() {
  delete process.env.GITHUB_TOKEN;

  if (isFeatureAvailable()) {
    const cacheKeys = getCacheKeys();
    const heycartCliCacheDir = await globalCacheDir('heycart-cli');

    if (existsSync(heycartCliCacheDir)) {
      await saveCache(
        [
          heycartCliCacheDir
        ],
        cacheKeys.shift() as string,
        undefined,
        false
      )
    }
  }

  process.exit(0);
}

run();
