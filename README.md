# HeyCart CLI GitHub Action

Installs HeyCart CLI in your GitHub Actions.


## Prerequisites

- A GitHub repository using GitHub Actions.
- Recommended: Use on a Linux runner (e.g., `ubuntu-latest`).

## Setup

Create a file in your repository (e.g., `.github/workflows/heycart-cli.yml`) with the following contents:


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
