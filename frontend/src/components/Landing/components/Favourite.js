import React from 'react';
import './Favorite.css';
import Slide from 'react-reveal/Reveal';
import favorite from '../images/Tech1.jpg';

const Favorite = () => {
	return (
		<div className="favContainer">
			<h2>Our Special Opportunities</h2>

			<div className="favContent">
				<Slide left>
					<img src={favorite} className="favImage" alt="cake" />
				</Slide>
				<Slide right>
					<div className="textContent">
						<p>
							Finding new ways to make passive income is a way for your finances to evolve 
							and grow, though some of the new ways but We are providing a platform to achieve 
							this Goal
						</p>
					</div>
				</Slide>
			</div>
			<button className="favBtn">Order Now</button>
		</div>
	);
};

export default Favorite;