import React from 'react';
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { IoArrowBackOutline } from 'react-icons/io5'

const BackButton = styled.button`
    border: none;
    display: grid;
    place-items: center;
    background: transparent;
    font-size: 2em;
    transition: 0.2s ease;
    z-index: 10;
    position: relative;
    padding: 0;
    &:hover {
        transform: scale(1.2);
        cursor: pointer;
    }
`

function BackBtn(props) {
    const router = useRouter()

    return (
        <BackButton onClick={() => router.back()}>
            <IoArrowBackOutline />
        </BackButton>
    );
}

export default BackBtn;