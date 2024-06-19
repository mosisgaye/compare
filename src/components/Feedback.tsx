'use client';

import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const Feedback = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);

            if (currentScrollY > 300) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSubmit = async () => {
        if (rating > 0) {
            try {
                const response = await fetch('/api/feedback', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ rating }),
                });
                if (response.ok) {
                    alert('Thank you for your feedback!');
                } else {
                    alert('There was an error submitting your feedback.');
                }
            } catch (error) {
                console.error('Error submitting feedback:', error);
            }
        } else {
            alert('Please select a rating.');
        }
    };

    const getDynamicBottom = () => {
        const maxScroll = window.innerHeight / 2 - 50;
        return Math.min(maxScroll, scrollY - 250);
    };

    return (
        <div
            className={`transition-opacity duration-500 ease-in-out ${
                show ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            style={{
                position: 'fixed',
                bottom: show ? getDynamicBottom() : -100,
                right: '20px',
                zIndex: 50,
            }}
        >
            <div className="bg-white shadow-lg rounded p-4">
                <p className="text-lg font-semibold mb-2">Êtes-vous satisfait(e) de ce site ?</p>
                <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                       <Star
                            key={star}
                            className={`h-8 w-8 cursor-pointer ${star <= (hover || rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                            onMouseEnter={() => setHover(star)}
                            onMouseLeave={() => setHover(0)}
                            onClick={() => setRating(star)}
                        />
                    ))}
                </div>
                <button className="mt-2 text-sm text-gray-600 hover:underline" onClick={handleSubmit}>
                    Laisser un message
                </button>
            </div>
        </div>
    );
};

export default Feedback;
