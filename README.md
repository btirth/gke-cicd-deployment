# Kubernetes and GCP CI/CD Implementation

## Project Overview
 - Developed 2 microservices using JavaScript and Node.js.
 - Created a CI/CD pipeline using Google Cloud Build, Cloud Source Repository, and Artifact Registry to deploy microservices to Google Kubernetes Engine (GKE). Implemented infrastructure as code (IaC) with Terraform to provision GKE clusters.
 - Deployed two microservices on GKE, leveraging Docker for containerization. Configured GKE clusters with a persistent volume to enable data storage and retrieval across containers.


## Technology Overview
 - **Microservices**: `JavaScript`, and `Node.js` for Back-end.
 - **Source Code Management**: `Google Cloud Source Repository`
 - **Artifact Storage**: `Google Artifact Registry` to store Docker images
 - **CI/CD Pipeline**: `GCP Cloud Build` for automated deployment
 - **Persistent Storage**: Attached persistent volumes of `GCP Disk` to GKE clusters for file storage
 - **Infrastructure as Code (IaC)**: Provisioned GKE clusters using `Terraform` 