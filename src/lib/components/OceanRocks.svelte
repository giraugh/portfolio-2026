<script lang="ts">
    import BackgroundRocks from "$lib/assets/background-rocks.svg";
    import ForegroundRocks from "$lib/assets/foreground-rocks.svg";
</script>

<img src={BackgroundRocks} class="bg-rocks" alt="" />
<img src={ForegroundRocks} class="fg-rocks" alt="" />

<style>
    img {
        pointer-events: none;
    }

    .bg-rocks {
        opacity: 0.3;
        filter: blur(4px);
        width: 100%;
        bottom: 0px;
        position: absolute;
        transform: scaleY(1.7) scaleX(1.3);
        transform-origin: bottom;
    }

    .fg-rocks {
        width: 100%;
        bottom: 0px;
        position: absolute;
        z-index: 99;
        transform: translateY(9%) scaleY(1.5);
        transform-origin: bottom;
    }

    @media (max-width: 600px) {
        img {
            width: 150% !important;
        }

        .fg-rocks {
            transform: translateY(9%) scaleY(2.3);
        }
    }
</style>
