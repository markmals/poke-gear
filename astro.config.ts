import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
    output: "static",
    integrations: [
        starlight({
            title: "PokéGear",
            logo: {
                light: "./src/assets/logo.svg",
                dark: "./src/assets/logo.svg",
            },
            favicon: "/favicon.svg",
            sidebar: [
                {
                    label: "Alpha Sapphire",
                    collapsed: true,
                    items: [],
                },
                {
                    label: "Let's Go, Pikachu!",
                    collapsed: true,
                    items: [],
                },
                {
                    label: "Shining Pearl",
                    collapsed: true,
                    items: [
                        {
                            label: "Walkthrough",
                            items: [
                                {
                                    slug: "shining-pearl/walkthrough/victory-road",
                                },
                                {
                                    slug: "shining-pearl/walkthrough/pokemon-league",
                                },
                                {
                                    label: "Post-Game",
                                    collapsed: true,
                                    items: [
                                        {
                                            slug: "shining-pearl/walkthrough/post-game/lake-guardians",
                                        },
                                        {
                                            slug: "shining-pearl/walkthrough/post-game/national-pokedex",
                                        },
                                        {
                                            slug: "shining-pearl/walkthrough/post-game/charms",
                                        },
                                        {
                                            slug: "shining-pearl/walkthrough/post-game/battle-tower",
                                        },
                                        {
                                            slug: "shining-pearl/walkthrough/post-game/heatran",
                                        },
                                        {
                                            slug: "shining-pearl/walkthrough/post-game/battle-zone",
                                        },
                                        {
                                            slug: "shining-pearl/walkthrough/post-game/ramanas-park",
                                        },
                                        {
                                            slug: "shining-pearl/walkthrough/post-game/giratina",
                                        },
                                        {
                                            slug: "shining-pearl/walkthrough/post-game/cresselia",
                                        },
                                        {
                                            slug: "shining-pearl/walkthrough/post-game/rematch",
                                        },
                                        {
                                            slug: "shining-pearl/walkthrough/post-game/complete-national-pokedex",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            label: "Guides",
                            items: [
                                {
                                    slug: "shining-pearl/guides/legendaries",
                                },
                                {
                                    slug: "shining-pearl/guides/interactable",
                                },
                                {
                                    slug: "shining-pearl/guides/gifts",
                                },
                                {
                                    label: "In-Game Trades",
                                    link: "https://www.serebii.net/brilliantdiamondshiningpearl/ingametrades.shtml",
                                },
                                {
                                    slug: "shining-pearl/guides/feebas",
                                },
                                {
                                    label: "HMs (Hidden Moves)",
                                    link: "https://www.serebii.net/brilliantdiamondshiningpearl/hms.shtml",
                                },
                                {
                                    label: "Trophy Garden",
                                    link: "https://www.serebii.net/brilliantdiamondshiningpearl/trophygarden.shtml",
                                },
                                {
                                    label: "Great Marsh",
                                    link: "https://www.serebii.net/brilliantdiamondshiningpearl/greatmarsh.shtml",
                                },
                                {
                                    label: "Poffin",
                                    link: "https://www.serebii.net/brilliantdiamondshiningpearl/poffin.shtml",
                                },
                                {
                                    label: "Battle Tower",
                                    link: "https://www.serebii.net/brilliantdiamondshiningpearl/battletower.shtml",
                                },
                                {
                                    label: "The Grand Underground",
                                    link: "https://www.serebii.net/brilliantdiamondshiningpearl/grandunderground.shtml",
                                },
                                {
                                    label: "Elite Four",
                                    link: "https://www.serebii.net/brilliantdiamondshiningpearl/elitefour.shtml",
                                },
                                {
                                    label: "Move Tutors",
                                    link: "https://www.serebii.net/brilliantdiamondshiningpearl/movetutors.shtml",
                                },
                                {
                                    label: "Version Exclusives",
                                    link: "https://www.serebii.net/brilliantdiamondshiningpearl/exclusives.shtml",
                                },
                                {
                                    label: "Evolution Methods",
                                    link: "https://www.serebii.net/brilliantdiamondshiningpearl/evolution.shtml",
                                },
                                {
                                    label: "Swarms",
                                    link: "https://www.serebii.net/brilliantdiamondshiningpearl/swarms.shtml",
                                },
                                {
                                    label: "Form Change",
                                    link: "https://www.serebii.net/brilliantdiamondshiningpearl/formchange.shtml",
                                },
                            ],
                        },
                    ],
                },
                // {
                //     label: "Legends: Arceus",
                //     collapsed: true,
                //     items: [],
                // },
            ],
            customCss: ["./src/custom.css"],
        }),
    ],
});
