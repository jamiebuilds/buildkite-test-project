apt-get -y update
curl -sL https://deb.nodesource.com/setup_10.x | bash -
apt-get install -y nodejs
curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.9.4
npm install bolt --global
