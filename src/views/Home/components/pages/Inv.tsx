import { NavLink } from "react-router-dom";

import IconIV from '../../../../assets/pixelwork/icon-source-iv.png';
import InvImg1 from '../../../../assets/pixelwork/inv-img-1.png';
import InvImg2 from '../../../../assets/pixelwork/inv-img-2.png';

function Inv() {
    return (
        <section className="inv">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="subheading center">Invokersnft</div>
                        <div className="heading center">$inv roadmap</div>
                    </div>
                </div>
                <div className="row inv-row-1">
                    <div className="col-xl-8">
                        <div className="roadmap-timeline">
                            <div className="roadmap-item">
                                <div className="roadmap-item-param"><u>Phase 1:</u> InvokersNFT Collection</div>
                                <div className="description">
                                    * Each InvokersNFT can claim <span className="text-white">10 $INV/Day</span>, with Ultra Invokers claiming
                                    <span className="text-white">20 $INV/Day</span>
                                </div>
                            </div>
                            <div className="roadmap-item">
                                <div className="roadmap-item-param"><u>Phase 2:</u> Breeding Invokers Elves Collection</div>
                                <div className="description">
                                    * Holders will be able to Breed / Mutate their InvokersNFT into an <span className="text-white">
                                    Invokers Elves NFT</span> for 500 $INV, and burn InvokersNFT to decrease supply. 
                                    Invokers Elves will claim <span className="text-white">12.5 $INV/Day</span>, with Ultra Elves claiming <span className="text-white">
                                    25 $INV/Day</span>
                                </div>
                            </div>
                            <div className="roadmap-item">
                                <div className="roadmap-item-param"><u>Phase 3:</u> Breeding Invokers Spellbooks Collection</div>
                                <div className="description">
                                    * Holders will be able to Breed / Mutate their InvokersNFT into an Invokers Spellbooks NFT
                                    for 500 $INV, and burn InvokersNFT to decrease supply. Invokers Elves will claim 
                                    <span className="text-white">15 $INV/Day,</span>
                                    with Ultra Spellbooks claiming <span className="text-white">30 $INV/Day</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <img src={IconIV} className="inv-img" alt="" />
                    </div>
                </div>
                <div className="row inv-row-2">
                    <div className="col-lg-7 col-md-12">
                        <div className="inv-inno">
                            <img src={InvImg1} alt="" />
                            <div className="inv-text">
                                <div className='inv-title'>Innovative $INV Claiming System</div>
                                <div className="inv-row"><span>Secure:</span> NFT Stays in your wallet</div>
                                <div className="inv-row"><span>Extremely Scarce:</span> Supply is ONLY minted once you Claim and must be claimed daily</div>
                                <div className="inv-row"><span>Revolutionary:</span> New to the Solana Ecosystem, previously seen in ETH projects such as Cyberkongz</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div className="inv-inno l2">
                            <img src={InvImg2} alt="" />
                            <div className="inv-text">
                                <div className='inv-title'>How to Claim</div>
                                <div className="inv-row">* Go to: <NavLink to="/claim">https://www.invokersnft.com/claim</NavLink></div>
                                <div className="inv-row">* Connect your Solana Wallet</div>
                                <div className="inv-row">* Click on <span className="text-white">Claim & Approve Transaction</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Inv
