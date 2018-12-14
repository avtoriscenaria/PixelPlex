import React, {Component} from 'react'
import { Image, Navbar, NavItem } from 'react-bootstrap'

class Header extends Component{
	render(){
		return (
			<div id="head">
			     <Navbar.Header>
			     <Navbar.Brand>
			     <Image src="https://image.ibb.co/k7cmVT/logo_w.png" />
			     </Navbar.Brand>
                 </Navbar.Header>
                 <div id="hdchild">
	             <a class="hdref" href="javascript:window.location.reload();">Home link</a>
	             <a class="hdref" target="_blank" href="https://pixelplex.io">PixelPlex link</a>
	             </div>
			</div>);
	}
}

export default Header