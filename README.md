# Visualisation Web App

[![BuildStatus](https://travis-ci.org/stevenalexander/CognitiveServicesPipelineWebApp.svg?branch=master)](https://travis-ci.org/stevenalexander/CognitiveServicesPipelineWebApp?branch=master)

Triggers adding image urls to the queue to be processed by cognitive services and visualises the results.

## Requires

* [Azure subscription](https://azure.microsoft.com/en-us/) (for hosting and cognitive services)
* [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest) (for deploying)
* [Node.js](https://nodejs.org/en/)

## Run

```
npm install
npm test
npm start
# runs on localhost:3000 by default
```

## Deployment

In Azure CLI:

```
az login
az webapp deployment source config --name cognitiveservicespipeline --resource-group CognitiveServicesPipeline --repo-url https://github.com/stevenalexander/CognitiveServicesPipelineWebApp.git --branch master --manual-integration
```