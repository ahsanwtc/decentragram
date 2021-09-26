// eslint-disable-next-line no-undef
const Decentragram = artifacts.require('Decentragram');

module.exports = deployer => {
  deployer.deploy(Decentragram);
};