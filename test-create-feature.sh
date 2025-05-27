#!/bin/bash

# Test script for Aha! Create Feature REST API
# Replace these variables with your actual values
AHA_DOMAIN="yourcompany"  # Replace with your Aha! domain (without .aha.io)
AHA_API_TOKEN="your-api-token-here"  # Replace with your actual API token
RELEASE_ID="PRJ1-R-1"  # Replace with your actual release ID

# Sample REST API call for creating a feature
curl -X POST \
  -H "Authorization: Bearer ${AHA_API_TOKEN}" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{
    "feature": {
      "name": "Test Feature from REST API",
      "workflow_kind": "new",
      "workflow_status": {
        "name": "Under consideration"
      },
      "description": "<p>This is a test feature created via REST API to verify the endpoint works correctly.</p>",
      "assigned_to_user": {
        "email": "test@example.com"
      },
      "tags": "api-test,automation"
    }
  }' \
  "https://${AHA_DOMAIN}.aha.io/api/v1/releases/${RELEASE_ID}/features"

echo ""
echo "---"
echo "Note: Replace AHA_DOMAIN, AHA_API_TOKEN, and RELEASE_ID with your actual values before running this script"
echo "Usage: chmod +x test-create-feature.sh && ./test-create-feature.sh" 