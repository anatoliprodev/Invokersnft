import React, { useState, useEffect } from 'react'

import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
// material-ui
import clsx from 'clsx'
import { AppBar, Toolbar, Grid, Drawer } from '@material-ui/core'
import DehazeIcon from '@material-ui/icons/Dehaze'

import { 
  ConnectionProvider, 
  WalletProvider,
} from "@solana/wallet-adapter-react/lib/index.js";

import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getLedgerWallet,
  getSolletWallet,
  getSolletExtensionWallet
} from '@solana/wallet-adapter-wallets';
import { 
  WalletModalProvider,
} from "@solana/wallet-adapter-react-ui";
import { 
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import {useWallet } from '@solana/wallet-adapter-react';

import '@solana/wallet-adapter-react-ui/styles.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

import LogoNav from '../../assets/pixelwork/logo-nav.png';

import Header from './components/Header';
import About from './components/About';
import Trailer from './components/Trailer';
import Roadmap from './components/Roadmap';
import Benefits from './components/Benefits';
import Team from './components/Team';
import Invokers from './components/Invokers';
import Footer from './components/Footer';

import Claim from './components/pages/Claim';
import Rarities from './components/pages/Rarities';
import Inv from './components/pages/Inv';
const wallets = [
  getPhantomWallet(),
  getSlopeWallet(),
  getSolflareWallet(),
  getLedgerWallet(),
  getSolletWallet(),
  getSolletExtensionWallet()
];

const SECTION = {
    header: 0,
    about: 1,
    trailer: 2,
    roadmap: 3,
    benefit: 4,
    team: 5,
    claim: 6,
  }

export const Home = () => {
  const [sectionNum, setSectionNum] = useState(0)
  const [open, setOpen] = useState(false)

  const wallet = useWallet();

  const handleDrawMenu = (value: number) => {
    if (value === SECTION.header) {
      window.location.href = '#header'
    } else if (value === SECTION.trailer) {
      window.location.href = '#tailer'
    } else if (value === SECTION.roadmap) {
      window.location.href = '#roadmap'
    } else if (value === SECTION.benefit) {
      window.location.href = '#benefit'
    } else if (value === SECTION.team)  {
      window.location.href = '#team'
    } else {
      window.location.href = '#claim'
    }
    setOpen(false)
    setSectionNum(value)
  }

  const handleClick = (value: number) => {
    if (value === SECTION.header) {
      window.location.href = '#header'
    } else if (value === SECTION.about) {
        window.location.href = '#about'
    } else if (value === SECTION.trailer) {
      window.location.href = '#tailer'
    } else if (value === SECTION.roadmap) {
      window.location.href = '#roadmap'
    } else if (value === SECTION.benefit) {
      window.location.href = '#benefit'
    } else if (value === SECTION.team)  {
      window.location.href = '#team'
    } else {
      window.location.href = '#claim'
    }
    setSectionNum(value)
  }

  return (
      <div className="app">
          <Router>
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
                        <div className="menu-item active">
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
                        <div className="menu-item">
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
            <Switch>
                <Route exact path="/">
                    <Header />
                    <About />
                    <Trailer />
                    <Roadmap />
                    <Benefits />
                    <Team />
                </Route>
                <Route path="/$inv" component={Inv}></Route>
                <Route path="/claim" component={Claim}></Route>
                <Route path="/rarities" component={Rarities}></Route>
            </Switch>
        <Invokers />
        <Footer />
        </Router>
      </div>
  )
}

export default Home;