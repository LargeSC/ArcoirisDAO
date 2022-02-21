import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xC4f5D0b8a74d1Ff1e4cEa068f7215a4EA0c13d8f",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Glitter",
        description: "Este NFT te dara acceso al ArcoirisDAO",
        image: readFileSync("scripts/assets/GlitterNFT.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()