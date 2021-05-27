import { pick, map } from "ramda";

export function formatMovieArray(arr) {
  if (!arr) return null;
  const formatArray = pick(["id", "original_title", "release-date", "poster_path"]);
  return map(formatArray, arr);
}

//   "page": 1,
//   "results": [
//     {
//       "adult": false,
//       "backdrop_path": "/iDdpiUnCeXvBmrkBFpL6lKsZt33.jpg",
//       "genre_ids": [
//         53,
//         18,
//         28,
//         9648
//       ],
//       "id": 578701,
//       "original_language": "en",
//       "original_title": "Those Who Wish Me Dead",
//       "overview": "A young boy finds himself pursued by two assassins in the Montana wilderness with a survival expert determined to protecting him - and a forest fire threatening to consume them all.",
//       "popularity": 2835.542,
//       "poster_path": "/xCEg6KowNISWvMh8GvPSxtdf9TO.jpg",
//       "release_date": "2021-05-05",
//       "title": "Those Who Wish Me Dead",
//       "video": false,
//       "vote_average": 7.2,
//       "vote_count": 246
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/6ELCZlTA5lGUops70hKdB83WJxH.jpg",
//       "genre_ids": [
//         28,
//         14,
//         12
//       ],
//       "id": 460465,
//       "original_language": "en",
//       "original_title": "Mortal Kombat",
//       "overview": "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
//       "popularity": 2757.774,
//       "poster_path": "/nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg",
//       "release_date": "2021-04-07",
//       "title": "Mortal Kombat",
//       "video": false,
//       "vote_average": 7.6,
//       "vote_count": 2621
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/fPGeS6jgdLovQAKunNHX8l0avCy.jpg",
//       "genre_ids": [
//         28,
//         53,
//         10752
//       ],
//       "id": 567189,
//       "original_language": "en",
//       "original_title": "Tom Clancy's Without Remorse",
//       "overview": "An elite Navy SEAL uncovers an international conspiracy while seeking justice for the murder of his pregnant wife.",
//       "popularity": 2747.394,
//       "poster_path": "/rEm96ib0sPiZBADNKBHKBv5bve9.jpg",
//       "release_date": "2021-04-29",
//       "title": "Tom Clancy's Without Remorse",
//       "video": false,
//       "vote_average": 7.3,
//       "vote_count": 967
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
//       "genre_ids": [
//         878,
//         28,
//         18
//       ],
//       "id": 399566,
//       "original_language": "en",
//       "original_title": "Godzilla vs. Kong",
//       "overview": "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
//       "popularity": 2075.791,
//       "poster_path": "/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
//       "release_date": "2021-03-24",
//       "title": "Godzilla vs. Kong",
//       "video": false,
//       "vote_average": 8.1,
//       "vote_count": 5616
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/6zbKgwgaaCyyBXE4Sun4oWQfQmi.jpg",
//       "genre_ids": [
//         28,
//         53,
//         80,
//         35
//       ],
//       "id": 615457,
//       "original_language": "en",
//       "original_title": "Nobody",
//       "overview": "Hutch Mansell, a suburban dad, overlooked husband, nothing neighbor — a \"nobody.\" When two thieves break into his home one night, Hutch's unknown long-simmering rage is ignited and propels him on a brutal path that will uncover dark secrets he fought to leave behind.",
//       "popularity": 1837.402,
//       "poster_path": "/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg",
//       "release_date": "2021-03-26",
//       "title": "Nobody",
//       "video": false,
//       "vote_average": 8.4,
//       "vote_count": 1595
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/lkInRiMtLgl9u9xE0By5hqf66K8.jpg",
//       "genre_ids": [
//         27
//       ],
//       "id": 632357,
//       "original_language": "en",
//       "original_title": "The Unholy",
//       "overview": "Alice, a young hearing-impaired girl who, after a supposed visitation from the Virgin Mary, is inexplicably able to hear, speak and heal the sick. As word spreads and people from near and far flock to witness her miracles, a disgraced journalist hoping to revive his career visits the small New England town to investigate. When terrifying events begin to happen all around, he starts to question if these phenomena are the works of the Virgin Mary or something much more sinister.",
//       "popularity": 1625.484,
//       "poster_path": "/b4gYVcl8pParX8AjkN90iQrWrWO.jpg",
//       "release_date": "2021-03-31",
//       "title": "The Unholy",
//       "video": false,
//       "vote_average": 5.6,
//       "vote_count": 99
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/c7dFSqZQYqNNJVpacpIGZe3gkLW.jpg",
//       "genre_ids": [
//         16,
//         35,
//         14
//       ],
//       "id": 813258,
//       "original_language": "en",
//       "original_title": "Monster Pets: A Hotel Transylvania Short",
//       "overview": "Drac tries out some new monster pets to help occupy Tinkles for playtime.",
//       "popularity": 1357.418,
//       "poster_path": "/dkokENeY5Ka30BFgWAqk14mbnGs.jpg",
//       "release_date": "2021-04-02",
//       "title": "Monster Pets: A Hotel Transylvania Short",
//       "video": false,
//       "vote_average": 7.6,
//       "vote_count": 133
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/n2y7T8wJVjJ8yLhQXQgNCpsC3ga.jpg",
//       "genre_ids": [
//         10751,
//         16,
//         35
//       ],
//       "id": 811367,
//       "original_language": "en",
//       "original_title": "22 vs. Earth",
//       "overview": "Set before the events of ‘Soul’, 22 refuses to go to Earth, enlisting a gang of 5 new souls in attempt of rebellion. However, 22’s subversive plot leads to a surprising revelation about the meaning of life.",
//       "popularity": 1330.382,
//       "poster_path": "/32vLDKSzcCMh55zqqaSqqUA8naz.jpg",
//       "release_date": "2021-04-30",
//       "title": "22 vs. Earth",
//       "video": false,
//       "vote_average": 7.1,
//       "vote_count": 88
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/xPpXYnCWfjkt3zzE0dpCNME1pXF.jpg",
//       "genre_ids": [
//         16,
//         28,
//         12,
//         14,
//         18
//       ],
//       "id": 635302,
//       "original_language": "ja",
//       "original_title": "劇場版「鬼滅の刃」無限列車編",
//       "overview": "Tanjirō Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyōjurō Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
//       "popularity": 1303.868,
//       "poster_path": "/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
//       "release_date": "2020-10-16",
//       "title": "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
//       "video": false,
//       "vote_average": 8.4,
//       "vote_count": 1005
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
//       "genre_ids": [
//         28,
//         12,
//         14,
//         878
//       ],
//       "id": 791373,
//       "original_language": "en",
//       "original_title": "Zack Snyder's Justice League",
//       "overview": "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
//       "popularity": 1300.424,
//       "poster_path": "/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
//       "release_date": "2021-03-18",
//       "title": "Zack Snyder's Justice League",
//       "video": false,
//       "vote_average": 8.5,
//       "vote_count": 5513
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/xrAaJAn3hqkInq5kE1AGJqIGXyT.jpg",
//       "genre_ids": [
//         27
//       ],
//       "id": 573680,
//       "original_language": "en",
//       "original_title": "The Banishing",
//       "overview": "In the 1930s, a young reverend and his family are forced to confront their worst fears when they discover their new home holds a horrifying secret.",
//       "popularity": 1286.667,
//       "poster_path": "/xD9mc8JCVXA8T8u4Od7qOUBuGH4.jpg",
//       "release_date": "2021-04-29",
//       "title": "The Banishing",
//       "video": false,
//       "vote_average": 6.6,
//       "vote_count": 8
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/7prYzufdIOy1KCTZKVWpjBFqqNr.jpg",
//       "genre_ids": [
//         16,
//         12,
//         14,
//         10751,
//         28
//       ],
//       "id": 527774,
//       "original_language": "en",
//       "original_title": "Raya and the Last Dragon",
//       "overview": "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.",
//       "popularity": 1243.787,
//       "poster_path": "/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg",
//       "release_date": "2021-03-03",
//       "title": "Raya and the Last Dragon",
//       "video": false,
//       "vote_average": 8.2,
//       "vote_count": 2880
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/lHhc60NXYzswU4TvKSo45nY9Jzs.jpg",
//       "genre_ids": [
//         16,
//         35,
//         10751,
//         12
//       ],
//       "id": 726684,
//       "original_language": "fr",
//       "original_title": "Miraculous World Shanghai, la légende de Ladydragon",
//       "overview": "To join Adrien in Shanghai, Marinette is going to visit her uncle Wang who is celebrating his anniversary. But, as soon as she arrives in China, her purse gets stolen with Tikki inside, whom she needs to secretly transform into Ladybug! Without money and alone in the immense city, Marinette accepts the help of a young and resourceful girl, Fei. The two girls will ally and discover the existence of a new magical jewel, the Prodigious. Hawk Moth, also present in Shanghai, seeks to finding it since a long time...",
//       "popularity": 1236.909,
//       "poster_path": "/msI5a9TPnepx47JUb2vl88hb80R.jpg",
//       "release_date": "2021-04-04",
//       "title": "Miraculous World: Shanghai – The Legend of Ladydragon",
//       "video": false,
//       "vote_average": 7.9,
//       "vote_count": 330
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/mYM8x2Atv4MaLulaV0KVJWI1Djv.jpg",
//       "genre_ids": [
//         28,
//         80,
//         53
//       ],
//       "id": 804435,
//       "original_language": "en",
//       "original_title": "Vanquish",
//       "overview": "Victoria is a young mother trying to put her dark past as a Russian drug courier behind her, but retired cop Damon forces Victoria to do his bidding by holding her daughter hostage. Now, Victoria must use guns, guts and a motorcycle to take out a series of violent gangsters—or she may never see her child again.",
//       "popularity": 1186.99,
//       "poster_path": "/1jkNM1NHyHsxiBBuOlOeqgmidM0.jpg",
//       "release_date": "2021-04-16",
//       "title": "Vanquish",
//       "video": false,
//       "vote_average": 6.2,
//       "vote_count": 98
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/5Zv5KmgZzdIvXz2KC3n0MyecSNL.jpg",
//       "genre_ids": [
//         28,
//         53,
//         80
//       ],
//       "id": 634528,
//       "original_language": "en",
//       "original_title": "The Marksman",
//       "overview": "Jim Hanson’s quiet life is suddenly disturbed by two people crossing the US/Mexico border – a woman and her young son – desperate to flee a Mexican cartel. After a shootout leaves the mother dead, Jim becomes the boy’s reluctant defender. He embraces his role as Miguel’s protector and will stop at nothing to get him to safety, as they go on the run from the relentless assassins.",
//       "popularity": 1043.994,
//       "poster_path": "/6vcDalR50RWa309vBH1NLmG2rjQ.jpg",
//       "release_date": "2021-01-15",
//       "title": "The Marksman",
//       "video": false,
//       "vote_average": 7.4,
//       "vote_count": 480
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/3Ef8PWUiP1ehO1ESEroxb736srR.jpg",
//       "genre_ids": [
//         53,
//         28,
//         80
//       ],
//       "id": 808023,
//       "original_language": "en",
//       "original_title": "The Virtuoso",
//       "overview": "A lonesome stranger with nerves of steel must track down and kill a rogue hitman to satisfy an outstanding debt. But the only information he's been given is a time and location where to find his quarry. No name. No description. Nothing.",
//       "popularity": 932.116,
//       "poster_path": "/vXHzO26mJaOt4VO7ZFiM6No5ScT.jpg",
//       "release_date": "2021-04-30",
//       "title": "The Virtuoso",
//       "video": false,
//       "vote_average": 6.4,
//       "vote_count": 64
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/7HtvmsLrDeiAgDGa1W3m6senpfE.jpg",
//       "genre_ids": [
//         12,
//         16,
//         10751
//       ],
//       "id": 681260,
//       "original_language": "en",
//       "original_title": "Maya the Bee: The Golden Orb",
//       "overview": "When Maya, a headstrong little bee, and her best friend Willi, rescue an ant princess they find themselves in the middle of an epic bug battle that will take them to strange new worlds and test their friendship to its limits.",
//       "popularity": 919.285,
//       "poster_path": "/tMS2qcbhbkFpcwLnbUE9o9IK4HH.jpg",
//       "release_date": "2021-01-07",
//       "title": "Maya the Bee: The Golden Orb",
//       "video": false,
//       "vote_average": 6.7,
//       "vote_count": 29
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/jFINtstDUh0vHOGImpMAmLrPcXy.jpg",
//       "genre_ids": [
//         28,
//         27,
//         35
//       ],
//       "id": 643586,
//       "original_language": "en",
//       "original_title": "Willy's Wonderland",
//       "overview": "When his car breaks down, a quiet loner agrees to clean an abandoned family fun center in exchange for repairs. He soon finds himself waging war against possessed animatronic mascots while trapped inside Willy's Wonderland.",
//       "popularity": 915.836,
//       "poster_path": "/keEnkeAvifw8NSEC4f6WsqeLJgF.jpg",
//       "release_date": "2021-02-12",
//       "title": "Willy's Wonderland",
//       "video": false,
//       "vote_average": 6.8,
//       "vote_count": 220
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/fejok33Ijc6SppiEU1cfwA9Mo2.jpg",
//       "genre_ids": [
//         28,
//         80,
//         18
//       ],
//       "id": 717192,
//       "original_language": "nl",
//       "original_title": "Ferry",
//       "overview": "Before he built a drug empire, Ferry Bouman returns to his hometown on a revenge mission that finds his loyalty tested — and a love that alters his life.",
//       "popularity": 860.758,
//       "poster_path": "/w6n1pu9thpCVHILejsuhKf3tNCV.jpg",
//       "release_date": "2021-05-14",
//       "title": "Ferry",
//       "video": false,
//       "vote_average": 7.3,
//       "vote_count": 50
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/sPeqIdCYvcmeZe5fCu7JgMnf1HL.jpg",
//       "genre_ids": [
//         16,
//         35,
//         878
//       ],
//       "id": 825597,
//       "original_language": "en",
//       "original_title": "Maggie Simpson in The Force Awakens from Its Nap",
//       "overview": "In a daycare far, far away… but still in Springfield, Maggie is on an epic quest for her stolen pacifier. Her adventure brings her face-to-face with young Padawans, Sith Lords, familiar droids, Rebel scum, and an ultimate battle against the dark side, in this original short celebrating the Star Wars galaxy.",
//       "popularity": 838.737,
//       "poster_path": "/2xnf2ZaGXudvgBKPtVXMkNeooh1.jpg",
//       "release_date": "2021-05-04",
//       "title": "Maggie Simpson in The Force Awakens from Its Nap",
//       "video": false,
//       "vote_average": 6.8,
//       "vote_count": 42
//     }
//   ],
//   "total_pages": 500,
//   "total_results": 10000
