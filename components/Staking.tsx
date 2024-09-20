'use client';

import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { ConnectButton, TransactionButton, useActiveAccount, useReadContract } from "thirdweb/react";
import { StakeRewards } from "./StakeRewards";
import { NFT_CONTRACT, STAKING_CONTRACT } from "../src/app/utils/contracts";
import { NFT } from "thirdweb";
import { useEffect, useState } from "react";
import { claimTo, getNFTs, ownerOf, totalSupply } from "thirdweb/extensions/erc721";
import { NFTCard } from "./NFTCard";
import { StakedNFTCard } from "./StakedNFTCard";
import '../public/css/style.css';

export const Staking = () => {
    const account = useActiveAccount();

    const [ownedNFTs, setOwnedNFTs] = useState<NFT[]>([]);
    
    const getOwnedNFTs = async () => {
        let ownedNFTs: NFT[] = [];

        const totalNFTSupply = await totalSupply({
            contract: NFT_CONTRACT
        });
        const nfts = await getNFTs({
            contract: NFT_CONTRACT,
            start: 0,
            count: parseInt(totalNFTSupply.toString()),
        });
        
        for (let nft of nfts) {
            const owner = await ownerOf({
                contract: NFT_CONTRACT,
                tokenId: nft.id,
            });
            if (owner === account?.address) {
                ownedNFTs.push(nft);
            }
        }
        setOwnedNFTs(ownedNFTs);
    };
    
    useEffect(() => {
        if(account) {
            getOwnedNFTs();
        }
    }, [account]);

    const {
        data: stakedInfo,
        refetch: refetchStakedInfo,
    } = useReadContract({
        contract: STAKING_CONTRACT,
        method: "getStakeInfo",
        params: [account?.address || ""],
    });
    
    if(account) {
        return (
        <div className="container">
            <div className="py-24 text-center">
              <h1 className ="mb-6 font-display text-5xl text-jacarta-700 dark:text-white lg:text-6xl xl:text-7xl">
                Trump Hair Legacy.
              </h1>
             
              
                <div className="inline-flex space-x-4">
             
             
                <ConnectButton
                    client={client}
                    chain={chain}
                /> 
               <TransactionButton
                        transaction={() => (
                            claimTo({
                                contract: NFT_CONTRACT,
                                to: account?.address || "",
                                quantity: BigInt(1)
                            })
                        )}
                        onTransactionConfirmed={() => {
                            alert("NFT claimed!");
                            getOwnedNFTs();
                        }}
                        
                    >Mint NFT</TransactionButton>
             
               </div>
            </div>
                <hr style={{
                    width: "100%",
                    border: "1px solid #333"
                }}/>
                <div style={{ 
                    margin: "20px 0",
                    width: "100%"
                }}>
                    <h2>Owned NFTs</h2>
                    <div className="relative">
                    <div className="swiper card-slider-3-columns !pb-5">
                    <div className="swiper-wrapper">
                          {ownedNFTs && ownedNFTs.length > 0 ? (
                            ownedNFTs.map((nft) => (
                                <NFTCard
                                    key={6}
                                    nft={nft}
                                    refetch={getOwnedNFTs}
                                    refecthStakedInfo={refetchStakedInfo}
                                />
                            ))
                        ) : (
                            <p>You own 0 NFTs</p>
                        )}</div>
                        </div>
                    </div>
                </div>
                <hr style={{
                    width: "100%",
                    border: "1px solid #333"
                }}/>
                <div style={{ margin: "20px 0" }}>
                    <h2>Staked NFTs</h2>
                    <div className="relative">
                    <div className="swiper card-slider-3-columns !pb-5">
                    <div className="swiper-wrapper">
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                        {stakedInfo && stakedInfo[0].length > 0 ? (
                            stakedInfo[0].map((nft: any, index: number) => (
                                <StakedNFTCard
                                    key={index}
                                    tokenId={nft}
                                    refetchStakedInfo={refetchStakedInfo}
                                    refetchOwnedNFTs={getOwnedNFTs}
                                />
                            ))
                        ) : (
                            <p style={{ margin: "20px" }}>No NFTs staked</p>
                        )}</div>
                        </div>
                    </div>
                    </div>
                </div>
                <hr style={{
                    width: "100%",
                    border: "1px solid #333"
                }}/>
                <StakeRewards />  
        </div>
        
        );
    }
};