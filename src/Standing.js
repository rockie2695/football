import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			total: null,
		}
	}
	render() {
		return ( <div>
			{this.state.total
			?<table>
				<tbody>
				{this.state.total.map((value, index) => {
					return (
						<tr key={index}>
						<td>{value.position}</td>
						<td><img src={value.team.crestUrl} alt={value.team.name} style={{maxHeight:25,maxWidth:25,verticalAlign: 'middle',display: 'block',margin: '0 auto'}} /></td>
						<td>{value.team.name}</td>
						<td>{value.playedGames}</td>
						<td>{value.points}</td>
						<td>{value.won}</td>
						<td>{value.draw}</td>
						<td>{value.lost}</td>
						<td>{value.goalsFor}</td>
						<td>{value.goalsAgainst}</td>
						<td>{value.goalDifference}</td>
						</tr>
					)
				})}
				</tbody>
			</table>
			:null}
		</div>);
	}

  componentDidMount() { //after render() only once
  	fetch(`https://api.football-data.org/v2/competitions/${this.props.match.params.id}/standings`, {
  			headers: new Headers({
  				'X-Auth-Token': '93192c2aad034eaf8391962c4bdd473d'
  			}),
  		}).then(res => res.json())
  		.then(
  			(result) => {
  				console.log(result)
  				this.setState({
  					total: result.standings[0].table
  				})
  			},
  			// Note: it's important to handle errors here
  			// instead of a catch() block so that we don't swallow
  			// exceptions from actual bugs in components.
  			(error) => {
  				console.log(error)
  			}
  		)
  }
}

export default App;
