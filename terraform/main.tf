terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }

  backend "s3" {
    bucket = "terraform-state-2345"
    key    = "terraform-aws-demo/terraform.tfstate"
    region = "ap-southeast-2"
  }
}

provider "aws" {
  region = "ap-southeast-2"
}


resource "aws_s3_bucket" "terraform_demo" {
  bucket = "my-terraform-cicd-demo-12345"
}