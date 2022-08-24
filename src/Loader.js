<<<<<<< HEAD
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

=======
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

>>>>>>> 8dac571a014c905ca43c514d86a2cd5a278bb394
export default Loader