if (process.browser) {
    const grids = document.querySelectorAll('.grid')
    const headings = document.querySelectorAll('.heading .stack')

    function enterScreen(index) {
        const grid = grids[index]
        const heading = headings[index]
        const gridColumns = grid.querySelectorAll('.column')

        grid.classList.add('active')

        gridColumns.forEach(element => {
            element.classList.remove('animate-before', 'animate-after')
        })

        heading.classList.remove('animate-before', 'stackOut')
        heading.classList.add('stackIn')
    }

    function exitScreen(index, exitDelay) {
        const grid = grids[index]
        const heading = headings[index]
        const gridColumns = grid.querySelectorAll('.column')

        gridColumns.forEach(element => {
            element.classList.add('animate-after')
        })

        heading.classList.remove('stackIn')
        heading.classList.add('stackOut')

        setTimeout(() => {
            grid.classList.remove('active')
        }, exitDelay)
    }

    function setupAnimationCycle({ timePerScreen, exitDelay }) {
        const cycleTime = timePerScreen + exitDelay;
        let nextIndex = 0;

        function nextCycle() {
            if (!document.hidden) {
                const currentIndex = nextIndex

                enterScreen(currentIndex)

                setTimeout(() => {
                    exitScreen(currentIndex, exitDelay)
                }, timePerScreen)

                nextIndex = (nextIndex >= grids.length - 1)
                    ? 0
                    : nextIndex + 1
            }
        }
        setInterval(nextCycle, cycleTime)
    }

    setupAnimationCycle({
        timePerScreen: 2000,
        exitDelay: 200 * 7,
    })
}