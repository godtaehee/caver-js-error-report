import Caver from "caver-js";

const currentProviderIsExistedInCaver = () => {
  const caver = new Caver("https://public-node-api.klaytnapi.com/v1/cypress");
  console.log(caver.currentProvider.disconnect);
};

currentProviderIsExistedInCaver();
