import Hero from './Hero'
import Features from './Features'
import Call_to_action from './Call_to_action'

import { Helmet } from 'react-helmet-async'

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Sophia – Curated Tech Insights & Daily Knowledge</title>
                <meta
                    name="description"
                    content="Get daily curated articles with audio insights on AI, ML, AR/VR, Blockchain, and tech trends. Powered by Sophia AI personas."
                />
                <meta property="og:title" content="Sophia – Daily Curated Tech Insights" />
                <meta
                    property="og:description"
                    content="Stay ahead with daily updated tech articles and audio summaries for busy professionals."
                />
                <meta property="og:url" content="https://sophia-home.vercel.app/" />
                <meta name="robots" content="index, follow" />
            </Helmet>

            <Hero />
            <div id="features"><Features /></div>
            {/* <Call_to_action /> */}
        </>
    )
}

export default Home
