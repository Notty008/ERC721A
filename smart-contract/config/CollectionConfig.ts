import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'MallowFrens',
  tokenName: 'MallowFrens',
  tokenSymbol: 'MF',
  hiddenMetadataUri: 'ipfs://QmbyynYSDZZoFCFMNjJ3RMKK6ca9EqiYymfot1ieYywgik/hidden.json',
  maxSupply: 3333,
  whitelistSale: {
    price: 0.039,
    maxMintAmountPerTx: 10,
  },
  publicSale: {
    price: 0.039,
    maxMintAmountPerTx: 20,
  },
  contractAddress: "0x19f6386ce5102F962791f3328595c07a3615dCB7",
  marketplaceIdentifier: 'MallowFrens',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
