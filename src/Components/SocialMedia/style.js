import styled from "styled-components";

export const SocialMediaSection = styled.div `
    height: auto;
    overflow: hidden
`;

export const Social = styled.div `
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background-color: ${props => props.item ==='face' ? '#3b5998' : ''};
    background-color: ${props => props.item === 'twitter' ? '#498cbf' : ''};
    background-color: ${props => props.item === 'pin' ? '#cc2127' : ''};
`;

export const Icon = styled.i `
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px;
    margin-top: 32px;
`;

export const P = styled.p `
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff;
    float: left;
`;

export const Span = styled.span `
    display: block;
    margin-bottom: 8px
`;

export const SpanInfo = styled.span `
    font-weight: normal
`;
