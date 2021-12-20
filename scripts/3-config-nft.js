import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
    "0x1400a5B2E26F332822b2e7DbFC60E41843177D1A",
);

(async () => {
try {
    await bundleDrop.createBatch([
    {
        name: "your own shure sm7b",
        description: "This NFT will give you access to BeatboxDAO!",
        image: readFileSync("scripts/assets/shure.png"),
    },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
} catch (error) {
    console.error("failed to create the new NFT", error);
}
})()