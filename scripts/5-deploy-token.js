import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x8Fbc839DE861B2C4C69399d1B45C34d18CCdb5ce");

(async () => {
    try {
      const tokenModule = await app.deployTokenModule({
        name: "BeatboxDAO Governance Token",
        symbol: "ESH",
      });
      console.log(
        "✅ Successfully deployed token module, address:",
        tokenModule.address,
      );
    } catch (error) {
      console.error("failed to deploy token module", error);
    }
  })();