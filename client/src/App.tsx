import { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import LoadingScreen from './components/LoadingScreen';

const Home = lazy(() => import('./routes/home/home.component'));
const Offline = lazy(() => import('./routes/offline/game-start.component'));
const Online = lazy(() => import('./routes/online/room.component'));

const App = (): JSX.Element => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000); // 5 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <Suspense fallback={<LoadingScreen onComplete={() => {}} />}>
            {loading ? (
                <LoadingScreen onComplete={() => {}} />
            ) : (
                <main className='App'>
                    <h1 className='sr-only'>Rock Paper Scissor App</h1>

                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='online' element={<Online />}></Route>
                        <Route path='offline' element={<Offline />}></Route>
                    </Routes>
                </main>
            )}
        </Suspense>
    );
};

export default App;
