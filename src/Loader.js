import React,{useState,useEffect} from 'react'
import "./CSS/Loader.css"
const Loader = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, []);
  return (
    <div className="container">
    {loading ? (<>
    <section className='main-container'>
      <div className="loader-container">   
      </div>
      </section>
      </>
    ) : null}
  </div>
);
}

export default Loader