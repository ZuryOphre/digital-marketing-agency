import React, { useEffect, useState } from 'react';
import { AiOutlineExpandAlt } from 'react-icons/ai';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import { db as firestore } from '@/config/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const Gallery = () => {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState('');
    const [filter, setFilter] = useState('');
    const [tags, setTags] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(firestore, 'gallery'), (snapshot) => {
            const newData = snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setData(newData);

            const uniqueTags = [...new Set(newData.map(item => item.tag))];
            setTags(uniqueTags);
        });

        return () => unsubscribe();
    }, []);

    const filteredData = filter === 'none' ? data : data.filter(x => x.tag === filter);

    const slides = filteredData.map((item) => ({
        src: item.imageURL,
        width: 2048,
        height: 1365,
        srcSet: [
            { src: item.imageURL, width: 320, height: 213 },
            { src: item.imageURL, width: 640, height: 426 },
            { src: item.imageURL, width: 1200, height: 800 },
            { src: item.imageURL, width: 2048, height: 1365 },
            
        ],
    }));

    return (
        <div className="w-full">
            <div className="mb-4 flex justify-center mt-0">
                <select 
                    value={filter} 
                    onChange={(e) => setFilter(e.target.value)}
                    className="text-cyanforce mb-4 bg-darkgray hover:bg-sky cursor-pointer border-none focus:outline-none rounded-md"
                >
                    <option value="none">none</option>
                    {tags.map((tag, index) => (
                        <option key={index} value={tag}>{tag}</option>
                    ))}
                </select>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-3 h-full  gap-4 flex-wrap mx-2 md:mx-0">
                {filteredData.map((x, index) => {
                    return (
                        <div key={index} className="md:h-[25vw] h-screen relative">
                            <div className="group h-full">
                                <div
                                    className="bg-cover bg-center h-full w-full bg-no-repeat"
                                    style={{ backgroundImage: `url("${x.imageURL}")` }}
                                >
                                    <div className="text-3xl text-white absolute bottom-0 left-2 z-10">
                                        <div>{x.tag}</div>
                                        <div>{x.name}</div>
                                    </div>
                                </div>
                                <div
                                    className="bg-black opacity-0 group-hover:opacity-75 absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out"
                                    onClick={() => {
                                        setOpen(true);
                                        setImage(x.imageURL);
                                    }}
                                >
                                    <p className="text-white">
                                        <AiOutlineExpandAlt className="text-5xl border w-16 h-16 bg-neutral-500 hover:bg-white hover:text-black p-3 cursor-pointer rounded-full" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                plugins={[Zoom]}
                showPrevNext={false}
                slides={slides}
            />
        </div>
    );
};

export default Gallery;