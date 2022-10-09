import React, { useRef } from "react";
import { Scroller } from "../components/scroll";
import { PostBlock } from "../components/post-block";
import { DiscoPreview } from "../components/discography-preview";
import { DiscographyList } from "../components/discography-list";
import { Landing } from "../components/landing";
import { SpotifyAboutCard } from "../components/spotify-about-card";
import { SpotifyAboutModal } from "../components/spotify-about-modal";

// intersection observer react
import KosIntersection from "../hooks/kos-intersection";
import intersectionObserver from "../hooks/intersectionObserver";

export function Home() {
  const targetRef = useRef(null);
  const isVisible = KosIntersection(
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    },
    targetRef
  );

  const homeSection = document.querySelector(".io");

  const intersection = intersectionObserver(isVisible, homeSection, targetRef);

  const myfunction = () => {
    const target = targetRef;
    if (isVisible) {
      if (targetRef.current) {
        console.log(target);
      }
    }
  };

  const setModal = () => {
    const modal = document.querySelector(".modal");
    const close = document.querySelector('.declickbait')
    if(modal.classList.contains('modal-inactive') === true) {
      // switch on
      modal.classList.remove("modal-inactive");
      modal.classList.add("modal-active");
      close.style.display = "block"

    } else {
      // switch off
      modal.classList.add("modal-inactive");
      modal.classList.remove("modal-active");
      close.style.display = "none"
    }
  };

  // spacer
  return (
    <div className="home">
      {intersection}
      {myfunction}
      {/* landing section of page  */}
      <div className="home-land">
        <Landing />
        {/* sroll component */}
        <Scroller />
      </div>
      {/* disco preview */}
      <div className="home-section" ref={targetRef} id="down">
        <div className="home-section-title">Latest Release</div>
        <div className="home-section-sub">Never miss the fire</div>
        <div className="home-section-content">
          {/* component import */}
          <DiscoPreview />
        </div>
      </div>
      {/* disco preview */}
      <div className="home-section" id="disco">
        <div className="home-section-title">Popular Releases</div>
        <div className="home-section-sub">Most streamed content</div>
        <div className="home-section-content">
          {/* component import */}
          <DiscographyList />
        </div>
      </div>
      {/*  about sections of page */}
      <div className="home-section">
        <div>
          <div className="home-section-title">About</div>
          <div className="home-section-sub">then, now, forever</div>
          <div className="clickbait" onClick={() => setModal()}>
            <SpotifyAboutCard />
          </div>
          <div className="declickbait bi bi-x" onClick={() => setModal()}></div>
        </div>
      </div>

      {/* news preview */}
      <div className="home-section">
        <div className="home-section-title">Latest News</div>
        <div className="home-section-sub">recent updates</div>
        <div className="home-section-content">
          {/* component import */}
          <PostBlock />
        </div>
      </div>
      {/* modal */}
      <div className="modal modal-inactive">
        <SpotifyAboutModal />
      </div>
    </div>
  );
}
