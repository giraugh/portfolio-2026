<script lang="ts">
    import { browser } from "$app/environment";

    const FISH_ANIMS = ["fish-swim-left", "fish-swim-right"];

    const fishSvgPaths = import.meta.glob("/src/lib/assets/fish/*.svg", {
        eager: true,
        query: "?raw",
        import: 'default',
    });

    const fishImages = Object.entries(fishSvgPaths).map(([path, raw]) => ({
        name: path.split("/").pop()!.replace(".svg", ""),
        raw: raw as string,
    }));

    let fishImageIndex = $state((Math.random() * fishImages.length) | 0);
    let fishImage = $derived(fishImages[fishImageIndex]);
    let fishSize = $state(50 + Math.random() * 100);

    function setFishAnimDelay(fishEl: HTMLElement) {
        fishEl.style.animationDelay = `${-20_000 * Math.random()}ms`;
    }

    function setFishAnim(fishEl: HTMLElement) {
        // Change colour
        fishImageIndex = (Math.random() * fishImages.length) | 0;
        fishSize = 30 + Math.random() * 100;

        // Place them somewhere below the text
        fishEl.style.top = `${50 + Math.random() * 40}%`;

        // And restart anim on one of the two sides
        const animationIndex = Math.random() < 0.5 ? 0 : 1;
        const animationName = FISH_ANIMS[animationIndex];
        const animationDuration = Math.floor(Math.random() * 3 + 18);
        fishEl.style.animation = "none";
        fishEl.offsetHeight; // force reflow
        fishEl.style.animation = `${animationName} ${animationDuration}s linear`;
        requestAnimationFrame(() => {
            fishEl.getAnimations().forEach(a => a.play())
        })
    }
</script>

{#if browser}
    <div
        class="fish"
        onanimationend={(e: AnimationEvent) => {
            if (e.target && e.target instanceof HTMLElement) {
                e.target.style.animationDelay = `${20_000 * Math.random()}ms`
                setFishAnim(e.target);
            }
        }}
        use:setFishAnim
        use:setFishAnimDelay
        style:--fish-size={`${fishSize}px`}
    >
        {@html fishImage.raw}
    </div>
{/if}

<style>
    .fish {
        width: var(--fish-size);
        position: absolute;
        animation-timing-function: linear;
    }

    .fish :global(> *) {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    :global {
        @keyframes fish-swim-right {
            from {
                left: calc(-1 * var(--fish-size));
                scale: -1 1;
            }

            to {
                left: 100%;
                scale: -1 1;
            }
        }

        @keyframes fish-swim-left {
            from {
                left: 100%;
                scale: 1 1;
            }

            to {
                left: calc(-1 * var(--fish-size));
                scale: 1 1;
            }
        }
    }
</style>
