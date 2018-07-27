import React from 'react' ;
import Tilt from 'react-tilt' ;
import './Logo.css' ;
import ayo from './logo.jpg' ;

const Logo = () => {
	return (
		<div className='ma4'>
		<Tilt className="Tilt br2 shadow-2 " options={{ max : 55 }} style={{ height: 150, width: 150 }} >
 			<div className="Tilt-inner pa1"> 
 			<img alt= 'logo' src={ayo}/>
 			 </div>
 			
		</Tilt>
		</div> 
		) ;
}
export default Logo ;