#!/bin/bash
set -e

AWS_REGION="us-east-2"
AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
PROJECT_NAME="futureself-frontend"
ENVIRONMENT="prod"
ECR_REPO="${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${PROJECT_NAME}-${ENVIRONMENT}"

echo "Starting deployment..."

# Docker image
echo "Building Docker image..."
docker build -t ${PROJECT_NAME}:latest .

echo "Tagging image..."
docker tag ${PROJECT_NAME}:latest ${ECR_REPO}:latest
docker tag ${PROJECT_NAME}:latest ${ECR_REPO}:$(git rev-parse --short HEAD)

echo "Logging in to ECR..."
aws ecr get-login-password --region ${AWS_REGION} | \
  docker login --username AWS --password-stdin ${ECR_REPO}

echo "Pushing to ECR..."
docker push ${ECR_REPO}:latest
docker push ${ECR_REPO}:$(git rev-parse --short HEAD)

echo "Forcing new ECS deployment..."
aws ecs update-service \
  --cluster ${PROJECT_NAME}-${ENVIRONMENT}-cluster \
  --service ${PROJECT_NAME}-${ENVIRONMENT}-service \
  --force-new-deployment \
  --region ${AWS_REGION}

echo "Deployment complete"
