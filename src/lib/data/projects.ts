export const PROJECT_CATEGORIES = [
    {
        label: "Games",
        value: "game",
    },
    {
        label: "Toys",
        value: "toy",
    },
    {
        label: "Tools",
        value: "tool",
    },
    {
        label: "Media",
        value: "media",
    },
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number]["value"];

export type ProjectTag = "collab" | "old";

export type Project = {
    name: string;
    description: string;
    link: string;
    hideTitle?: boolean;
    nonSquareImage?: boolean;
    categories: ProjectCategory[];
    shadowCol?: string;
    tags?: ProjectTag[];
} & ({ imageID: string } | { imageLink: string });

export const PROJECTS = [
    {
        name: "Fly Frenzy",
        description: "Frog-themed pico-8 arcade game",
        imageID: "91b2e971-eb43-4fed-1f8f-612c85f20d00",
        link: "https://giraugh.itch.io/fly-frenzy",
        shadowCol: "#1c2b52",
        categories: ["game"],
    },
    {
        name: "Wattle",
        description:
            "Events platform for environmental volunteering in Melbourne",
        imageID: "aee45160-2af9-449c-9239-70974d423600",
        link: "https://wattle.org.au",
        shadowCol: "gray",
        tags: ["collab"],
        categories: ["media", "tool"],
    },
    {
        name: "Automatarium",
        description:
            "Tool for simulating automata. Since become long-term project at RMIT",
        imageID: "f56085b4-d26b-48a1-8c08-663566356600",
        link: "https://automatarium.tdib.xyz",
        shadowCol: "gray",
        tags: ["collab"],
        categories: ["tool"],
    },
    {
        name: "Solar and Sundry",
        description: "Painterly sci-fi webcomic",
        imageID: "4b15df30-85c7-429e-d062-bf1d19f0fd00",
        link: "https://sas.ewanb.me",
        shadowCol: "#562d2e",
        categories: ["media"],
    },
    {
        name: "Pasta of the day",
        description: "One stop spot for all your pasta needs",
        imageID: "5c2e8bda-07fd-4331-5665-967e6ca1e300",
        link: "https://pasta.ewanb.me",
        shadowCol: "#6f4525",
        categories: ["toy"],
    },
    {
        name: "Fractal Crab",
        description: "Simple web-based fractal explorer created using WASM",
        imageID: "e8aea375-d7e3-46c1-234d-d365c789d200",
        link: "https://giraugh.xyz/fractal-crab",
        shadowCol: "#722201",
        categories: ["toy"],
    },
    {
        name: "Flow Field Fun",
        description:
            "Cool little visualiser for particle physics in a flow field",
        imageID: "b6bb3d25-ec7b-4de8-0167-aa0a79f8de00",
        link: "https://giraugh.xyz/flow-field-fun",
        shadowCol: "#8f8f8f",
        categories: ["toy"],
    },
    {
        name: "Duckboi",
        description: "Pico-8 game about protecting your ducks from monsters",
        imageID: "611a9263-9acf-4fe5-d50d-251efa03a400",
        link: "https://giraugh.xyz/duckboi",
        shadowCol: "#514767",
        categories: ["game"],
    },
    {
        name: "Diffusion Snowflakes",
        description:
            "Generation of snowflakes using diffusion-limited aggregation",
        imageID: "503350c0-bac3-4dad-81cd-b7c0907fe400",
        link: "https://giraugh.xyz/diffusion-snowflakes",
        shadowCol: "grey",
        categories: ["toy"],
    },
    {
        name: "Hue Map",
        description: "Tool for interpolating gradients using common palettes",
        imageID: "1aa78598-3359-4f25-264b-7b3fbfa52100",
        link: "https://giraugh.xyz/hue-map",
        shadowCol: "#871616",
        categories: ["tool"],
    },
    {
        name: "Ant",
        description: "Simple Langton's ant simulation",
        imageID: "54e55f2a-107f-4848-4f87-77f4a64b5300",
        link: "https://giraugh.xyz/ant",
        shadowCol: "grey",
        categories: ["toy"],
    },
    {
        name: "Squish",
        description:
            'Platforming party game that pits players "head" to "head".',
        imageID: "b5468b6b-a403-49dc-537d-071016aaa700",
        link: "http://giraugh.xyz/squish",
        shadowCol: "grey",
        categories: ["game"],
    },
    {
        name: "Galana",
        description: "Brutal minimalist scrolling shooter for android devices.",
        imageID: "c699bf81-c631-44ed-066a-d94f14f34000",
        link: "https://tdos.itch.io/galana",
        shadowCol: "grey",
        categories: ["game"],
    },
    {
        name: "Clink",
        description: "8-bit adventure game made in PICO-8.",
        imageID: "8e4243f5-5310-4146-a9b1-2e0cfd5c3f00",
        link: "http://giraugh.xyz/clink",
        shadowCol: "#a17a60",
        categories: ["game"],
    },
    {
        name: "Fish Boy",
        description: "Endless platforming game made for Ludum Dare 39.",
        imageID: "f63ce787-1bb2-424d-57d6-fa9304ae7500",
        link: "https://tdos.itch.io/fishy",
        shadowCol: "#243e32",
        tags: ["collab", "old"],
        categories: ["game"],
    },
    {
        name: "Pacmascii",
        description: "Pacman but ASCII",
        imageID: "be81a747-79a1-4975-e50d-283e93f0a600",
        link: "https://giraugh.xyz/Pacmascii",
        shadowCol: "#0d0074",
        categories: ["game", "toy"],
    },
    {
        name: "Spades",
        description: "Space dogfighting game made in Unity",
        imageID: "0a388091-4cc1-4dff-c51b-dd73ea28b000",
        link: "https://tdos.itch.io/spades",
        shadowCol: "#1f2324",
        categories: ["game"],
    },
    {
        name: "Shaders",
        description: "My collection of Raymarched 3D Shaders.",
        imageID: "94268746-ee45-4d1d-853c-fa4e74ef0600",
        link: "https://shadertoy.com/user/giraugh",
        shadowCol: "#112b18",
        categories: ["media"],
    },
    {
        name: "Knight Game",
        description: "Platforming MOBA made in GameMaker Studio.",
        imageID: "d46b5f1e-b661-4b86-b39b-fda50135fb00",
        link: "https://tdos.itch.io/knight-game",
        shadowCol: "#35261d",
        tags: ["old"],
        categories: ["game"],
    },
    {
        name: "Growing Up",
        description: "Gardening rhythm game made for Ludum Dare 47.",
        imageID: "c5176ffb-4de2-4571-2edc-0318f33cd100",
        link: "https://growingup.avrami.me/",
        shadowCol: "#4b2c1e",
        tags: ["collab", "old"],
        categories: ["game"],
    },
    {
        name: "ASCII Marcher",
        description: "Animated 3D Scene rendered in ASCII",
        imageID: "44dc1043-647c-412d-83b8-d8efe096b600",
        link: "https://giraugh.xyz/ASCII-Marcher",
        shadowCol: "#353535",
        categories: ["toy"],
    },
    {
        name: "Crab Fitter",
        description: "Crab fit: the game",
        imageID: "54384ee2-251d-4132-cf4f-069adeb41700",
        link: "https://giraugh.xyz/crab-fitter",
        shadowCol: "#222",
        categories: ["game"],
    },
    {
        name: "Binary Search Bot",
        description: "This robot will guess your age",
        imageID: "c31c42f8-d078-4b2e-f3ee-79070ae03800",
        link: "https://giraugh.xyz/AA-GFOD-BS",
        shadowCol: "grey",
        categories: ["toy"],
    },
    {
        name: "Honey Heist",
        description:
            "Online Character viewer for the open source Honey Heist RPG.",
        imageID: "1a843300-ebc1-420e-da41-11a023e59f00",
        link: "http://giraugh.xyz/honey-heist",
        shadowCol: "#877e37",
        categories: ["tool"],
    },
    {
        name: "Critical Counter",
        description: "Discord bot for counting stats in a DnD Campaign.",
        imageID: "12c837cb-4430-45cc-dd02-05a5f16f5600",
        link: "http://github.com/giraugh/critical-counter",
        shadowCol: "#613676",
        categories: ["tool"],
    },
    {
        name: "Hex Redux",
        description: "Online tool for creating javascript bots that play Hex.",
        imageID: "54ca6eed-4025-4c41-8491-1fa2be87eb00",
        link: "http://giraugh.xyz/hex-redux",
        shadowCol: "#333",
        categories: ["tool", "game"],
    },
] as readonly Project[];

export const makeImageLink = (imageID: string): string =>
    `https://imagedelivery.net/zthi1l8fKrUGB5ig08mq-Q/${imageID}/public`;
