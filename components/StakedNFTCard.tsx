import { MediaRenderer, TransactionButton, useReadContract } from "thirdweb/react";
import { NFT_CONTRACT, STAKING_CONTRACT } from "../utils/contracts";
import { getNFT } from "thirdweb/extensions/erc721";
import { client } from "@/app/client";
import { prepareContractCall } from "thirdweb";
import '../public/css/style.css';

type StakedNFTCardProps = {
    tokenId: bigint;
    refetchStakedInfo: () => void;
    refetchOwnedNFTs: () => void;
};

export const StakedNFTCard: React.FC<StakedNFTCardProps> = ({ tokenId, refetchStakedInfo, refetchOwnedNFTs }) => {
    const { data: nft } = useReadContract(
        getNFT,
        {
            contract: NFT_CONTRACT,
            tokenId: tokenId,
        }
    );
    
    return (
       
          
        <div className="swiper-slide">
  <article>
    <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
      <figure className="relative">
        <a href="item.html">
        <MediaRenderer
                client={client}
                src={nft?.metadata.image}
                className="swiper-lazy h-[430px] w-full object-cover"
                style={{
                    borderRadius: "10px",
                    marginBottom: "10px",
                    
                    
                }}
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
                {nft?.metadata.name}
              </span>
            </a>
            <p style={{ margin: "0 10px 10px 10px"}}>{nft?.metadata.name}</p>
            <TransactionButton
                transaction={() => (
                    prepareContractCall({
                        contract: STAKING_CONTRACT,
                        method: "withdraw",
                        params: [[tokenId]]
                    })
                )}
                onTransactionConfirmed={() => {
                    refetchOwnedNFTs();
                    refetchStakedInfo();
                    alert("Withdrawn!");
                }}
                style={{
                    border: "none",
                    backgroundColor: "#333",
                    color: "#fff",
                    padding: "10px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    width: "100%",
                    fontSize: "12px"
                }}
            >Withdraw</TransactionButton>
            </div>
            </div>
        </div>
      </div>
    
  </article>
</div>
    )
};