import Benefit1 from '../../../assets/pixelwork/benefit-1.png';
import Benefit2 from '../../../assets/pixelwork/benefit-2.png';
import Benefit3 from '../../../assets/pixelwork/benefit-3.png';
import Benefit4 from '../../../assets/pixelwork/benefit-4.png';

function Benefits() {
  return (
    <section className="benefits" id="benefits">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="subheading center">Rewards</div>
                    <div className="heading center">Perks for holders</div>
                </div>
            </div>
            <div className="row benefits-list">
                <div className="col-xl-6">
                    <div className="benefit-item">
                        <img src={Benefit1} alt="" />
                        <div className="benefit-name">$INV daily yield</div>
                        <div className="benefit-description">
                            - First of its kind NFT staking platform where NFTs do not leave holders’ wallet<br/>
                            - Initial Liquidity added by Invokers team of $100,000 on Raydium Permissionless Pools, $INV priced
                            at $0.5 at launch <br/>
                            - All Holders of InvokersNFTs will be able to stake their NFTs to receive 10 $INV/Day<br/>
                            - Ultra Invokers (Rarest 20 NFTs) receive 20 $INV/Day
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="benefit-item">
                        <img src={Benefit2} alt="" />
                        <div className="benefit-name">If you hold 10+ invokers nfts:</div>
                        <div className="benefit-description">
                            - DAO Membership. You get to decide how the project runs when it comes to Airdrops, future Sale events, 
                            and most importantly,<br/> decide Invoker MMORPG’s roadmap & future<br/>
                            - Voting rights on future of $INV token<br/>
                            - Exclusive DAO private channel<br/>
                            - Eligibility to join Devs/Artists calls
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="benefit-item">
                        <img src={Benefit3} alt="" />
                        <div className="benefit-name">If you hold 10+ invokers nfts:</div>
                        <div className="benefit-description">
                            - Eligibility to join the InvokersDAO by nomination of DAO member’s<br/>
                            - 5 Extra Entries into into All Raffles<br/>
                            - Exclusive Holders private channel
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="benefit-item">
                        <img src={Benefit4} alt="" />
                        <div className="benefit-name">If you hold 1+ invokers nfts:</div>
                        <div className="benefit-description">
                            - Entries into into All Raffles<br/>
                            - Exclusive Holders private channel
                        </div>
                    </div>
                </div>
            </div>
            <div className="row benefits-information">
                <div className="col-xl-12">
                    <div className="benefits-info-title">More Perks:</div>
                    <div className="description">
                        - MMORPG: All NFTs play a crucial part in the upcoming Invokers MMORPG! NFTs are Playable Characters in Invokers MMORPG launching Q1 2022<br/>
                        - Full Gaming setup Monthly Raffle worth $10,000<br/>
                        - Invokers Gaming Summit in the HyperX Arena in the Luxor Hotel, Las Vegas, Nevada 
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Benefits
