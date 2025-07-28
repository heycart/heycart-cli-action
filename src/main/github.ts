import { debug } from '@actions/core';

import { Octokit } from '@octokit/action';
import { RequestError } from '@octokit/request-error';

export interface GitHubRelease {
    tag_name: string;
    prerelease: boolean;
    assets: Array<{
        name: string;
        browser_download_url: string;
    }>;
}

const octokit = new Octokit();

async function getReleaseTag(tag: string) {
    try {
        const { data } = await octokit.rest.repos.getReleaseByTag({
            owner: 'heycart',
            repo: 'heycart-cli',
            tag,
        });

        return data;
    } catch (error) {
        if (error instanceof RequestError) {
            debug(`Could not fetch release ${tag} with status ${error.status}, ${error.message}`);
        }

        throw error;
    }
}

async function getLatestRelease() {
    try {
        const { data } = await octokit.rest.repos.getLatestRelease({
            owner: 'heycart',
            repo: 'heycart-cli',
        });

        return data;
    } catch (error) {
        if (error instanceof RequestError) {
            debug(`Could not fetch latest release with status ${error.status}, ${error.message}`);
        }

        throw error;
    }
}

export async function getRelease(
    version: string,
) {
    debug(`Fetching release ${version}`);

    if (version === 'latest') {
        return getLatestRelease();
    }

    return getReleaseTag(version);
}
