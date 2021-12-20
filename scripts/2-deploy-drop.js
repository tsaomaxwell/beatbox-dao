import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x8Fbc839DE861B2C4C69399d1B45C34d18CCdb5ce");

(async () => {
    try {
      const bundleDropModule = await app.deployBundleDropModule({
        name: "BeatboxDAO Membership",
        description: "A DAO for eshers worldwide.",
        image: readFileSync("scripts/assets/BeatboxDAO.png"),
        primarySaleRecipientAddress: ethers.constants.AddressZero,
      });
      
      console.log(
        "✅ Successfully deployed bundleDrop module, address:",
        bundleDropModule.address,
      );
      console.log(
        "✅ bundleDrop metadata:",
        await bundleDropModule.getMetadata(),
      );
    } catch (error) {
      console.log("failed to deploy bundleDrop module", error);
    }
  })()