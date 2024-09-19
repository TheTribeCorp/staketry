import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";

const nftContractAddress = "0xC273D212869B8C89b764220296A74E13dDb40470";
const rewardTokenContractAddress = "0x30410e8f654e8CfDE6A270e222eF168C87d7012F";
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