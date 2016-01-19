
import React, { PropTypes, Component } from 'react'
import { render } from 'react-dom'
import ArticlePaper from '../../components/ArticlePaper'
import AuthorInfo from '../../components/AuthorInfo'
import NavBar from '../../components/NavBar'
import TimelineList from '../../components/TimelineList'

class HomePage extends Component {

	render() {

		let { id } = this.props.params
		let { query } = this.props.location
		let _query = query && query.get ? query.get : ''
		return (
			<div className="fm-body">
				<div className="fm-side">
					<AuthorInfo />
					<NavBar paramId={_query}/>
				</div>
				<ArticlePaper paramId={_query}/>
			</div>
		)
	}
}

export default HomePage
