## Next.js + Msw + Apollo Example

> 왜 만들었는가?

(출처 : [카카오 Tech : Mocking으로 생산성까지 챙기는 FE 개발](https://tech.kakao.com/2021/09/29/mocking-fe/))

![이상](https://tech.kakao.com/wp-content/uploads/2022/01/01-15.png)
이상적인 개발 프로스세이다.

_요구사항분석 및 기획 -> 백엔드 개발 -> 프론트엔드 개발_

![현실](https://tech.kakao.com/wp-content/uploads/2022/01/02-16.png)
하지만 현실은 뒤죽박죽이다.

MSW를 도입하기 위한 동기부여 및 배경사항은 출처 링크에서 확인하면 되고,<br>
도입 기술 스택에 맞추어 보일러플레이트를 만들기 위하여 해당 레포지토리를 생성하였다.

> Getting Started

```
npx create-next-app Apollo_Msw --typescript
```

```
npx msw init pubic/ --save
```

```
mkdir src && mkdir ./src/mocks
```

```
cd ./src/mocks
touch browser.ts
touch server.ts
touch handler.ts
touch index.ts
```

```ts
// browser.ts
import { setupWorker } from 'msw';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);
```

```ts
// server.ts
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

export const server = setupServer(...handlers);
```

```ts
// handler
import { graphql } from 'msw';

const user = { ...userInfo };

export const handlers = [
  graphql.query('fetchUserInfo', (req, res, ctx) => {
    return res(
      ctx.data({
        user,
      })
    );
  }),
];
```

```ts
// index.ts
async function initMocks() {
  if (typeof window === 'undefined') {
    const { server } = await import('./server');
    server.listen();
  } else {
    const { worker } = await import('./browser');
    worker.start();
  }
}

initMocks();

export {};
```

```ts
// _app.tsx
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';

import '../styles/globals.css';
import { useApollo } from '../lib/apolloClient';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  import('../mocks');
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps);
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
```

```ts
// index.tsx
import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';

import { initializeApollo } from '../lib/apolloClient';
import { FETCH_USER_INFO_QUERY } from '../shared/usersGraphql';
import { Main } from './styles';

const Home: NextPage = ({ data: { user }, loading, networkStatus }: any) => {
  if (loading) return <p>loading..</p>;

  return View...
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const client = initializeApollo();
  const { data, loading, networkStatus } = await client.query({
    query: FETCH_USER_INFO_QUERY,
  });

  return {
    props: { data, loading, networkStatus },
  };
};

```

## 결과물

![](https://velog.velcdn.com/images/wnsguddl789/post/7ca47990-6296-436a-b6bf-cdaee2d5377d/image.png)
