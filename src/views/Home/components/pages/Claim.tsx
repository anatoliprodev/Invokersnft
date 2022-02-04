import React from "react";
import {useState} from 'react';
import {useWallet, useConnection } from '@solana/wallet-adapter-react';
import {claim} from "../../../../utils/stake"
import CharLeft from '../../../../assets/pixelwork/char-left.png';
import CharRight from '../../../../assets/pixelwork/char-right.png';
import '@solana/wallet-adapter-react-ui/styles.css';
import Ok from '../../../../assets/pixelwork/check-ok.png';
import Fail from '../../../../assets/pixelwork/check-fail.png';
import {
    NavLink
} from "react-router-dom";
import { 
WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import LogoNav from '../../../../assets/pixelwork/logo-nav.png';

const slogans = [
    "Already claimed",
    "No Invoker NFT",
    "Something wrong"
]
function Claim () {
    const [result, setResult] = useState<any>({result:true, number:0});
    const wallet = useWallet();
    const connection = useConnection();

    const claimINV = async (e: any) => {
        if (wallet.connected) {
            const re = await claim(wallet, connection.connection);
            console.log(re)
            setResult(re);
            e.preventDefault();
            document.getElementById('modal-claim')?.classList.add('open');

            document.getElementById('modal-claim')?.addEventListener('click', function() {
                document.getElementById('modal-claim')?.classList.remove('open');
            })
        }
    }
    
    return (
        <section className="claim">
            <nav className="nav">
            <div className="container">
                <div className="row no-gutters">
                    <a className="logo" href="/#home">
                        <img src={LogoNav} alt="Invokers" />
                    </a>
                    <div className="socials">
                        <a href="https://discord.gg/HrS2sfJaED" className="icon-discord"></a>
                        <a href="https://www.twitter.com/InvokersNFT" className="icon-twitter"></a>
                        <a href="https://invokersnft.medium.com/invokers-plot-outline-and-characters-b3999075903e" className="icon-medium"></a>
                    </div>
                    <div className="menu">
                        <div className="menu-item">
                            <a href="/#about">About</a>
                        </div>
                        <div className="menu-item">
                            <a href="/#trailer">Trailer</a>
                        </div>
                        <div className="menu-item">
                            <a href="/#roadmap">Roadmap</a>
                        </div>
                        <div className="menu-item">
                            <a href="/#benefits">Benefits</a>
                        </div>
                        <div className="menu-item">
                            <a href="/#team">The Team</a>
                        </div>
                        <div className="menu-item">
                            <NavLink to="/$inv">$INV</NavLink>
                        </div>
                        <div className="menu-item active">
                            <NavLink to="/claim">Claim</NavLink>
                        </div>
                        <div className="menu-item">
                            <NavLink to="/rarities">Rarities</NavLink>
                        </div>
                        <div className="menu-item">
                            <a href="/GDD_v1.pdf">GDD</a>
                        </div>
                        <div className="menu-item mobile-only">
                            <WalletMultiButton>{wallet.connected ? `${wallet.publicKey?.toBase58().slice(0,4)}....${wallet.publicKey?.toBase58().slice(-5)}` : `Connect Wallet`}</WalletMultiButton>
                        </div>
                    </div>
                    <div className="wallet">
                        <WalletMultiButton>{wallet.connected ? `${wallet.publicKey?.toBase58().slice(0,4)}....${wallet.publicKey?.toBase58().slice(-5)}` : `Connect Wallet`}</WalletMultiButton>
                    </div>
                    <div className="hamburger">
                        <svg fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 23 23" width="32px" height="32px"><path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/></svg>
                    </div>
                </div>
            </div>
        </nav>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3">
                        <img className="char-left" src={CharLeft} alt="" />
                    </div>
                    <div className="col-xl-6 claim-content">
                        <div className="subheading center">Invokersnft</div>
                        <div className="heading center">Claim your $inv</div>
                        <div className="description">
                            - To Claim <span className="text-important">$INV</span>, please <span className="text-white text-underline">connect your wallet</span>.<br/>
                            - For each InvokersNFT, holders can claim 10 $INV per 24 hours<br/>
                            - Ultra Invokers claim 20 <span className="text-important">$INV</span> per 24 hours<br/>
                            - For any questions or concerns, please visit <span className="text-white text-underline">InvokersNFT Discord</span> and create a <span className="text-white text-underline">#Support Ticket</span>
                        </div>
                        <a className="btn-medium" id="claim" onClick={claimINV}>Claim $INV</a>
                    </div>
                    <div className="col-xl-3">
                        <img src={CharRight} className="char-right" alt="" />
                    </div>
                </div>
            </div>
            <div className="overlay" id="modal-claim">
                <div className="modal">
                    <img src={result.result ? Ok : Fail} alt="ok" />
                    {
                        result.result ?
                        <div className="modal-text">
                            <strong>Great!</strong> Succesfully claimed!<br/>
                            <a href="#" className="btn-medium">Thanks!</a>
                        </div> :
                        <div className="modal-text">
                            <strong>Oops!</strong> Claim failed!<br/>
                            <a href="#" className="btn-medium">{slogans[result.number]}</a>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default Claim
