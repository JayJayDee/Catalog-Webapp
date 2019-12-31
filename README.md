# Catalog-Webapp
Simple web service for distributing PDF files as a image slide show.

written with express, AWS DynamoDB(backend), Vue.js(frontend).

## How to run (development mode)
```bash
npm install
npm run dev
```
## Example configuration
you can supply configuration like below:
```bash
# Frontend Environment Variables
VUE_APP_API_BASE=http://127.0.0.1:3000 # API server baseURL

# Backend Environment Variables
HTTP_PORT=api server port
AWS_ACCESS_KEY_ID= AWS access_key_id # for DynamoDB
AWS_SECRET_ACCESS_KEY= AWS secret_access_key
AWS_REGION= AWS region
```

## How to deploy
TBD