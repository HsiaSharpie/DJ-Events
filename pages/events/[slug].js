import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import Eventstyles from '@/styles/Event.module.css';

export default function EventPage({ event }) {
    const router = useRouter();

    return (
        <Layout>
            <div className={Eventstyles.event}>
                <span>
                    {new Date(event.date).toLocaleDateString('en-US')} at {event.time}
                </span>
                <h1>{event.name}</h1>
                <ToastContainer />
                {event.image && (
                    <div className={Eventstyles.image}>
                        <Image src={event.image.formats.medium.url} width={960} height={600}/>
                    </div>
                )}

                <h3>Performers</h3>
                <p>{event.performers}</p>
                <h3>Description</h3>
                <p>{event.description}</p>
                <h3>Venue: {event.venue}</h3>
                <p>{event.address}</p>

                <Link href='/events'>
                    <a className={Eventstyles.back}>{'<'}Go Back</a>
                </Link>
            </div>
        </Layout>
    )
}

// export async function getStaticPaths() {
//     const res = await fetch(`${API_URL}/events`);
//     const events = await res.json();

//     const paths = events.map(event => ({
//         params: { slug: event.slug },
//     }))

//     // paths: [
//     //   {params: {slug: slug-1}}
//     //   {params: {slug: slug-2}}
//     //   {params: {slug: slug-3}}
//     // ]

//     return {
//         paths,
//         fallback: true  // fallback: false -> show 404 if the path is not found
//     }
// }

// export async function getStaticProps({ params: { slug }}) {
//     const res = await fetch(`${API_URL}/events?slug=${slug}`);
//     const event = await res.json();

//     return {
//         props: {
//             event: event[0]
//         },
//         revalidate: 1,
//     }
// } 


export async function getServerSideProps(context) {
    const slug = context.query.slug;
    const res = await fetch(`${API_URL}/events?slug=${slug}`);
    const event = await res.json();

    return {
        props: {
            event: event[0]
        }
    }
} 
