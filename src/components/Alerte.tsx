/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import '@/app/globals.css'

const Alerte = () => {
    return (
        <div className="relative max-w-screen-xl mx-auto shadow-[4px_4px_12px_rgba(0,0,0,0.25)] bg-[#f1ffe2] p-6 mt-[30px] pt-[15px] pb-5 rounded-md">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <p className="text-lg font-bold text-gray-900">
                        Les tarifs des forfaits Internet
                    </p>
                    <p className="text-gray-900">
                        sont sujets à des fluctuations fréquentes. Laissez PlanHub Price Alert vous envoyer un e-mail avec les prix les moins chers disponibles.
                    </p>
                    <div className="flex justify-center al md:justify-start items-center mt-4">
                        <a
                            href="#"
                            className="bg-[#79CE25] text-white font-semibold py-2 px-4 rounded-lg justify-center items-center not-italic font-[bold] cursor-pointer"
                            title="Search"
                            aria-label="Search"
                        >
                            Laissez un message
                            <span className="ml-2">
                                <i className="fas fa-bell"></i>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-center space-x-2">
                    <Image
                        src="/svg/price.svg"
                        alt="statistics"
                        className="h-10 w-20"
                        height={38}
                        width={80}
                    />
                    <Image
                        src="/svg/arrow.svg"
                        alt="arrow"
                        className="h-8 w-5"
                        height={34}
                        width={19}
                    />
                    <Image
                        src="/svg/notif.svg"
                        alt="alert"
                        className="h-10 w-20"
                        height={38}
                        width={85}
                    />
                    <Image
                        src="/svg/arrow.svg"
                        alt="arrow"
                        className="h-8 w-5"
                        height={34}
                        width={19}
                    />
                    <Image
                        src="/svg/mail_send.svg"
                        alt="mail-phone"
                        className="h-10 w-20"
                        height={38}
                        width={85}
                    />
                </div>
            </div>
        </div>
    )
}

export default Alerte
