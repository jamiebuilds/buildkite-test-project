if [ "${BASH_SOURCE[0]}" == "${0}" ]; then
  echo "Error: This script should be run with \`source\`"
  exit 1
fi

if [ ! -x "$(command -v node)" ] || [ "$(node --version)" != "v10.11.0" ]; then
  if [ ! -d ~/.nvm ]; then
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash
  fi
  source ~/.nvm/nvm.sh
  nvm install 10.11.0
fi

if [ ! -x "$(command -v bolt)" ] || [ "$(bolt --version)" != "0.22.4" ]; then
  npm install bolt@0.22.4 --global
fi
