import React from "react";
import "./Nft.css";
import BlogCover from "../Assets/BlogCoverr.svg";
import NyanCat from '../Assets/nyan-cat-rainbow.gif'

const Nft = () => {
  return (
    <div>
      <div className="Blog-head">
        <img className="Blog-head" src={BlogCover} alt="" />
      </div>
      <div className="Blog-content-main">
        <div className="Blog-content">
          <h1 className="h1tag">
            What You Need To Know About Non-Fungible Tokens (NFTs)
          </h1>
          <p className="blog-p">
            Non-fungible tokens (NFTs) seem to have exploded out of the ether
            this year. From art and music to tacos and toilet paper, these
            digital assets are selling like 17th-century exotic Dutch
            tulips—some for millions of dollars.
          </p>
          <p className="blog-p">
            But are NFTs worth the money—or the hype? Some experts say they’re a
            bubble poised to pop, like the dotcom craze or Beanie Babies. Others
            believe NFTs are here to stay, and that they will change investing
            forever.
          </p>
          <h2 className="blog-h2">What Is an NFT?</h2>
          <p className="blog-p">
            An NFT is a digital asset that represents real-world objects like
            art, music, in-game items and videos. They are bought and sold
            online, frequently with cryptocurrency, and they are generally
            encoded with the same underlying software as many cryptos.
          </p>
          <p className="blog-p">
            Although they’ve been around since 2014, NFTs are gaining notoriety
            now because they are becoming an increasingly popular way to buy and
            sell digital artwork. A staggering <strong>$174 million</strong> has
            been spent on NFTs since November 2017.
          </p>
          <p className="blog-p">
            NFTs are also generally one of a kind, or at least one of a very
            limited run, and have unique identifying codes. “Essentially, NFTs
            create digital scarcity,” says Arry Yu, chair of the Washington
            Technology Industry Association Cascadia Blockchain Council and
            managing director of Yellow Umbrella Ventures.
          </p>
          <p className="blog-p">
            This stands in stark contrast to most digital creations, which are
            almost always infinite in supply. Hypothetically, cutting off the
            supply should raise the value of a given asset, assuming it’s in
            demand.
          </p>
          <p className="blog-p">
            But many NFTs, at least in these early days, have been digital
            creations that already exist in some form elsewhere, like iconic
            video clips from NBA games or securitized versions of digital art
            that’s already floating around on Instagram.
          </p>
          <p className="blog-p">
            For instance, famous digital artist <strong>Mike Winklemann</strong>
            , better known as “Beeple” crafted a composite of 5,000 daily
            drawings to create perhaps the most famous NFT of the moment,
            “EVERYDAYS: The First 5000 Days,” which sold at Christie’s for a
            record-breaking $69.3 million.
          </p>
          <p className="blog-p">
            Anyone can view the individual images or even the entire collage of
            images online for free. So why are people willing to spend millions
            on something they could easily screenshot or download?
          </p>
          <p className="blog-p">
            Because an NFT allows the buyer to own the original item. Not only
            that, it contains built-in authentication, which serves as proof of
            ownership. Collectors value those{" "}
            <strong>“digital bragging rights”</strong> almost more than the item
            itself.
          </p>
          <h2 className="blog-h2">
            How is an NFT Different from Cryptocurrency?
          </h2>
          <p className="blog-p">
            NFT stands for non-fungible token. It’s generally built using the
            same kind of programming as cryptocurrency, like{" "}
            <strong>Bitcoin</strong> or
            <strong>Ethereum</strong>, but that’s where the similarity ends.
          </p>
          <p className="blog-p">
            Physical money and cryptocurrencies are “fungible,” meaning they can
            be traded or exchanged for one another. They’re also equal in
            value—one dollar is always worth another dollar; one Bitcoin is
            always equal to another Bitcoin. Crypto’s fungibility makes it a
            trusted means of conducting transactions on the blockchain.
          </p>
          <p className="blog-p">
            NFTs are different. Each has a digital signature that makes it
            impossible for NFTs to be exchanged for or equal to one another
            (hence, non-fungible). One NBA Top Shot clip, for example, is not
            equal to EVERYDAYS simply because they’re both NFTs. (One NBA Top
            Shot clip isn’t even necessarily equal to another NBA Top Shot clip,
            for that matter.)
          </p>
          <h2 className="blog-h2">How Does an NFT Work?</h2>
          <p className="blog-p">
            NFTs exist on a blockchain, which is a distributed public ledger
            that records transactions. You’re probably most familiar with
            blockchain as the underlying process that makes cryptocurrencies
            possible.
          </p>
          <p className="blog-p">
            Specifically, NFTs are typically held on the Ethereum blockchain,
            although other blockchains support them as well.
          </p>
          <p className="blog-p">
            An NFT is created, or “minted” from digital objects that represent
            both tangible and intangible items, including:
            <ul className="blog-ul">
              <li className="blog-li">
                <strong>Art</strong>
              </li>
              <li className="blog-li">
                <strong>GIFs</strong>
              </li>
              <li className="blog-li">
                <strong>Videos and sports highlights</strong>
              </li>
              <li className="blog-li">
                <strong>Collectibles</strong>
              </li>
              <li className="blog-li">
                <strong>Virtual avatars and video game skins</strong>
              </li>
              <li className="blog-li">
                <strong>Designer sneakers</strong>
              </li>
              <li className="blog-li">
                <strong>Music</strong>
              </li>
            </ul>
          </p>
          <p className="blog-p">
            Even tweets count. Twitter co-founder <strong>Jack Dorsey</strong>{" "}
            sold his first ever tweet as an NFT for more than{" "}
            <strong>$2.9 million.</strong>
          </p>
          <p className="blog-p">
            Essentially, NFTs are like physical collector’s items, only digital.
            So instead of getting an actual oil painting to hang on the wall,
            the buyer gets a digital file instead.
          </p>
          <p className="blog-p">
            They also get exclusive ownership rights. That’s right: NFTs can
            have only one owner at a time. NFTs’ unique data makes it easy to
            verify their ownership and transfer tokens between owners. The owner
            or creator can also store specific information inside them. For
            instance, artists can sign their artwork by including their
            signature in an NFT’s metadata.
          </p>
          <h2 className="blog-h2">What Are NFTs Used For?</h2>
          <p className="blog-p">
            <strong>Blockchain technology</strong> and NFTs afford artists and content creators a
            unique opportunity to monetize their wares. For example, artists no
            longer have to rely on galleries or auction houses to sell their
            art. Instead, the artist can sell it directly to the consumer as an
            NFT, which also lets them keep more of the profits. In addition,
            artists can program in royalties so they’ll receive a percentage of
            sales whenever their art is sold to a new owner. This is an
            attractive feature as artists generally do not receive future
            proceeds after their art is first sold.
          </p>
          <p className="blog-p">
            Art isn’t the only way to make money with NFTs. Brands like Charmin
            and Taco Bell have auctioned off themed NFT art to raise funds for
            charity. Charmin dubbed its offering “NFTP” (non-fungible toilet
            paper), and Taco Bell’s NFT art sold out in minutes, with the
            highest bids coming in at 1.5 wrapped ether (WETH)—equal to
            $3,723.83 at time of writing.
          </p>
          <p className="blog-p">
            <strong>Nyan Cat,</strong> a 2011-era GIF of a cat with a pop-tart body, sold for
            nearly $600,000 in February. And NBA Top Shot generated more than
            $500 million in sales as of late March. A single LeBron James
            highlight NFT fetched more than $200,000.
          </p>
          
          <img src={NyanCat} alt="" width="400px" />

          <h2 className="blog-h2">How to Buy NFTs</h2>
          <p className="blog-p">
            If you’re keen to start your own NFT collection, you’ll need to
            acquire some key items:
          </p>
          <p className="blog-p">
            First, you’ll need to get a digital wallet that allows you to store
            NFTs and cryptocurrencies. You’ll likely need to purchase some
            cryptocurrency, like Ether, depending on what currencies your NFT
            provider accepts. You can buy crypto using a credit card on
            platforms like Coinbase, Kraken, eToro and even PayPal and Robinhood
            now. You’ll then be able to move it from the exchange to your wallet
            of choice.
          </p>
          <p className="blog-p">
            You’ll want to keep fees in mind as you research options. Most
            exchanges charge at least a percentage of your transaction when you
            buy crypto.
          </p>

          <h2 className="blog-h2">Popular NFT Marketplaces</h2>
          <p className="blog-p">
            Once you’ve got your wallet set up and funded, there’s no shortage
            of NFT sites to shop. Currently, the largest NFT marketplaces are:
            <ul className="blog-ul2">
              <li className="blog-li">
                <p className="blog-p">
                  <a
                    href="https://opensea.io/"
                    target="_blank"
                    rel="noreferrer"
                    alt="OpenseaLink"
                  >
                    <strong>OpenSea: </strong>
                  </a>
                  This peer-to-peer platform bills itself a purveyor of “rare
                  digital items and collectibles.” To get started, all you need
                  to do is create an account to browse NFT collections. You can
                  also sort pieces by sales volume to discover new artists.
                </p>
              </li>
              <li className="blog-li">
                <p className="blog-p">
                  <a
                    href="https://rarible.com/"
                    target="_blank"
                    rel="noreferrer"
                    alt="RaribleLink"
                  >
                    <strong>Rarible: </strong>
                  </a>
                  Similar to OpenSea, Rarible is a democratic, open marketplace
                  that allows artists and creators to issue and sell NFTs. RARI
                  tokens issued on the platform enable holders to weigh in on
                  features like fees and community rules.
                </p>
              </li>
              <li className="blog-li">
                <p className="blog-p">
                  <a
                    href="https://foundation.app/"
                    target="_blank"
                    rel="noreferrer"
                    alt="FoundationLink"
                  >
                    <strong>Foundation: </strong>
                  </a>
                  Here, artists must receive “upvotes” or an invitation from
                  fellow creators to post their art. The community’s exclusivity
                  and cost of entry—artists must also purchase “gas” to mint
                  NFTs—means it may boast higher-caliber artwork. For instance,
                  Nyan Cat creator Chris Torres sold the NFT on the Foundation
                  platform. It may also mean higher prices — not necessarily a
                  bad thing for artists and collectors seeking to capitalize,
                  assuming the demand for NFTs remains at current levels, or
                  even increases over time.
                </p>
              </li>
            </ul>
          </p>
          <p className="blog-p">
            Although these platforms and others are host to thousands of NFT
            creators and collectors, be sure you do your research carefully
            before buying. Some artists have fallen victim to impersonators who
            have listed and sold their work without their permission.
          </p>
          <p className="blog-p">
            In addition, the verification processes for creators and NFT
            listings aren’t consistent across platforms — some are more
            stringent than others. OpenSea and Rarible, for example, do not
            require owner verification for NFT listings. Buyer protections
            appear to be sparse at best, so when shopping for NFTs, it may be
            best to keep the old adage “caveat emptor” (let the buyer beware) in
            mind.
          </p>
          <h2 className="blog-h2">Should You Buy NFTs?</h2>
          <p className="blog-p">
            Just because you can buy NFTs, does that mean you should? It
            depends, Yu says.
          </p>
          <p className="blog-p">
            “NFTs are risky because their future is uncertain, and we don’t yet
            have a lot of history to judge their performance,” she notes. “Since
            NFTs are so new, it may be worth investing small amounts to try it
            out for now.”
          </p>
          <p className="blog-p">
            In other words, investing in NFTs is a largely personal decision. If
            you have money to spare, it may be worth considering, especially if
            a piece holds meaning for you.
          </p>
          <p className="blog-p">
            But keep in mind, an NFT’s value is based entirely on what someone
            else is willing to pay for it. Therefore, demand will drive the
            price rather than fundamental, technical or economic indicators,
            which typically influence stock prices and at least generally form
            the basis for investor demand.
          </p>
          <p className="blog-p">
            All this means, an NFT may resale for less than you paid for it. Or
            you may not be able to resell it at all if no one wants it.
          </p>
          <p className="blog-p">
            NFTs are also subject to capital gains taxes—just like when you sell
            stocks at a profit. Since they’re considered collectibles, however,
            they may not receive the preferential long-term capital gains rates
            stocks do and may even be taxed at a higher collectibles tax rate,
            though the IRS has not yet ruled what NFTs are considered for tax
            purposes. Bear in mind, the cryptocurrencies used to purchase the
            NFT may also be taxed if they’ve increased in value since you bought
            them, meaning you may want to check in with a tax professional when
            considering adding NFTs to your portfolio.
          </p>
          <p className="blog-p">
            That said, approach NFTs just like you would any investment: Do your
            research, understand the risks—including that you might lose all of
            your investing dollars—and if you decide to take the plunge, proceed
            with a healthy dose of caution.
          </p>
          <p className="blog-p"></p>
        </div>
      </div>
    </div>
  );
};

export default Nft;
