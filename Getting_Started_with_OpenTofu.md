# Getting Started with OpenTofu

Welcome to OpenTofu! This guide will help you install OpenTofu and get started with your first project.

---

## What is OpenTofu?

OpenTofu is an open-source infrastructure-as-code tool that allows you to define and manage cloud and on-premises resources using human-readable configuration files. It is a community-driven fork of Terraform, designed to remain open-source and vendor-neutral.

---

## Installation

### Step 1: Download OpenTofu

1. Visit the [OpenTofu GitHub Releases page](https://github.com/opentofu/opentofu/releases).
2. Select the appropriate release for your platform. Here are some quick links:

   | Platform/Device                                                                 | Download Link                                                                                                                                    |
   |---------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
   | **Desktop Windows computer** (64-bit)                                          | [tofu_windows_amd64.zip](https://github.com/opentofu/opentofu/releases/latest/download/tofu_windows_amd64.zip)                                   |
   | **MacOS** (MacBook M1 or higher; ARM64)                                        | [tofu_darwin_arm64.tar.gz](https://github.com/opentofu/opentofu/releases/latest/download/tofu_darwin_arm64.tar.gz)                               |
   | **MacOS** (MacBook pre-M1; AMD64)                                              | [tofu_darwin_amd64.tar.gz](https://github.com/opentofu/opentofu/releases/latest/download/tofu_darwin_amd64.tar.gz)                               |
   | **Intel/AMD Linux computer or server** (AMD64)                                 | [tofu_linux_amd64.tar.gz](https://github.com/opentofu/opentofu/releases/latest/download/tofu_linux_amd64.tar.gz)                                 |
   | **ARM-based Linux computer** (e.g., Raspberry Pi 3 or higher; ARM64)           | [tofu_linux_arm64.tar.gz](https://github.com/opentofu/opentofu/releases/latest/download/tofu_linux_arm64.tar.gz)                                 |

---

### Step 2: Install OpenTofu

1. **Unpack the downloaded archive**:

   ```bash
   tar -xzf tofu_<platform>.tar.gz
   ```bash
   ```

---

## Verifying Artifacts

### Verification of Artifact Checksums

To verify the artifact checksums, use cosign with the following command:

```bash
cosign verify-blob \
  --certificate-identity 'https://github.com/opentofu/opentofu/.github/workflows/release.yml@refs/tags/vX.X.X' \
  --certificate-oidc-issuer 'https://token.actions.githubusercontent.com' \
  --cert 'https://github.com/opentofu/opentofu/releases/download/vX.X.X/opentofu_X.X.X_SHA256SUMS.pem' \
  --signature 'https://github.com/opentofu/opentofu/releases/download/vX.X.X/opentofu_X.X.X_SHA256SUMS.sig' \
  ./opentofu_X.X.X_SHA256SUMS
```

Replace vX.X.X with the appropriate version number.

### Verification of Docker Images

To verify the Docker images, use cosign with the following command:

```bash
cosign verify \
  --certificate-identity 'https://github.com/opentofu/opentofu/.github/workflows/release.yml@refs/tags/vX.X.X' \
  --certificate-oidc-issuer 'https://token.actions.githubusercontent.com' \
  the-image
```

Replace the-image with the appropriate Docker image name.

---

## Your First OpenTofu Project

### Step 1: Create a New Directory

Create a directory for your project:

```bash
mkdir my-opentofu-project
cd my-opentofu-project
```

### Step 2: Write a Configuration File

Create a file named `main.tf` with the following content:

```hcl
provider "aws" {
  region = "us-west-2"
}

resource "aws_instance" "example" {
  ami           = "ami-0c55b159cbfafe1f0" # Replace with a valid AMI ID
  instance_type = "t2.micro"
}
```

### Step 3: Initialize the Project

Run the following command to initialize the project and download the necessary provider plugins:

```bash
tofu init
```

### Step 4: Plan the Infrastructure

Generate an execution plan to preview the changes:

```bash
tofu plan
```

### Step 5: Apply the Configuration

Apply the configuration to create the resources:

```bash
tofu apply
```

---

## Additional Resources

- [OpenTofu Documentation](https://github.com/opentofu/opentofu)
- [Migration Guide from Terraform](https://github.com/opentofu/opentofu/blob/main/docs/migration-guide.md)
- [Community Slack](https://opentofu.slack.com)

You're now ready to start using OpenTofu! If you encounter any issues, feel free to reach out to the community or open an issue on the OpenTofu GitHub repository.
