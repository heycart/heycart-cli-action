export function getCacheKeys() {
    const restoreKey = `heycart-cli-cache-${process.env.HEYCART_CLI_VERSION}`
    return [
        restoreKey
    ]
}
