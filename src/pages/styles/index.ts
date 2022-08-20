import styled from '@emotion/styled';

export const Main = {
  Container: styled.div`
    display: flex;
    align-items: center;

    max-width: 960px;
    border-radius: 32px;

    padding: 20px 20px 28px 20px;
    box-shadow: 24px 24px 80px rgba(0, 0, 0, 0.1);
    gap: 12px;
  `,
  Image: styled.img`
    max-height: 300px;
    object-fit: cover;
    border-radius: 32px;

    box-sizing: border-box;
  `,
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  Time: styled.time`
    font-family: 'PT Sans', sans-serif;
    font-size: 14px;
    line-height: 1.2;
    text-transform: uppercase;
    color: #222022;
    margin-bottom: 6px;
  `,
  Text: styled.p`
    font-family: 'Vollkorn', serif;
    font-size: 32px;
    line-height: 1.4;
    color: #222022;
    box-decoration-break: clone;
    background-image: linear-gradient(90deg, #ffef7e, #b7f9e9);
    background-size: 100% 42%;
    background-repeat: no-repeat;
    background-position: 0 85%;
    padding: 0 4px;
    margin-left: -4px;
  `,
};
