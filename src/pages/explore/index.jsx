import React from 'react'
import FeaturedCard from '../home/FeaturedCard';
import "./explore.css"

const ExplorePage = () => {
	return (



		<main class="flex-r" >
			<section className="home" >
				<div className='category-filter'>
					<button className="button btn-success"> All</button>
					<button className="button btn-success"> Category 1</button>
					<button className="button btn-success">Category 2</button>
					<button className="button btn-success">Category 3</button>
				</div>

				<div className="main-container">
					<FeaturedCard />
					<FeaturedCard />
					<FeaturedCard />
					<FeaturedCard />
					<FeaturedCard />
					<FeaturedCard />
					<FeaturedCard />
					<FeaturedCard />
				</div>
			</section>
		</main>
	)
}

export default ExplorePage;
