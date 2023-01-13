    import React from 'react';
    import '../StyleSheet/Information.css';

    function Information(){
      return(
        <div className='container-information'>
          <img className='information-image'
          src={require('../images/PHOTOGRAPHER.png')}
          alt='information photographer'/>
          <div className='container-text-information'>
            <p className='name-information'>Information about Paul</p>
            <p className='location-information'>Wedding Photographer</p>
            <p className='text-information'>I tell stories through images I capture through my camera. I express my personality and viewpoints through my art. I am a variety of photography niches that photographers can showcase their artistic ability with, such as fashion, studio work, travel, journalism, or nature.</p>
          </div>
        </div>
      )

    }
    export default Information