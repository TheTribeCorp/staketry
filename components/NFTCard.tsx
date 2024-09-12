import { client } from "@/app/client";
import { NFT, prepareContractCall } from "thirdweb";
import { MediaRenderer, TransactionButton } from "thirdweb/react";
import { NFT_CONTRACT, STAKING_CONTRACT } from "../utils/contracts";
import { useState } from "react";
import { approve } from "thirdweb/extensions/erc721";
import '../public/css/style.css';

type OwnedNFTsProps = {
    nft: NFT;
    refetch: () => void;
    refecthStakedInfo: () => void;
};

export const NFTCard = ({ nft, refetch, refecthStakedInfo }: OwnedNFTsProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isApproved, setIsApproved] = useState(false);

    return (
        <div style={{margin:"10px"}}>
        <div className="swiper-slide">
  <article>
    <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
      <figure className="relative">
        <a href="item.html">
          <MediaRenderer
            client={client}
            src={nft.metadata.image}
            alt="item 1"
            className="swiper-lazy h-[430px] w-full object-cover"
          />
          <div className="swiper-lazy-preloader"></div>
        </a>
      </figure>
      <div className="p-6">
        <div className="flex">
          <a href="user.html" className="shrink-0">
            <img
              src="img/avatars/avatar_17_rounded.jpg"
              alt="avatar"
              className="mr-4 h-10 w-10 rounded-full"
            />
          </a>
          <div>
            <a href="item.html" className="block">
              <span className="font-display text-lg leading-none text-jacarta-700 hover:text-accent dark:text-white">
                {nft.metadata.name}
              </span>
            </a>
            <button
                onClick={() => setIsModalOpen(true)}
                style={{
                    border: "none",
                    backgroundColor: "#333",
                    color: "#fff",
                    padding: "10px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    width: "100%"
                }}
            >Stake</button>
          </div>
        </div>
      </div>
    </div>
  </article>
</div>

            {isModalOpen && (
                <div style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <div style={{
                        minWidth: "300px",
                        backgroundColor: "#222",
                        padding: "20px",
                        borderRadius: "10px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <div style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            width: "100%"
                        }}>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                style={{
                                    border: "none",
                                    backgroundColor: "transparent",
                                    color: "#fff",
                                    cursor: "pointer"
                                }}
                            >Close</button>
                        </div>
                        <h3 style={{ margin: "10px 0" }}>You about to stake:</h3>
                        <MediaRenderer
                            client={client}
                            src={nft.metadata.image}
                            style={{
                                borderRadius: "10px",
                                marginBottom: "10px"
                            }}
                        />
                        {!isApproved ? (
                            <TransactionButton
                                transaction={() => (
                                    approve({
                                        contract: NFT_CONTRACT,
                                        to: STAKING_CONTRACT.address,
                                        tokenId: nft.id
                                    })
                                )}
                                style={{
                                    width: "100%"
                                }}
                                onTransactionConfirmed={() => setIsApproved(true)}
                            >Approve</TransactionButton>
                        ) : (
                            <TransactionButton
                                transaction={() => (
                                    prepareContractCall({
                                        contract: STAKING_CONTRACT,
                                        method: "stake",
                                        params: [[nft.id]]
                                    })
                                )}
                                onTransactionConfirmed={() => {
                                    alert("Staked!");
                                    setIsModalOpen(false);
                                    refetch();
                                    refecthStakedInfo();
                                }}
                                style={{
                                    width: "100%"
                                }}
                            >Stake</TransactionButton>
                        )}
                        
                    </div>
                </div>
            )}
        </div>
    )
};