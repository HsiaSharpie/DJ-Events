import Link from 'next/link';
import Image from 'next/image';
import EventItemstyles from '@/styles/EventItem.module.css';

export default function EventItem({ event }) {
    return (
        <div className={EventItemstyles.event}>
            <div className={EventItemstyles.img}>
                <Image 
                 src={event.image ? event.image.formats.thumbnail.url : '/images/event-default.png'}
                 width={170}
                 height={100}
                />
            </div>

            <div className={EventItemstyles.info}>
                <span>
                    {new Date(event.date).toLocaleDateString('en-US')} at {event.time}
                </span>
                <h3>{event.name}</h3>
            </div>

            <div className={EventItemstyles.link}>
                <Link href={`/events/${event.slug}`}>
                    <a className='btn'>Details</a>
                </Link>
            </div>
        </div>
    )
}
