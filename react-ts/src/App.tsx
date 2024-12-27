import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './components/providers/ThemeProvider';
import MainPage from './pages/MainPage';
import ArticlesPage from './pages/ArticlesPage';
import LoginPage from './pages/LoginPage';
import './App.css';
import BookingPage from './pages/BookingPage';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="articles" element={<ArticlesPage />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
