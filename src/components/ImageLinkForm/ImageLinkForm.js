import React from 'react' ;
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return (
		<div >
				<p className='f3'>{'This magic page designed by imoleayo will detect faces in your picture'}</p>
		
		<div className='center'>
		<div className='pa4 br3 shadow-5 form center'>
				<input className='f4 pa2 w-70'type='text center' default='paste url here' onChange={onInputChange}/>
				<button className='f4 link grow w-30 pv2 dib pointer bg-light-purple' onClick={onButtonSubmit}> Detect</button>
		</div>
		</div> 
		</div>
		) ;
}
export default ImageLinkForm ;