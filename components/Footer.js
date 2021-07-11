import Link from 'next/link';
import Footerstyles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={Footerstyles.footer}>
            <p>Copyright &copy; DJ events 2021</p>
            <p>
                <Link href="/about">About this project</Link>
            </p>
        </footer>
    )
}
