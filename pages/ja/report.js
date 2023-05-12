import Lag from '../../lag';
import Nav from '../../ja_nav';
import Bar from '../../bar';
import Report from '../../report';
export default function Layout({ children }) {
    return (
        <>
            <Lag />
            <div className='web'>
                <Nav />
                <Report />
            </div>
            <Bar />
        </>
    );
}