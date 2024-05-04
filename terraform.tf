provider "google" {
  project     = "csci5409-a-k8s"
  region      = "northamerica-northeast1"
}

resource "google_container_cluster" "my_cluster" {
  name               = "csci5409"
  location           = "northamerica-northeast1-a"
  initial_node_count = 1

  node_config {
    machine_type = "e2-micro"
    disk_size_gb = 10
    disk_type    = "pd-standard"
    image_type   = "COS_CONTAINERD"
    series       = "E2"
  }

  network    = "default"
  subnetwork = "default"
}