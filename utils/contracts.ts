import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";

const nftContractAddress = "0xBaf5b5B6b0F59646BF96E8EbD554413817229248";
const rewardTokenContractAddress = "0x0e88A6839cf02f23fFE16E23cBB723FE066f8b14";
const stakingContractAddress = "0x370657FbbA2EA7d4f5b25B0abC59C279C6ecC311";

export const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: nftContractAddress
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: stakingABI
});