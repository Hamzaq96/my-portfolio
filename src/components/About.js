import React, {useState, useEffect} from 'react';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

function About() {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"] {
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0]))
            .catch(console.error);
    }, []);

    if(!author) {
        return(
            <div>
                Loading...
            </div>
        )
    }
    return (
        <main className="relative">
            {/* <img /> */}
            <div className="p-15 container mx-auto relative">
                <section className="bg-grey-800 rounded-lg shadow-2xl lg:flex p-20">
                    <img src={urlFor(author.authorImage).url()} className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8" alt={author.name} />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-blue-400 mb-4">
                            Hey there. I am {""}
                            <span className="text-blue-200">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-gray-900">
                            <BlockContent blocks={author.bio} projectId="rrc91a42" dataset="production" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default About
