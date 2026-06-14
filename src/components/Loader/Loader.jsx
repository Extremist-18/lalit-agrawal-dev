import './Loader.scss';

const Loader =()=>{
    return(
        <div className="Loader-wrapper">
            <div className="Loader-content">
                <div className="bar">
                    Initializing
                    <div className="progress-bar">
                        <div className="progress"></div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Loader;