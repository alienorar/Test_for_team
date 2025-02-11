
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import App from '../App.tsx';
import {
    About,
    News,
    Portfolio,
    NotFound,
} from '@modules'

const Index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path="/" element={<App />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/news" element={<News />}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="*" element={<NotFound />}/>
            </Route>
        )
    )
    return <RouterProvider router={router} />;
}
export default Index;
