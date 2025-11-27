#!/bin/bash
set -e

# Configuration
AWS_REGION="us-east-2"
AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
PROJECT_NAME="futureself-demos"
ENVIRONMENT="prod"
ECR_REPO="${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${PROJECT_NAME}-${ENVIRONMENT}"
ECR_REGISTRY="${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com"


echo "Building Docker"
docker build -t ${PROJECT_NAME}:latest .

echo "Tagging"
docker tag ${PROJECT_NAME}:latest ${ECR_REPO}:latest
docker tag ${PROJECT_NAME}:latest ${ECR_REPO}:$(git rev-parse --short HEAD 2>/dev/null || echo "manual")

echo "Logging in to ECR"
aws ecr get-login-password --region ${AWS_REGION} | \
  docker login --username AWS --password-stdin ${ECR_REGISTRY}

echo "Pushing to ECR"
docker push ${ECR_REPO}:latest
docker push ${ECR_REPO}:$(git rev-parse --short HEAD 2>/dev/null || echo "manual")

echo "Forcing new ECS deployment"
aws ecs update-service \
  --cluster ${PROJECT_NAME}-${ENVIRONMENT}-cluster \
  --service ${PROJECT_NAME}-${ENVIRONMENT}-service \
  --force-new-deployment \
  --region ${AWS_REGION}

echo "Deployment complete"
