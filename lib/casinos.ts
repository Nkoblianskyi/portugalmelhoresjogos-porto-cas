export interface Casino {
  rank: number
  name: string
  logo: string
  rating: number
  bonus: string
  reviews: number
  isTopChoice?: boolean
  url: string
}

export const casinos: Casino[] = [
  {
    rank: 1,
    name: "Lebull",
    logo: "/lebull.svg",
    rating: 9.8,
    bonus: "25 FreeSpins no Registo",
    reviews: 3521,
    url: "https://www.lebull.pt/",
  },


  {
    rank: 2,
    name: "Luckia",
    logo: "/luckia.svg",
    rating: 9.6,
    bonus: "5€ Registo + Até 500€ Bónus",
    reviews: 2734,
    url: "https://www.luckia.pt/",
  },
  {
    rank: 3,
    name: "Betclic",
    logo: "/betclic.svg",
    rating: 9.4,
    bonus: "Deposita 10€ e joga com 50€",
    reviews: 3298,
    url: "https://www.betclic.pt/",
  },
  {
    rank: 4,
    name: "Casino Portugal",
    logo: "/brand-ccasino.svg",
    rating: 9.2,
    bonus: "20 Jogadas Grátis",
    reviews: 3847,
    isTopChoice: true,
    url: "https://www.casinoportugal.pt/",
  },
  {
    rank: 5,
    name: "Solverde",
    logo: "/solverde.svg",
    rating: 9.1,
    bonus: "100% Até 20€",
    reviews: 2956,
    url: "https://www.solverde.pt/",
  },

]

// Get top casino (rank 1)
export const getTopCasino = (): Casino => {
  return casinos.find((casino) => casino.rank === 1) || casinos[0]
}
