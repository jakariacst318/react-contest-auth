import { Circles } from 'react-loader-spinner';
const Home = () => {

    return (
        <div>
            <h2 className="text-3xl"> this is name </h2>
            <span className="flex justify-center pt-16">
            <Circles
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </span>
        </div>
    );
};

export default Home;