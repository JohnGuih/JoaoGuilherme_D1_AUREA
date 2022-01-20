import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
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
      exitDelay: 300 * 7,
    })
  }
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cyberest</title>
      </Head>

      <div className="bg-image"></div>
      <div>
        <header>
          <h3>Cyberest</h3>
          <nav>
            <ul>
              <li><a href="#">Sobre</a></li>
            </ul>
            <ul>
              <li><a href="#">Negócios</a></li>
            </ul>
            <ul>
              <li><a href="#">Blog</a></li>
            </ul>
            <div className="buttons">
              <button className="login">Log in</button>
              <button className="signup">Sing up</button>
            </div>
          </nav>
        </header>
        <div className="heading">
          <h2 className="cyberpunk glitch layers" data-text="Wake up">
            <p>Wake up</p>
          </h2>
          <div className="wrapper" style={{ marginTop: '20px' }}>
            <div className="offset">
              <div className="text stack stackOut" style={{ '--stacks': '3', filter: 'drop-shadow(0 1px 3px #dbb826)' }}>
                <span style={{ '--index': "0" }}>Samurai</span>
                <span style={{ '--index': '1' }}>Samurai</span>
                <span style={{ '--index': '2' }}>Samurai</span>
              </div>
            </div>
            <div className="offset">
              <div className="text stack stackOut" style={{ '--stacks': '3', 'filter': 'drop-shadow(0 1px 3px #dbb826)' }}>
                <span style={{ '--index': "0" }}>Melhor genero de ficção científica</span>
                <span style={{ '--index': '1' }}>Melhor genero de ficção científica</span>
                <span style={{ '--index': '2' }}>Melhor genero de ficção científica</span>
              </div>
            </div>
            <div className="offset">
              <div className="text stack stackOut" style={{ '--stacks': '3', 'filter': 'drop-shadow(0 1px 3px #dbb826)' }}>
                <span style={{ '--index': "0" }}>Cyberpunk2077 é ruim</span>
                <span style={{ '--index': '1' }}>Cyberpunk2077 é ruim</span>
                <span style={{ '--index': '2' }}>Cyberpunk2077 é ruim</span>
              </div>
            </div>
            <div className="offset">
              <div className="text stack stackOut" style={{ '--stacks': '3', 'filter': 'drop-shadow(0 1px 3px #dbb826)' }}>
                <span style={{ '--index': '0' }}>{"Biscoito > Bolacha"}</span>
                <span style={{ '--index': '1' }}>{"Biscoito > Bolacha"}</span>
                <span style={{ '--index': '2' }}>{"Biscoito > Bolacha"}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-container">
          <div className="grid">
            <div className="column animate-before">
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </div>
            <div className="column animate-before">
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </div>
            <div className="column animate-before">
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </div>
            <div className="column animate-before">
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </div>
            <div className="column animate-before">
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </div>
            <div className="column animate-before">
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </div>
            <div className="column animate-before">
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </div>
          </div>
          <div className="grid">
            <div className="column animate-before">
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </div>
            <div className="column animate-before">
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </div>
            <div className="column animate-before">
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </div>
            <div className="column animate-before">
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </div>
            <div className="column animate-before">
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </div>
            <div className="column animate-before">
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </div>
            <div className="column animate-before">
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </div>
          </div>
          <div className="grid">
            <div className="column animate-before">
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </div>
            <div className="column animate-before">
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </div>
            <div className="column animate-before">
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </div>
            <div className="column animate-before">
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </div>
            <div className="column animate-before">
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </div>
            <div className="column animate-before">
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </div>
            <div className="column animate-before">
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item">
                {/* easter egg do amogus */}
                <img src="https://logosmarcas.net/wp-content/uploads/2021/08/Among-Us-Logo.png" width="150"
                  style={{
                    'padding': "20px",
                    '-webkit-transform': 'scaleX(-1)',
                    transform: 'scaleX(-1)'
                  }} />
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="column animate-before">
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </div>
            <div className="column animate-before">
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </div>
            <div className="column animate-before">
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </div>
            <div className="column animate-before">
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </div>
            <div className="column animate-before">
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </div>
            <div className="column animate-before">
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </div>
            <div className="column animate-before">
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
