# HeyCart CLI GitHub Action

Installs HeyCart CLI in your GitHub Actions.

## Usage

```yaml
name: heycart-cli

on:
  pull_request:
  push:

permissions:
  contents: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: Install HeyCart CLI
        uses: heycart/heycart-cli-action@v1

      - name: Build and Package Extension
        run: heycart-cli extension zip .
```
