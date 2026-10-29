
{
  "name": "Python and R Workspace",
  "image": "mcr.microsoft.com/devcontainers/universal:latest",
  "features": {
    "ghcr.io/rocker-org/devcontainer-features/r-rig:1": {
      "vscodeRSupport": "full",
      "installREnv": true,
      "installRadian": true
    }
  },
  "customizations": {
    "vscode": {
      "extensions": [
        "ms-python.python",
        "ms-toolsai.jupyter",
        "REditorSupport.r"
      ]
    }
  }
}
