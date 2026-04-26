<script lang="ts">
    import rockForCrabImage from "$lib/assets/rock-for-crab.svg";
    import crabImage from "$lib/assets/crab.png";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import { SHOUT_OUT_PROJECTS } from "$lib/data/projects";
</script>

{#snippet intro()}
    <h2>Also check these out!</h2>
    <p>Here’s some cool projects from some friends of mine. You should give em a look! There's media projects, tools and videogames.</p>
{/snippet}

<section class="dark">
    <div class="spacer"></div>
    <div class="art">
        <img class="rock-for-crab" src={rockForCrabImage} alt="" />
        <div class="crab-wrapper">
            <img src={crabImage} alt="" />
        </div>
        <div class="desktop intro">
            {@render intro()}
        </div>
    </div>
    <div class="content">
        <div class="inner">
            <div class="mobile intro">
                {@render intro()}
            </div>

            <ul class="projects-list">
                {#each SHOUT_OUT_PROJECTS as project (project.name)}
                    <li>
                        <ProjectCard {project} />
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</section>

<style>
    .spacer {
        min-height: 100px;
    }

    .art {
        height: 300px;
        width: 100%;
        position: relative;
        overflow: hidden;
        padding-block-start: 100px;

        > .intro {
            position: relative;
            left: 600px;
            max-width: 500px;
        }
    }

    .intro {
        padding-block-end: 2em;

        & h2 {
            font-size: 3rem;
            margin-block: .2em;
        }

        & p {
            margin: 0;
        }
    }

    .intro.mobile {
        padding-block-start: 1em;

        & h2 {
            font-size: 2.1rem;
        }
    }

    @media (max-width: 1100px) {
        .desktop {
            display: none;
        }
    }

    @media (min-width: 1100px) {
        .mobile {
            display: none;
        }

        .content > .inner {
            padding-block-start: 2em;
        }
    }

    .crab-wrapper {
        width: 370px;
        position: absolute;
        top: 0;
        left: 10px;

        img {
            width: 100%;
            animation: occasional-jump 15s linear infinite;
        }

        &::before {
            display: block;
            content: "";
            position: absolute;
            background-color: black;
            opacity: 0.1;
            border-radius: 50%;
            width: 18em;
            height: 3em;
            bottom: 0.4em;
            left: 1em;
        }
    }

    .rock-for-crab {
        width: 800px;
        position: absolute;
        left: 0;
        top: 0;
        translate: -10% 120px;
        transform: scaleX(1.2);
    }

    .content {
        background: linear-gradient(to bottom, #341f80, var(--col-surface) 50%);
        width: 100%;
        min-height: 800px;
        padding-inline: 2em;
        box-sizing: border-box;

        & .inner {
            max-width: 800px;
            margin: auto;

        }
    }

    .projects-list {
        list-style-type: none;
        margin: 0;
        margin: auto;
        max-width: 1000px;
        padding-inline: 3em;
        padding-block: 1em 3em;

        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 2em;
    }

    @keyframes occasional-jump {
        1% {
            transform: translateY(0) scaleX(1);
        }
        49% {
            transform: translateY(0) scaleX(1);
        }
        50% {
            transform: translateY(-0.5em);
        }
        51% {
            transform: translateY(0) scaleX(-1);
        }
        99% {
            transform: translateY(0) scaleX(-1);
        }
        100% {
            transform: translateY(-0.5em);
        }
    }

    @media (max-width: 600px) {
        .spacer {
            min-height: 50px;
        }

        .crab-wrapper {
            transform: scale(0.8) translateY(5%) translateX(-10%);
        }

        .rock-for-crab {
            transform: scaleX(0.95) translateX(-10%);
        }
    }
</style>
