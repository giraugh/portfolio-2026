<script>
    import galleryAreas from "$lib/data/gallery";
    import { makeImageLink } from "$lib/utils/makeImageLink";
    import { PaintbrushIcon } from "lucide-svelte";

    const FEATURED = [
        galleryAreas[0].images[8],
        galleryAreas[1].images[9],
        galleryAreas[1].images[0],
        galleryAreas[2].images[4],
    ];
</script>

<section class="dark" id="gallery-section">
    <div class="section-inset">
        <h2>Gallery</h2>
        <div class="featured-images">
            {#each FEATURED as image, i}
                <img
                    alt={image.name}
                    title={image.name}
                    src={makeImageLink(image.imageId)}
                    style:--rot={`${(i % 2 === 0 ? 1 : -1) * 3}deg`}
                />
            {/each}
        </div>
        <p>
            Check out a showcase of my design and illustration work for various
            university communities, discord servers and personal projects.
            Primarily featuring vector and pixel art pieces.
        </p>
        <a class="open-gallery button" href="/gallery"
            ><PaintbrushIcon /> Open Gallery</a
        >
    </div>
</section>

<style>
    .featured-images {
        display: flex;
        justify-content: space-evenly;
        overflow: hidden;
        position: relative;
        padding-block: 1em;

        &::before {
            display: block;
            content: "";
            background: linear-gradient(
                to right,
                transparent,
                hsl(from var(--col-surface-purple) h s l / 30%),
                transparent
            );
            position: absolute;
            inset: 0;
        }

        img {
            object-fit: cover;
            width: 10em;
            aspect-ratio: 1;
            border-radius: 10px;

            transform: scale(0.85) rotateZ(var(--rot));
            box-shadow: 0px 3px 5px 0px var(--col-surface);
        }
    }

    @media (max-width: 600px) {
        /** Show only 2 on mobile */
        img:nth-child(n + 3) {
            display: none;
        }
    }

    @media (max-width: 800px) {
        /** Show only 2 on mobile */
        img:nth-child(n + 4) {
            display: none;
        }
    }

    .open-gallery {
        margin: auto;
    }
</style>
