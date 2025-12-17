"use client";

import { useState, useMemo } from "react";
import styles from "./ecosystem.module.css"; // optional if using CSS modules

type ItemType = {
  name: string;
  category: string;
  image: string;
  description: string;
  tag: string;
};

export default function Ecosystem() {
  // All items data (convert your HTML to this JSON)
  const items: ItemType[] = [
      {
        "name": "EnCirca",
        "category": "registry",
        "image": "/assets/images/enrica.png",
        "tag": "Registry / Registrar",
        "description": "Supports domain needs end-to-end, specializing in secure .BANK domains and Handshake TLDs, with SOC2-certified technology for hosting and email."
      },
      {
        "name": "Identity Digital",
        "category": "registry",
        "image": "/assets/images/identity-digital.png",
        "tag": "Registry / Registrar",
        "description": "Simplifies domain management, offering 200+ TLDs to create memorable digital identities for businesses, organizations, and individuals worldwide."
      },
      {
        "name": "Privy",
        "category": "infrastructure",
        "image": "/assets/images/privry.png",
        "tag": "Infrastructure",
        "description": "A simple library to onboard all your users to Web3"
      },
      {
        "name": "Celestia",
        "category": "infrastructure",
        "image": "/assets/images/celestia.png",
        "tag": "Infrastructure",
        "description": "The modular blockchain powering unstoppable apps with full-stack control."
      },
      {
        "name": "dRPC NodeCloud",
        "category": "infrastructure",
        "image": "/assets/images/dRPC.png",
        "tag": "Infrastructure",
        "description": "NodeCloud’s AI load balancer and global node network keep your RPC fast, reliable, and outage-resilient — so you can build dApps, not babysit infra."
      },
      {
        "name": "Magic Eden",
        "category": "app",
        "image": "/assets/images/magic-eden.png",
        "tag": "App",
        "description": "The leading NFT marketplace, supporting multi-chain trading across Solana, Bitcoin, and Ethereum with top collections and minting."
      },
      {
        "name": "Tensor Exchange",
        "category": "app",
        "image": "/assets/images/tensor.png",
        "tag": "App",
        "description": "The fastest NFT trading platform on Solana, enabling seamless buying, selling, and collecting with advanced tools."
      },
      {
        "name": "Blockscout",
        "category": "app",
        "image": "/assets/images/blackscout.png",
        "tag": "App",
        "description": "An open-source blockchain explorer, offering transparent insights into transactions, addresses, and smart contracts across networks."
      },
      {
        "name": "Pluto",
        "category": "app",
        "image": "/assets/images/pluto.png",
        "tag": "App",
        "description": "Create, collect, and trade unique digital items via NFTs, building a community-driven marketplace on blockchain."
      },
      {
        "name": "Vision",
        "category": "app",
        "image": "/assets/images/vision.png",
        "tag": "App",
        "description": "The ultimate marketplace for Web2 and Web3 domains, enabling seamless trading and management of DNS and ENS domains with ease."
      },
      {
        "name": "Core",
        "category": "chain",
        "image": "/assets/images/core.png",
        "tag": "Chain",
        "description": "Delivers a Bitcoin-powered, EVM-compatible blockchain with Satoshi Plus consensus, enabling scalable dApps for the next billion users."
      },
      {
        "name": "Shiba Inu",
        "category": "chain",
        "image": "/assets/images/shiba.png",
        "tag": "Chain",
        "description": "Empowers a global, decentralized ShibArmy with utility tokens, DeFi opportunities, and Shibarium, a L2 blockchain enhancing scalability and digital identity."
      },
      {
        "name": "Sui",
        "category": "chain",
        "image": "/assets/images/sui.png",
        "tag": "Chain",
        "description": "Next-gen L1 with parallel processing, optimizing for scalability, speed, and secure smart contracts."
      },
      {
        "name": "Base",
        "category": "chain",
        "image": "/assets/images/base.png",
        "tag": "Chain",
        "description": "Secure, low-cost, builder-friendly Ethereum L2 built to bring the next billion users onchain."
      },
      {
        "name": "Viction",
        "category": "chain",
        "image": "/assets/images/viction.png",
        "tag": "Chain",
        "description": "Scalable, EVM-compatible blockchain with fast transactions and low costs, fostering DeFi and NFT innovation in its vibrant ecosystem."
      },
      {
        "name": "Solana",
        "category": "chain",
        "image": "/assets/images/solana.png",
        "tag": "Chain",
        "description": "High-speed, low-cost blockchain optimized for scalable and decentralized applications."
      },
      {
        "name": "Polygon",
        "category": "chain",
        "image": "/assets/images/polygon.png",
        "tag": "Chain",
        "description": "Scalable, low-cost Ethereum layer-2 solution for building efficient decentralized applications."
      },
      {
        "name": "Avalanche",
        "category": "chain",
        "image": "/assets/images/avalanche.png",
        "tag": "Chain",
        "description": "High-performance blockchain platform optimized for speed, scalability, and customizable subnets."
      },
      {
        "name": "ApeChain",
        "category": "chain",
        "image": "/assets/images/apechain.png",
        "tag": "Chain",
        "description": "ApeChain provides ecosystem discovery, unique Web3 rails, and top of funnel exposure."
      }
    ]

  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  // Filtering logic (same as jQuery version)
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesCategory = category === "all" || item.category === category;
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <section className={styles.ecoSection}>
      <div className="container">
        {/* Top Filter Section */}
        <div className="eco-system-filter-top">
          <div className="eco-button-group">
            {["all", "app", "chain", "infrastructure", "registry"].map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${category === cat ? "active" : ""}`}
                onClick={() => setCategory(cat)}
              >
                {cat === "all"
                  ? "All"
                  : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          <div className="eco-search-sec">
            <input
              type="text"
              placeholder="Search for Partners"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Filtered Items */}
        <div className="eco-system-filter-content">
          <div className="row gy-4">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <div
                  key={index}
                  className="col-xl-3 col-lg-4 col-md-6 item"
                >
                  <div className="ecosystem-item">
                   

                    <div className="ecosystem-item-img">
                      <div className="ecosystem-item-img-inner">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                     <div className="tags-show">{item.tag}</div>
                    <div className="ecosystem-item-text">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div id="no-results" style={{ color: "#888" }}>
                No Result Found.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
