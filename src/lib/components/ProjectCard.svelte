<script lang="ts">
    import { getProjectImage } from "$lib/utils/makeImageLink";
    import { UsersIcon, ClockIcon } from "lucide-svelte";
    import type { Project } from "$lib/data/projects";

    const { project }: { project: Project } = $props();
</script>

<a
    class="project-card"
    class:non-square={project.nonSquareImage}
    href={project.link}
    target="_blank"
    style:--project-shadow={project.shadowCol}
>
    <img src={getProjectImage(project)} alt="" />
    <div class="details">
        <strong>
            <div class="name">
                {project.name}
                {#if project.author}
                    <span class="author">by {project.author.name}</span>
                {/if}
            </div>
            <div class="tags">
                {#each project.tags as tag (tag)}
                    {#if tag === "collab"}
                        <span class="tag" title="This was a collaboration">
                            <UsersIcon size="17" />
                        </span>
                    {:else if tag === "old"}
                        <span
                            class="tag"
                            title="This is an older project of mine"
                        >
                            <ClockIcon size="17" />
                        </span>
                    {/if}
                {/each}
            </div>
        </strong>
        <span>{project.description}</span>
    </div>
</a>

<style>
    .project-card {
        display: flex;
        flex-direction: column;
        gap: 0.7em;
        text-decoration: none;
        color: inherit;

        &:hover strong {
            text-decoration: underline;
        }

        strong {
            font-size: 1.1rem;
            display: flex;
            align-items: center;
            gap: 0.5em;
            justify-content: space-between;
        }

        .author {
            font-size: 0.75rem;
            opacity: 0.7;
            padding-left: 5px;
        }

        span {
            font-size: 0.9rem;
            opacity: 0.6;
        }

        .details {
            display: flex;
            flex-direction: column;
            gap: 0.2em;
        }

        img {
            width: 100%;
            height: 8em;
            object-fit: cover;
            border-radius: 10px;
            overflow: hidden;

            /* Or maybe we want a lighter per-project colour for this? */
            transition:
                box-shadow 0.1s,
                transform 0.1s;
            box-shadow: 0px 5px 0px 0px var(--project-shadow, red);
        }

        &:hover img {
            box-shadow: 0px 8px 0px 0px var(--project-shadow, red);
            transform: translateY(-3px);
        }

        &:active img {
            box-shadow: 0px 3px 0px 0px var(--project-shadow, red);
            transform: translateY(2px);
        }

        &.non-square img {
            object-fit: contain;
            background: white;
        }
    }

    .tags {
        display: flex;
        align-items: center;
        gap: 0.25em;
    }
</style>
