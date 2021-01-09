import Link from 'next/link';

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is a democratic leaderboard of the best games in the world</h2>
            <Link href="/">
                <a>Home</a>  
            </Link>
        </div>
    )
}

export default About