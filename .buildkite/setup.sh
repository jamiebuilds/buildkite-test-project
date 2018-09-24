apt-get -y update
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.8.0
