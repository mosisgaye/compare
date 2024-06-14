import React from 'react';
import Image from 'next/image'; // Assurez-vous d'utiliser Next.js pour cette ligne ou importez l'image autrement si vous n'utilisez pas Next.js

const TopPlan = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden grid md:grid-cols-3 gap-6 p-6">
            {/* Logo and Provider Info */}
            <div className="flex flex-col items-center md:items-start">
                <div className="provider_logo_item">
                    <a href="/internet-plans/providers/ebox" title="EBOX">
                        <figure className="mb-4">
                            <Image
                                src="/images/sfr.png"
                                alt="ebox"
                                title="Logo: ebox"
                                className="lazy illustrate logo-ebox"
                                width={120}
                                height={60}
                            />
                        </figure>
                    </a>
                </div>
                <div className="text-center md:text-left">
                    <div className="text-xl font-semibold">Sfr</div>
                    <div className="text-gray-500">Fibre Starter</div>
                </div>
            </div>

            {/* Reviews and Details */}
            <div className="flex flex-col items-center md:items-start">
                <div className="text-gray-500 mb-4">
                    <a
                        href="/internet-plans/providers/ebox#ph_customer_feedback"
                        title="335 reviews"
                        className="text-blue-600"
                    >
                        335 votes
                    </a>
                    <div className="ratings flex items-center mt-2">
                        <div className="relative inline-block">
                            <div className="absolute inset-0 w-full h-full bg-yellow-400" style={{ width: '75.89%' }} />
                            <div className="relative w-20 h-4 bg-gray-300 overflow-hidden" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-2 text-center md:text-left">
                    <div className="flex items-center space-x-2">
                        <span className="ph-icon-speed" /> <span>1 Gb/s</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="ph-icon-bar_chart" /> <span>Illimité</span>
                    </div>
                </div>
            </div>

            {/* Price and Action Button */}
            <div className="flex flex-col items-center justify-between">
                <div className="text-center md:text-right mb-4">
                    <div className="text-2xl font-bold">
                        <span>€</span>
                        <span>29/mois</span>
                    </div>
                    <div className="text-gray-500">pendant 12 mois</div>
                </div>
                <div className="w-full flex justify-center md:justify-end">
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                        role="button"
                        rel="nofollow noopener"
                        data-ts="3.58"
                        data-tl="null"
                        data-lid={84}
                        data-cid={23}
                    >
                        Voir offre
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopPlan;
