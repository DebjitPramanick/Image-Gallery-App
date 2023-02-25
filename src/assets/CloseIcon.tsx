import React from 'react'

const CloseIcon = () => {
    return (
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_b_41_66)">
                <circle cx="19" cy="19" r="19" fill="white" />
            </g>
            <path d="M14 14C14 14 19.1852 19.4386 24 24M14 24C14 24 19.1852 18.5614 24 14" stroke="#4F4F4F" stroke-width="2" stroke-linecap="round" />
            <defs>
                <filter id="filter0_b_41_66" x="-4" y="-4" width="46" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_41_66" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_41_66" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}

export default CloseIcon