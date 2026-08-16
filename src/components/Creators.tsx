import charlotteParkes from "@/assets/IMG_6876.jpg";
import teeqo from "@/assets/teeqo.jpg";

import highsky from "@/assets/highsky.jpg";
import kJaneCaron from "@/assets/IMG_6877.jpg";

import khanada from "@/assets/Khanada .jpg";
import allinabe from "@/assets/allinabe.webp";
import pGod from "@/assets/p-god.jpg";
import samulx from "@/assets/samulx.webp";

import harrietParkes from "@/assets/harriet-parkes.webp";
import jarvis from "@/assets/jarvis.webp";
import jonathanPeters from "@/assets/jonathan-peters.webp";
import hannahMarbles from "@/assets/hannah-marbles-photo.jpg";
import frazier from "@/assets/frazier.jpg";
import elzein from "@/assets/elzein.jpg";
import sachaumazaki from "@/assets/sachaumazaki.jpg";
import rdjavi from "@/assets/rdjavi.jpg";
import nikan from "@/assets/nikan.jpg";
import azraRamic from "@/assets/azra-ramic.jpg";
import bellaRama from "@/assets/bella-rama.jpg";

import edMatthews from "@/assets/ed-matthews.jpg";
import oblivion from "@/assets/oblivion.jpg";
import zavala from "@/assets/zavala.jpg";
import cobyPersin from "@/assets/coby-persin.jpg";

type Creator = {
  name: string;
  img: string;
  platform: string;
  followers: string;
  cropScale?: number;
};

// "2.68M" -> 2680000, "635K" -> 635000. Used only for ordering.
const followersToNumber = (followers: string): number => {
  const match = /^([\d.]+)\s*([KM]?)/i.exec(followers.trim());
  if (!match) return 0;
  const value = parseFloat(match[1]);
  const suffix = match[2].toUpperCase();
  if (suffix === "M") return value * 1_000_000;
  if (suffix === "K") return value * 1_000;
  return value;
};

// Sorted largest audience first so the biggest names lead the carousel.
// Sorting here rather than by hand keeps that true whenever the follower
// figures are refreshed, instead of silently drifting out of order.
const creators: Creator[] = ([
  { name: "Teeqo", img: teeqo, platform: "YouTube", followers: "2.68M" },
  { name: "H1ghSky1", img: highsky, platform: "YouTube", followers: "2.5M" },
  { name: "K Jane Caron", img: kJaneCaron, platform: "Instagram", followers: "635K" },

  { name: "Khanada", img: khanada, platform: "Twitch", followers: "924K" },
  { name: "AllInAbe", img: allinabe, platform: "Kick", followers: "135K" },
  { name: "Charlotte Parkes", img: charlotteParkes, platform: "YouTube", followers: "5.2M", cropScale: 1.5 },
  { name: "P God", img: pGod, platform: "Twitch", followers: "856K" },
  { name: "Samulx", img: samulx, platform: "Kick", followers: "421K" },

  { name: "Harriet Parkes", img: harrietParkes, platform: "Instagram", followers: "165K" },
  { name: "FaZe Jarvis", img: jarvis, platform: "YouTube", followers: "5.69M" },
  { name: "Jonathan Peters", img: jonathanPeters, platform: "Instagram", followers: "9M" },
  { name: "Hannah Marbles", img: hannahMarbles, platform: "YouTube", followers: "1.86M" },
  { name: "Frazier Kay", img: frazier, platform: "YouTube", followers: "9.2M" },
  { name: "Elzein", img: elzein, platform: "Instagram", followers: "932K" },
  { name: "Bella Rama", img: bellaRama, platform: "Instagram", followers: "1.1M" },
  { name: "Sachaumazaki", img: sachaumazaki, platform: "TikTok", followers: "314K" },
  { name: "RDJavi", img: rdjavi, platform: "Instagram", followers: "1.9M" },
  { name: "FaZe Nikan", img: nikan, platform: "YouTube", followers: "1.3M" },
  { name: "Azra Ramic", img: azraRamic, platform: "Instagram", followers: "378K" },

  { name: "Coby Persin", img: cobyPersin, platform: "Instagram", followers: "1.6M" },
  { name: "Zavala", img: zavala, platform: "TikTok", followers: "1.4M" },
  // Full-body shot, so it needs a slight zoom to bring his face closer to the
  // size of the other cards. Kept low deliberately: the source is only 548px
  // wide, so zooming harder visibly softens it.
  { name: "Oblivion", img: oblivion, platform: "Instagram", followers: "768K", cropScale: 1.25 },
  { name: "Ed Matthews", img: edMatthews, platform: "Instagram", followers: "383K" },
] satisfies Creator[]).sort(
  (a, b) => followersToNumber(b.followers) - followersToNumber(a.followers),
);

// The carousel scrolls continuously, so lazy loading guarantees visible
// pop-in: a card's image only starts downloading once it has already slid
// into view. Everything is loaded eagerly instead. The images total well
// under a megabyte, and priority is used to load the cards that are on
// screen at first paint ahead of the ones that scroll in later.
const EAGER_PRIORITY_COUNT = 8;

const CreatorCard = ({ name, img, platform, followers, cropScale, isPriority }: Creator & { isPriority: boolean }) => (
  <div className="flex-shrink-0 w-44 sm:w-56 md:w-72 group cursor-pointer">
    <div className="relative overflow-hidden rounded-sm border border-border group-hover:border-blue-accent/40 transition-all duration-500">
      <img
        src={img}
        alt={`${name} - ${platform} creator`}
        loading="eager"
        fetchPriority={isPriority ? "high" : "low"}
        decoding="async"
        width={288}
        height={448}
        className="w-44 h-56 sm:w-56 sm:h-72 md:w-72 md:h-[28rem] object-cover"
        style={cropScale ? { transform: `scale(${cropScale})`, transformOrigin: "top center" } : undefined}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 md:p-4">
        <p className="text-white font-display font-bold text-sm md:text-base tracking-tight">{name}</p>
        <p className="text-white/60 text-[10px] md:text-xs font-medium tracking-wide uppercase">
          {platform} · {followers}
        </p>
      </div>
    </div>
  </div>
);

const Creators = () => {
  return (
    <section className="py-4 md:py-6 overflow-hidden bg-background">
      <div className="relative overflow-hidden">
        <div
          className="flex gap-0 w-max animate-scroll-right"
          style={{ willChange: "transform" }}
        >
          {[...creators, ...creators].map((creator, index) => (
            <CreatorCard
              key={`${creator.name}-${index}`}
              {...creator}
              isPriority={index < EAGER_PRIORITY_COUNT}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Creators;

