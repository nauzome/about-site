import Lag from '../../lag';
import Nav from '../../zhtw_nav';
import Bar from '../../bar';
import License from '../../license';
export default function Layout({ children }) {
    return (
        <>
            <Lag />
            <div className='web'>
                <Nav />
                <License />
            </div>
            <Bar />
        </>
    );
}