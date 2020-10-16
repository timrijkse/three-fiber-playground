import styled from "styled-components";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background-color: #1A202C;
    padding-top: 148px;
  }
  
  body, html, #__next {
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
`;

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Normalize />
      <GlobalStyle />

      {children}
    </>
  );
};

const Styled = {};

Styled.Container = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export default DefaultLayout;
