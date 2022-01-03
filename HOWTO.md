# Env

```
export PINNING_SERVICE_KEY="Paste your nft.storage JWT token inside the quotes!"
export PINNING_SERVICE_NAME="pinata"
export PINNING_SERVICE_ENDPOINT="https://api.pinata.cloud/psa"
```

# Testing on testnet

- add mumbai testnet to metamask
- connect metamask to the polygon dev wallet, https://wallet-dev.polygon.technology/
- get some free testnet MATIC tokens at https://faucet.polygon.technology/
- set defaultNetwork to matic_testnet in hardhat.config.js, set private key.
- run `npx go-ipfs init`, then `npx go-ipfs daemon`
- compile contract: `npx hardhat compile`
- save previous `minty-deployment.json` if it exists
- deploy contract: `npx minty deploy --name "urr urr urr" --symbol URR`
- examine transaction on https://mumbai.polygonscan.com/
- mint a token `minty mint urr1.png --name "urr #1" --description "First urr" --animation urr1.mp4`
- pin assets `minty pin 1`

# Deploy to mainnet

- set defaultNetwork to matic_mainnet in hardhat.config.js, set private key.
- save previous `minty-deployment.json` if it exists
- deploy contract: `npx minty deploy --name "urr urr urr" --symbol URR`
- examine transaction on https://mumbai.polygonscan.com/
- mint a token `minty mint urr1.png --name "urr #1" --description "First urr" --animation urr1.mp4`
- pin assets `minty pin 1`
