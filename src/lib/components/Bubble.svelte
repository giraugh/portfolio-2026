<script lang="ts">
    const randomiseBubble = (buttonElement: HTMLElement) => {
        // Get container
        const buttonContainer = buttonElement.parentElement;
        if (!buttonContainer) return;

        // Randomise position and size within container
        const containerBB = buttonContainer.getBoundingClientRect();
        const x = Math.random() * containerBB.width;
        const delay = Math.random() * 13_000;
        buttonElement.style.left = `${x}px`;
        buttonElement.style.animationDelay = `0ms, ${delay}ms`;
        buttonElement.style.setProperty("--wiggle-delay", `${delay}ms`);
        buttonElement.style.setProperty(
            "--bubble-size",
            `${30 + Math.random() * 40}px`,
        );
        buttonElement.style.setProperty(
            "--wiggle-amt",
            `${8 + Math.random() * 5}px`,
        );
    };

    const initBubble = (buttonElement: HTMLElement) => {
        // Randomise the bubble
        randomiseBubble(buttonElement);

        // Start bubble animations w/ random negative delay
        // NOTE: but dont delay the fade-in
        const negativeDelay = Math.random() * -13_000;
        buttonElement.style.animationDelay = `0ms, ${negativeDelay}ms`;
        buttonElement.style.setProperty("--wiggle-delay", `${negativeDelay}ms`);
        buttonElement.getAnimations().forEach((a) => a.play());
    };

    const popBubble = (e: MouseEvent) => {
        if (e.currentTarget instanceof HTMLElement) {
            const bubbleElement = e.currentTarget;
            const existingAnims = bubbleElement.getAnimations();
            const popAnim = bubbleElement.animate(
                [{ scale: 1 }, { scale: 1.5 }],
                {
                    duration: 100,
                },
            );
            popAnim.addEventListener("finish", () => {
                existingAnims.forEach((a) => {
                    a.cancel();
                    randomiseBubble(bubbleElement);
                    a.play();
                });
            });
        }
    };
</script>

<!-- svelte-ignore a11y_mouse_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
    class="bubble"
    use:initBubble
    onmouseover={popBubble}
    onpointerdown={popBubble}
>
    <div class="wiggle">
        <svg
            width="419"
            height="419"
            viewBox="0 0 419 419"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="209.5" cy="209.5" r="209.5" fill="#4088CA" />
            <path
                d="M233 50L248.075 53.9165C302.342 68.0153 345.895 108.435 364 161.5V161.5"
                stroke="#ADD8E6"
                stroke-width="40"
                stroke-linecap="round"
            />
        </svg>
    </div>
</div>

<style>
    .bubble {
        --bubble-size: 50px;
        --wiggle-amt: 10px;

        --fade-opacity: 0;
        --float-opacity: 0;
        --opacity-mul: 0.8;
        opacity: calc(
            var(--opacity-mul) * min(var(--fade-opacity), var(--float-opacity))
        );

        top: 100%;
        filter: blur(3px);
        position: absolute;
        border-radius: 50%;
        aspect-ratio: 1;
        max-width: var(--bubble-size);
        animation:
            fade-in 1s ease-in forwards,
            float 13s linear forwards paused infinite;

        & > .wiggle {
            animation: wiggle 9s ease-in-out infinite;
            animation-delay: var(--wiggle-delay);
        }

        & svg {
            width: 100%;
            height: 100%;
        }

        @media (max-width: 600px) {
            --opacity-mul: 0.4;
        }
    }

    @media (prefers-reduced-motion) {
        .bubble {
            display: none;
        }
    }

    @keyframes wiggle {
        16.7% {
            transform: translateX(calc(var(--wiggle-amt) * -1));
        }
        33.4% {
            transform: translateX(var(--wiggle-amt));
        }
        50.1% {
            transform: translateX(calc(var(--wiggle-amt) * -1));
        }
        66.8% {
            transform: translateX(var(--wiggle-amt));
        }
        83.5% {
            transform: translateX(calc(var(--wiggle-amt) * -1));
        }
        100.2% {
            transform: translateX(var(--wiggle-amt));
        }
    }

    @keyframes float {
        0% {
            translate: 0 0;
            --float-opacity: 0;
        }
        30% {
            --float-opacity: 0.2;
        }
        80% {
            --float-opacity: 0.4;
        }
        100% {
            translate: 0 calc(-100cqh - var(--bubble-size));
            --float-opacity: 0.1;
        }
    }

    @keyframes fade-in {
        from {
            --fade-opacity: 0;
        }

        to {
            --fade-opacity: 1;
        }
    }

    @property --fade-opacity {
        syntax: "<number>";
        inherits: false;
        initial-value: 0;
    }

    @property --float-opacity {
        syntax: "<number>";
        inherits: false;
        initial-value: 0;
    }
</style>
