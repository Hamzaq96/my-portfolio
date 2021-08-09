import React from 'react';

function Home() {
    return (
        <main>
            {/* <img src={image} alt="Background image" className="absolute object-cover w-full h-full"/> */}
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl font-bold items-center leading-none lg:leading-snug home-name">
                    Hi, I am Hamza.
                    <p className="text-5xl font-bold">
                        I am a Software Engineer.
                    </p>
                </h1>
                
            </section>
        </main>
    );
}

export default Home
