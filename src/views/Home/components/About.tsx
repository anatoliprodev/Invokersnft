import AboutImg from '../../../assets/pixelwork/about-img.png';

function About() {
  return (
    <section className="about" id="about">
        <div className="container">
            <div className="row">
                <div className="col-xl-8">
                    <div className="subheading">About</div>
                    <div className="heading">What is invokers?</div>
                    <div className="description">
                        <span className="text-white">InvokersNFTs</span> are Stakeable, Playable & Tradable. 
                        <span className="text-white"> 5,000 InvokersNFTs</span> yield 10 $INV Daily through our In-House Staking
                        platform, <span className="text-important">playable in the upcoming Invokers MMORPG.</span>
                        <br/><br/>
                        <span className="text-white">InvokersMMO</span> is a Play2Earn MMORPG built on #Solana. Players will be
                        able to complete quests, fulfill campaigns and enjoy a <span className="text-white">PvE & PvP environments.</span>
                        <br/><br/>
                        <span className="text-white">Invokers Team</span> are all hardcore gamers, with previous experiences in Games
                        monetization, Performance marketing and Game development. Invokers’ Founder, Sam, has successfully established
                        and exited 2 Digital Marketing agencies focused on optimizing Game mechanics when it comes to 
                        <span className="text-white">Monetization & User acquisition.</span>
                    </div>
                    <div className="section-buttons">
                        <a href="https://discord.gg/HrS2sfJaED" className="btn-medium">Discord Server</a>
                        <div>Join to our <span className="text-white">growing community</span> on discord.</div>
                    </div>
                </div>
                <div className="col-xl-4 about-img">
                    <img src={AboutImg} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About