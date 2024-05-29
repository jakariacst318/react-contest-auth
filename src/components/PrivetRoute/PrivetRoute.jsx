import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import { Circles } from 'react-loader-spinner';

const PrivetRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <span className="flex justify-center pt-16">
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
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login'></Navigate>;
};

export default PrivetRoute;