import Link from "next/link";
export default function Nav() {
    return (
        <div class="nav">
            <h1><a class="season" href="/en/about"><img class="seasonimg" src="/014fc8895cdc3124ba35f20de37d6872.webp"></img></a></h1>
            <ul>
                <li><Link href="/ko/about">about</Link></li>
                <li><a href="https://blog.nauzome.com/">Blog</a></li>
                <li><Link href="/ko/contact">contact</Link></li>
                <li><Link href="/ko/avatar">avatar</Link></li>
                <li><Link href="/ko/donation">Donation</Link></li>
                <li><Link href="/ko/afctivity">afctivity</Link></li>
                <li><Link href="/ko/ethics">ethics</Link></li>
                <li><Link href="/ko/history">history</Link></li>
                <li><Link href="/ko/license">license</Link></li>
                <li class="tagb"><a href="#lag">language</a></li>
            </ul>
        </div>
    );
}