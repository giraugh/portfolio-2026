export type GalleryImage = {
    name: string;
    imageId: string;
    isSquare?: boolean;
};

export type GalleryAreas = {
    name: string;
    description: string;
    showAsGrid?: boolean;
    images: GalleryImage[];
};

const galleryAreas: GalleryAreas[] = [
    {
        name: "CSIT Posters",
        description:
            "Custom posters created to market CSIT events during 2020-2022. CSIT's robot mascot Bit, appears prominently throughout.",
        images: [
            {
                name: "Dumpling Night",
                imageId: "40d7c21e-1281-4a9a-816d-ff3f827b8300",
            },
            {
                name: "Bit Needs You",
                imageId: "690f5273-cc12-4131-3dff-745e10b1b100",
                isSquare: true,
            },
            {
                name: "Welcome Night 2022",
                imageId: "3a4a156c-0af6-4a7e-3912-bcad6981d100",
            },
            {
                name: "Professionals Australia Industry Talk",
                imageId: "ac6a1287-f1b8-46a9-ac59-83b45dae0300",
            },
            {
                name: "Chill Night",
                imageId: "e08ed681-a407-4cfc-fa7e-672190888800",
            },
            {
                name: "Boat Party",
                imageId: "f8e713c0-4070-40f5-e5b9-a129f2c56000",
            },
            {
                name: "Laser Bowling",
                imageId: "5847bdb1-1ed0-4b12-d792-82f0e883ea00",
            },
            {
                name: "Q&A with Atlassian",
                imageId: "8f85e6c4-1657-4f54-3f8b-ac0fd2b28900",
            },
            {
                name: "Bit 3D Glasses",
                imageId: "7a8f83b6-f20f-4a92-3d3c-0ba5d2364100",
                isSquare: true,
            },
            {
                name: "Welcome Night 2021",
                imageId: "4db2ff9a-a6e4-4a6a-b8d7-5f85cbee1b00",
            },
            {
                name: "ESRI Tech Talk",
                imageId: "f415b14b-da81-4e89-9227-5d91b1c1b200",
            },
        ],
    },
    {
        name: "Discord Icons",
        description:
            "Icons created for various discord servers from 2018-2022.",
        showAsGrid: true,
        images: [
            {
                name: "Apex Of Sol",
                imageId: "86c464cf-149d-43bc-f9e0-ab3a3e303800",
                isSquare: true,
            },
            {
                name: "Attrium",
                imageId: "a7b41c5b-fb51-4886-6add-1abb201a9000",
                isSquare: true,
            },
            {
                name: "DnD",
                imageId: "aae7ae83-07b0-4b10-f0d8-63e1d225c400",
                isSquare: true,
            },
            {
                name: "Wiggles",
                imageId: "f47af91f-0db3-4314-084f-d5065c29f400",
                isSquare: true,
            },
            {
                name: "Wiggles Pride",
                imageId: "d86d33c5-8f90-44e5-9390-f14a7a8e8900",
                isSquare: true,
            },
            {
                name: "Wiggles Xmas",
                imageId: "cfc146e3-b23e-4692-e197-383f530f3e00",
                isSquare: true,
            },
            {
                name: "Honey Heist",
                imageId: "e5a6dbf1-ce50-4845-1552-c03504ca9e00",
                isSquare: true,
            },
            {
                name: "Howdy Heist",
                imageId: "8bd22588-71ff-4099-94f3-b927092e0100",
                isSquare: true,
            },
            {
                name: "UniHack",
                imageId: "94f78c2f-0a44-460b-2edf-a4c883289000",
                isSquare: true,
            },
            {
                name: "Rat with Hat",
                imageId: "88c3bfe0-bca7-4fe1-a8b9-a34a12a23d00",
                isSquare: true,
            },
        ],
    },
    {
        name: "Other Designs",
        description: "Various other designs from personal projects",
        images: [
            {
                name: "Forest Bridge",
                imageId: "5391b6f7-e4ba-44ef-d948-a91d8613c400",
            },
            {
                name: "Desert Bridge",
                imageId: "5d860b1d-ed09-4490-0381-846bbb1db900",
            },
            {
                name: "Among Us",
                imageId: "b103aaf0-c7a9-4fdb-a463-e98e6442d500",
            },
            {
                name: "Tereth Vance",
                imageId: "534c508f-2b0c-4335-e203-98d25dd95f00",
                isSquare: true,
            },
            {
                name: "Giraffe",
                imageId: "099e236a-8112-4d39-a78f-3aad063c2a00",
            },
            {
                name: "Giraffe with Bread",
                imageId: "07444f96-d434-4950-380a-8d0240c47a00",
            },
            {
                name: "Pixel Art Profile (halo)",
                imageId: "994191a0-5175-471c-d5d8-d700270e2000",
            },
            {
                name: "Pixel Art Profile (robot)",
                imageId: "f427ad95-cbb4-4334-0b42-605c57ea4800",
            },
            {
                name: "Pixel Art Profile (scary)",
                imageId: "47aa401b-7840-4e7a-7360-90e0d515eb00",
            },
            {
                name: "Mockingbird",
                imageId: "afc4a784-9619-416f-a367-e631b9992700",
            },
            {
                name: "Julian Vector Profile (Pink)",
                imageId: "e144c124-a7f5-42bb-bcc1-8757e732c900",
            },
            {
                name: "Julian Vector Profile (Red)",
                imageId: "0851becd-492f-4a89-af6c-c246ceb8a800",
            },
            {
                name: "3D Robot Outline",
                imageId: "04640a7d-3230-439e-e1a1-69c807f6b100",
            },
            {
                name: "Happy Sunflower",
                imageId: "3b2829d3-36fc-40a1-6f2e-d3a50ed1b900",
                isSquare: true,
            },
            {
                name: "Lo-fi Giraffe",
                imageId: "3dc761bc-f866-4e94-48a0-3994edae8e00",
            },
        ],
    },
];

export default galleryAreas;
