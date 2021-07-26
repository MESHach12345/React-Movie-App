import styled from 'styled-components';

export const Wrapper = styled.button `
    background: var(--darkGray);
    display: block;
    color: var(--white);
    width: 25%;
    min-width: 200px;
    justify-content: center;
    align-items: center;
    height: 60px;
    border-radius: 30px;
    border: 0;
    font-size: var(--fontBig);
    margin: 20px auto;
    transition: all 0.3s;
    outline: none;
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;