<script lang="ts">
    import { PROJECT_CATEGORIES, PROJECTS } from "$lib/data/projects";
    import { getProjectImage, makeImageLink } from "$lib/utils/makeImageLink";
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
            const catFilter = project.categories.some(
                (cat) => searchState.categories[cat],
            );
            return nameFilter && catFilter;
        });
    });
</script>

<section class="dark">
    <div class="inset">
        <h2>Projects</h2>
        <p>
            Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem
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
        {#each projects as project (project.name)}
            <li>
                <a
                    class="project-card"
                    href={project.link}
                    style:--project-shadow={project.shadowCol}
                >
                    <img src={getProjectImage(project)} alt="" />
                    <div class="details">
                        <strong>{project.name}</strong>
                        <span>{project.description}</span>
                    </div>
                </a>
            </li>
        {/each}
    </ul>
</section>

<style>
    section {
        min-height: 1000px;
    }

    .inset {
        padding: 4em;
        max-width: 800px;
        margin: auto;
    }

    @media (max-width: 600px) {
        .inset {
            padding: 2.5em;
        }
    }

    search,
    h2,
    p {
        margin-block: 1.3rem;
    }

    h2 {
        font-size: 3rem;
    }

    search {
        display: flex;
        gap: 0.7rem;

        & input {
            padding: 0.5em;
            background: var(--col-surface-purple);
            color: white;
            border-radius: var(--rad-button);
            border: none;
            font-size: inherit;
        }
    }

    .checkbox-btn {
        display: flex;
        align-items: center;
        padding-inline: 0.5em;
        gap: 0.7em;

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
    }

    .projects-list {
        list-style-type: none;
        margin: 0;
        margin: auto;
        max-width: 1000px;
        padding-inline: 3em;
        padding-block: 3em;

        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 2em;
    }

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
            box-shadow: 0px 5px 0px 0px var(--project-shadow, red);
        }
    }
</style>
