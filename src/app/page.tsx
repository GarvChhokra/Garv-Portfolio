"use client"
import { useState, useEffect } from 'react';
import AboutUs from "@/components/AboutUs";
import Certificates from "@/components/Certifications";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePage from "@/components/HomePage";
import Projects from "@/components/Project";
import Link from "next/link";
import Loading from '@/components/Loading';
import Head from 'next/head';

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const delay = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(delay);
    }, []);

    return (
        <div>
            <Head>
                <title>Garv Chhokra</title>
                <meta name="description" content="Garv Chhokra's Portfolio" />
            </Head>
            {loading ? (
				<div>
                	<Loading/>
				</div>
            ) : (
                <div>
                    <Header />
                    <HomePage />
                    <AboutUs />
                    <Experience />
                    <Projects />
                    <Certificates />
                    <Contact />
                    <Footer />
                </div>
            )}
        </div>
    );
}
