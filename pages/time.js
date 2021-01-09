import Link from 'next/link';

const Time = (props) => {
    
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();
    
    
    return (
        <div>
            <h1>Time</h1>
            <div>{dynamicDateString} (dynamic)</div>
            <div>{props.staticDateString} (static)</div>
            <Link href="/">
                <a>Home</a>  
            </Link>
        </div>
    )
}

export function getStaticProps() {
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        },
        revalidate: 5
    }
}


export default Time