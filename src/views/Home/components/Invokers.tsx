import LogoInvokersText from '../../../assets/pixelwork/logo-text.png';

function Invokers() {
  return (
    <section className="invokers" id="invokers">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <a href=""><img src={LogoInvokersText} className="logo-footer" alt="Invokers" /></a>
                    <div className="description">
                        <span className="text-white">InvokersNFT</span> is a collection of 5,000 3D NFTs, Stakeable,
                        Tradable & Playable in the Upcoming Play2Earn InvokersMMO on Solana blockchain.
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Invokers
