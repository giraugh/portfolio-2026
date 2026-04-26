<script lang="ts">
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import { PROJECT_CATEGORIES, PROJECTS } from "$lib/data/projects";
    import { CheckIcon, XIcon } from "lucide-svelte";

    const INITIAL_SEARCH_STATE = {
        filter: "",
        categories: Object.fromEntries(
            PROJECT_CATEGORIES.map((c) => [c.value, true]),
        ),
    };
    let searchState = $state(INITIAL_SEARCH_STATE);
    let searchDirty = $derived(
        searchState.filter.length ||
            Object.values(searchState.categories).some((x) => !x),
    );

    let projects = $derived.by(() => {
        return PROJECTS.filter((project) => {
            const nameFilter =
                searchState.filter.trim().length === 0 ||
                project.name
                    .toLowerCase()
                    .includes(searchState.filter.toLowerCase()) ||
                project.description
                    .toLowerCase()
                    .includes(searchState.filter.toLowerCase());
            const catFilter = (project?.categories ?? []).some(
                (cat) => searchState.categories[cat],
            );
            return nameFilter && catFilter;
        });
    });

    let truncated = $state(true);
    let truncatedProjects = $derived.by(() => {
        const amount = truncated ? 8 : 9999;
        return projects.slice(0, amount);
    });

    $effect(() => {
        if (searchDirty) {
            truncated = false;
        }
    });
</script>

<section class="dark">
    <div class="section-inset">
        <h2>Projects</h2>
        <p>
            I've collected quite a few random projects by this point. Theres
            some video games, physics toys, software libraries and even a comic
            book in here!
        </p>
        <search>
            <input
                type="search"
                placeholder="Filter projects"
                name="project-search"
                bind:value={searchState.filter}
            />
            <div class="categories">
                {#each PROJECT_CATEGORIES as category (category.value)}
                    <label class="checkbox-btn button">
                        <input
                            type="checkbox"
                            class="hidden-input"
                            bind:checked={
                                searchState.categories[category.value]
                            }
                        />
                        <div class="tick-container">
                            <CheckIcon strokeWidth="4" />
                        </div>
                        {category.label}
                    </label>
                {/each}
            </div>
            {#if searchDirty}
                <button
                    class="outline-button"
                    type="button"
                    onclick={() => {
                        searchState = INITIAL_SEARCH_STATE;
                    }}
                >
                    Clear <XIcon />
                </button>
            {/if}
        </search>
    </div>

    <ul class="projects-list">
        {#each truncatedProjects as project (project.name)}
            <li>
                <ProjectCard {project} />
            </li>
        {/each}
    </ul>

    {#if truncated}
        <button
            class="show-more-btn"
            onclick={() => {
                truncated = false;
            }}>Show all {projects.length} projects</button
        >
    {/if}
</section>

<style>
    section {
        padding-top: 4em;
    }

    search {
        display: flex;
        flex-wrap: wrap;
        gap: 0.7rem;
        margin-block-end: 0rem;

        & input {
            padding: 0.5em;
            background: var(--col-surface-purple);
            color: white;
            border-radius: var(--rad-button);
            border: none;
            font-size: inherit;
        }
    }

    @media (max-width: 600px) {
        input[type="search"] {
            flex-grow: 1;
            width: 100%;
        }

        .categories {
            width: 100%;
            flex-grow: 1;
        }

        .categories > * {
            flex-grow: 1;
        }
    }

    .checkbox-btn {
        display: flex;
        align-items: center;
        padding-inline: 0.5em;
        gap: 0.7em;

        &:has(input:focus-visible) {
            outline: 1px solid white;
        }

        & .tick-container {
            background: var(--col-surface-purple-bright);
            border-radius: 10px;
            display: flex;
            align-items: center;

            & :global(> *) {
                scale: 1.2;
                translate: 3px 0;
                transition:
                    scale 0.15s cubic-bezier(0.34, 1.56, 0.64, 1),
                    opacity 0.05s;
            }
        }

        &:not(:has(input:checked)) .tick-container :global(> *) {
            opacity: 0;
            scale: 1;
        }
    }

    .categories {
        display: flex;
        gap: 0.7em;
        flex-wrap: wrap;
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

    .show-more-btn {
        margin: auto;
        margin-block-start: 1rem;
    }
</style>
