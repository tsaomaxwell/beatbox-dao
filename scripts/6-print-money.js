import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
    "0xAf1314d1c6a72DFEc073d79635EbBE048daf4E68",
);

(async () => {
    try {
      const amount = 1_420_000;
      const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);
      // Interact with your deployed ERC-20 contract and mint the tokens!
      await tokenModule.mint(amountWith18Decimals);
      const totalSupply = await tokenModule.totalSupply();
      
      console.log(
        "✅ There now is",
        ethers.utils.formatUnits(totalSupply, 18),
        "$ESH in circulation",
      );
    } catch (error) {
      console.error("Failed to print money", error);
    }
  })();