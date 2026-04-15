<script lang="ts">
    import galleryAreas, { type GalleryImage } from "$lib/data/gallery";
    import { makeImageLink } from "$lib/data/projects";
    import { ArrowLeft } from "lucide-svelte";

    let focusedImage: null | GalleryImage = $state(null);
    let dialog: HTMLDialogElement | undefined = $state(undefined);

    const focusImage = (image: GalleryImage, event: MouseEvent) => {
        // Update focused image
        focusedImage = image;

        // fallback if view transitions not available
        if (!document.startViewTransition) {
            dialog?.showModal();
            return;
        }

        // Set transition name on image
        const sourceImage = (event.currentTarget as HTMLElement).querySelector(
            "img",
        )!;
        sourceImage.style.viewTransitionName = "zoom-in";

        // Start transition
        document.startViewTransition(() => {
            // Show modal
            dialog?.showModal();

            // Move transition name to dialog image
            sourceImage.style.viewTransitionName = "";
            const modalImage =
                document.querySelector<HTMLElement>("dialog img")!;
            modalImage.style.viewTransitionName = "zoom-in";
        });
    };

    const unfocusImage = () => {
        // Fallback if view transition not supported
        if (!document.startViewTransition) {
            focusedImage = null;
            dialog?.close();
            return;
        }

        // Fetch and prepare actors
        const dialogImage = document.querySelector<HTMLElement>("dialog img")!;
        const sourceImage = document.querySelector<HTMLElement>(
            `img#gal-${focusedImage!.imageId}`,
        )!;
        dialogImage.style.viewTransitionName = "zoom-out";

        // Start transition
        const transition = document.startViewTransition(() => {
            dialog?.close();
            sourceImage.style.viewTransitionName = "zoom-out";

            // Unfocus the image
            focusedImage = null;
        });

        // Cleanup after transition
        transition.finished.then(() => {
            sourceImage.style.viewTransitionName = "";
        });
    };
</script>

<header>
    <div>
        <a class="back-link" href="/#gallery-section"><ArrowLeft />back</a>
        <h1>Gallery</h1>
        <p>
            A showcase of my design and illustration work for various university
            communities, discord servers and personal projects. Primarily
            features vector and pixel art pieces.
        </p>
    </div>
</header>
<div class="gallery">
    {#each galleryAreas as area}
        <section>
            <h2>{area.name}</h2>
            <p>{area.description}</p>
            <ul class:grid={area.showAsGrid}>
                {#each area.images as image}
                    <li class:square={image.isSquare}>
                        <button onclick={(e) => focusImage(image, e)}>
                            <img
                                id={`gal-${image.imageId}`}
                                src={makeImageLink(image.imageId)}
                                alt={image.name}
                                title={image.name}
                            />
                        </button>
                    </li>
                {/each}
            </ul>
        </section>
    {/each}

    <!-- Focused Image Modal -->
    <dialog
        bind:this={dialog}
        onclick={() => unfocusImage()}
        onkeydown={(e) => e.key === "Escape" && unfocusImage()}
    >
        {#if focusedImage}
            <img
                src={makeImageLink(focusedImage.imageId)}
                alt={focusedImage.name}
            />
            <strong>{focusedImage.name}</strong>
        {/if}
    </dialog>
</div>

<svelte:head>
    <title>Ewan Breakey ▶ Gallery</title>
</svelte:head>

<style lang="scss">
    :global(html),
    :global(body) {
        background: var(--col-surface-blue-dd);
        color: var(--col-text-white);
    }

    .gallery {
        padding: 2em;
        padding-block-start: 0;
    }

    header {
        color: var(--col-surface-blue-dd);
        position: relative;
        border-bottom: 5px dashed var(--col-text-white);

        &::before {
            display: block;
            position: absolute;
            inset: 0;
            content: "";
            background-color: #e5e5f7;
            background-image:
                radial-gradient(
                    var(--col-surface-blue-d) 25px,
                    transparent 25px
                ),
                radial-gradient(
                    var(--col-surface-blue-d) 25px,
                    var(--col-surface-white) 25px
                );
            background-size: 120px 120px;
            background-position:
                0 0,
                60px 60px;
        }

        div {
            padding: 2em;
            background: linear-gradient(
                70deg,
                rgba(255, 255, 255, 0.97) 40%,
                transparent
            );
            position: relative;
            z-index: 1;

            @media (max-width: 500px) {
                background: linear-gradient(
                    25deg,
                    rgba(255, 255, 255, 0.92) 55%,
                    transparent
                );
            }
        }
    }

    dialog {
        position: fixed;
        inset: 3em;
        border: none;
        background: none;
        cursor: zoom-out;

        &::backdrop {
            background: rgba(0, 0, 0, 0.6);
            cursor: zoom-out;
        }

        img {
            display: block;
            width: 100%;
            max-height: 80vh;
        }

        strong {
            color: white;
            font-size: 2rem;
        }
    }

    .back-link {
        display: flex;
        align-items: center;
        gap: 0.3em;
        color: inherit;
        opacity: 0.75;
        font-size: 0.9rem;
        margin-block-end: 0.75em;

        &:not(:hover) {
            text-decoration: none;
        }
    }

    h1 {
        font-size: 2.4rem;
        margin-block-end: 0;

        & + p {
            max-width: 38em;
        }
    }

    h2 {
        margin-block-end: 0;

        & + p {
            margin-block-start: 0.5em;
        }
    }

    section {
        margin-block: 4em;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
        gap: 1em;

        &.grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));

            li {
                max-height: initial;
                width: 100%;
            }
        }
    }

    li {
        max-height: 10em;

        &:not(.square) {
            flex: 1;
            min-width: 15em;
        }

        &.square {
            aspect-ratio: 1;
        }

        button {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            border: 0;
            overflow: hidden;
        }
    }

    li img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.2em;

        transition: transform 0.2s;
        &:hover {
            cursor: zoom-in;
            transform: scale(1.075);
        }
    }
</style>
