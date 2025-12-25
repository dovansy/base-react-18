import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import AppContainer from './router';
import theme from './shared/antd/themeConfig';
import { ReduxProvider } from './shared/redux/provider';

dayjs.locale('ja');

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minute
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  return (
    <ReduxProvider>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider theme={theme}>
          <AppContainer />
        </ConfigProvider>
      </QueryClientProvider>
    </ReduxProvider>
  );
}

export default App;
