import TeamImg from '../../../assets/pixelwork/team-img.png';

function Team() {
  return (
    <section className="team" id="team">
        <div className="container">
            <div className="row">
                <div className="col-xl-7">
                    <div className="subheading">Behind the Scene</div>
                    <div className="heading">Meet the team</div>
                    <div className="description">
                        <span className="text-white">SAM INVOKER</span> - Entrepreneur hailing out of Dubai, 
                        2 successful startups in Performance Marketing, Itnfluencer Marketing & Game Monetization.<br/>
                        <span className="text-important">Sam has been Doxxed by @CivicPass: </span> 
                        <a href="https://twitter.com/civickey/status/1461771102040952837?s=20">
                            https://twitter.com/civickey/status/1461771102040952837?s=20
                        </a>
                    </div>
                    <div className="team-additional">
                        <div className="team-add-title">Working alongside sam:</div>
                        <div className="team-lists">
                            <div className="team-item">
                                <div className="team-row">
                                    - (<span className="text-white">8</span>) 2d/3d artists
                                </div>
                                <div className="team-row">
                                    - (<span className="text-white">8</span>) cg artist
                                </div>
                                <div className="team-row">
                                    - (<span className="text-white">12</span>) developers
                                </div>
                            </div>
                            <div className="team-item">
                                <div className="team-row">
                                    - (<span className="text-white">8</span>) marketers
                                </div>
                                <div className="team-row">
                                    - (<span className="text-white">8</span>) community managers
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-buttons">
                        <a href="https://discord.gg/HrS2sfJaED" className="btn-medium">Discord Server</a>
                        <div>Join to our <span className="text-white">growing community</span> on discord.</div>
                    </div>
                </div>
                <div className="col-xl-4">
                    <img src={TeamImg} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team
