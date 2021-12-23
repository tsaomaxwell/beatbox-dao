import sdk from "./1-initialize-sdk.js";

const appModule = sdk.getAppModule(
  "0x8Fbc839DE861B2C4C69399d1B45C34d18CCdb5ce",
);

(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({
      name: "BeatboxDAO's Scene Codex",
      votingTokenAddress: "0xAf1314d1c6a72DFEc073d79635EbBE048daf4E68",
      proposalStartWaitTimeInSeconds: 0,
      proposalVotingTimeInSeconds: 24 * 60 * 60,
      votingQuorumFraction: 0,
      minimumNumberOfTokensNeededToPropose: "1",
    });

    console.log(
      "✅ Successfully deployed vote module, address:",
      voteModule.address,
    );
  } catch (err) {
    console.log("Failed to deploy vote module", err);
  }
})();
