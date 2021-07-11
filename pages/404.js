import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';
import Layout from '@/components/Layout';
import NotFoundstyles from '@/styles/404.module.css';

export default function NotFoundPage() {
    return (
        <Layout title='Page Not Found'>
            <div className={NotFoundstyles.errors}>
                <h1><FaExclamationTriangle />404</h1>
                <h4>Sorry, there is nothing here</h4>
                <Link href='/'>Go Back Home</Link>
            </div>
        </Layout>
    )
}
