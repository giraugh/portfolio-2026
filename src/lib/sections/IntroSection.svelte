<script lang="ts">
    import { Github, Linkedin } from "lucide-svelte";
    import Bubble from "$lib/components/Bubble.svelte";
    import Fish from "$lib/components/Fish.svelte";
    import OceanRocks from "$lib/components/OceanRocks.svelte";

    const GITHUB_LINK = "https://github.com/giraugh";
    const LINKEDIN_LINK = "https://www.linkedin.com/in/ewan-breakey-8294241a9/";
</script>

<section>
    <div class="art">
        <div class="spike-container">
            <!-- <Spikes
                simplexFreq={0.5}
                spikeResolution={1500 / 150}
                spikeHeight={400}
                spikeBaseHeight={0}
                fill="var(--col-surface-blue-ddd)"
            /> -->
        </div>

        <div class="ocean-container">
            <OceanRocks />

            <!-- Bubbles -->
            {#each { length: 30 } as _, i (i)}
                <Bubble />
            {/each}

            <!-- Fish -->
            {#each { length: 8 } as _, i (i)}
                <Fish />
            {/each}
        </div>
    </div>
    <div class="content">
        <h1>Ahoy there!</h1>
        <p>
            My names Ewan - I'm a web developer based in Melbourne, Australia. <br
            />Keep scrolling to dive into my web, illustration and game dev
            work!
        </p>
        <div class="buttons">
            <a target="_blank" href={GITHUB_LINK} class="button"
                ><Github />Github</a
            >
            <a target="_blank" href={LINKEDIN_LINK} class="button"
                ><Linkedin />LinkedIn</a
            >
        </div>
    </div>
</section>

<style>
    section {
        color: var(--col-text-white);
        min-height: 95dvh;
        box-sizing: border-box;
        overflow: hidden;
        position: relative;
        padding-block-start: 10em;
        padding-block-end: 5em;
    }

    .content {
        position: relative;
        padding-left: 15%;
        width: 100%;
        box-sizing: border-box;

        /* Let non-content pointer events fall through */
        pointer-events: none;
        a[href] {
            pointer-events: all;
        }

        p {
            max-width: 40em;
        }
    }

    h1 {
        font-size: 4em;
        margin-block-end: 0.3em;
    }

    .art {
        width: 100%;
        position: absolute;
        inset: 0;
        pointer-events: none;

        background: linear-gradient(
            180deg,
            var(--col-surface-blue-d),
            var(--col-surface-blue-dd)
        );
    }

    .ocean-container {
        pointer-events: all;
    }

    .spike-container {
        position: absolute;
        bottom: 100%;
        width: 100%;
        height: 200px;
        bottom: 0;
        scale: 1 -1;
        translate: 0 30px;
        filter: blur(3px);
        opacity: 0.3;

        animation: fade-in 4s forwards;
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
        }
    }

    .buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5em;

        .button {
            background: var(--col-surface-blue);
        }
    }

    @media (max-width: 600px) {
        section {
            padding-block-start: 2em;
        }

        .content {
            padding-left: 20%;
            padding-right: 10%;

            h1 {
                font-size: 2.5rem;
            }
        }
    }
</style>
