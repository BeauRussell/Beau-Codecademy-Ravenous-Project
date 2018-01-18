import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
	render() {
		return (
			<div className="BusinessList">
				{this.props.businesses.map( business =>
					<Business business={business}
						businesses={businesses}
        				imgSrc={business.imageSrc}
        				name={business.name}
        				address={business.address}
        				city={business.city}
        				state={business.state}
        				zipCode={business.zipCode}
        				category={business.category}
        				rating={business.rating}
        				reviewCount={business.reviewCount}
					/> 
				)}
			</div>
		);
	}
}

export default BusinessList;