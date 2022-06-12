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
  hiddenMetadataUri: 'ipfs://QmT3sNkYMvnHoVGkKZDNy2wi1MX3Bj5RWn4QxQQd3DE2E1/hidden.json',
  maxSupply: 20,
  whitelistSale: {
    price: 0.039,
    maxMintAmountPerTx: 2,
  },
  preSale: {
    price: 0.049,
    maxMintAmountPerTx: 5,
  },
  publicSale: {
    price: 0.049,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x524a7C740F04fdde6A2C512a785DeDbC030AC27b",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
