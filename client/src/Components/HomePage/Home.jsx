import './Home.css'
import Header from './Header'
import HandleSignIn from '../RegiterForm/Handler';
import { useState } from 'react';

const Home = () => {

    const [logIn , SetLogIn] = useState(false);

    const LogToggle = () => {
      SetLogIn(!logIn);
    }

    return(
      <>
        <div className='Home'>
          <div>
              <Header />
              <div className='caption'>
                  <h1>Empowering Minds Through <br />the Art of Blogging</h1>
                  <button className='c-blog' onClick={LogToggle}>Create Your bloG</button>
              </div>
              {logIn && <HandleSignIn OnToggle={LogToggle}/>}
          </div>
        </div>
      </>
    )
}

export default Home;