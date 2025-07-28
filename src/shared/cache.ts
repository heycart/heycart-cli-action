export function getCacheKeys() {
    const restoreKey = `heycart-cli-cache-${process.env.SHOPWARE_CLI_VERSION}`
    return [
        restoreKey
    ]
}
