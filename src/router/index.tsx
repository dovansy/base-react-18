import { NotificationProvider } from '@/components/templates/notification';
import HomePage from '@/pages/homepage';
import Login from '@/pages/login';
import MyAccount from '@/pages/my-account';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Router from './Router';
import '@scss/globals.scss';

export default function AppContainer() {
  return (
    <NotificationProvider>
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
        <Routes>
          <Route path="/login" element={<Router component={Login} />} />
          <Route path="/" element={<Router component={HomePage} />}>
            <Route path="my-account" element={<Router component={MyAccount} />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </NotificationProvider>
  );
}
