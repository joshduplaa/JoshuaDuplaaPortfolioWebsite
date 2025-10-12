#!/bin/bash
set -e
echo "Launching Kubernetes environment..."
# Example workflow
if ! kubectl get ns user-env >/dev/null 2>&1; then
  echo "Creating cluster..."
  gcloud container clusters create my-cluster --zone us-central1-a
  kubectl create namespace user-env
fi
kubectl apply -f deployment.yaml -n user-env
