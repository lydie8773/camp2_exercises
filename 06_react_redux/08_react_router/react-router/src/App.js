import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Link,
	NavLink,
	Switch
} from 'react-router-dom';


const Home = (props) => (
	<div>
		<h2>Home</h2>
		{/*<ul>*/}
			{/*<li>*/}
				{/*<Link to={`${match.url}/rendering`}>*/}
					{/*Rendering with React*/}
				{/*</Link>*/}
			{/*</li>*/}
			{/*<li>*/}
				{/*<Link to={`${match.url}/components`}>*/}
					{/*Components*/}
				{/*</Link>*/}
			{/*</li>*/}
			{/*<li>*/}
				{/*<Link to={`${match.url}/props-v-state`}>*/}
					{/*Props v. State*/}
				{/*</Link>*/}
			{/*</li>*/}
		{/*</ul>*/}

	</div>
)

const About = () => (
	<div>
		<h2>About</h2>
	</div>
)

const Article = () => (
	<div>
		<h3>Article</h3>
	</div>
)

const AboutNav = () => (
	<div>
		<h3>using navlink to about</h3>
	</div>
)

const ArticleNav = ({ match }) => (
	<div>
		<h2>Article</h2>
		<ul>
			<li>
				<NavLink
					to={`${match.url}/42`}
					activeStyle={{
						fontWeight: 'bold',
						color: 'red'
					}}>
					article 42
				</NavLink>
			</li>
			<li>
				<NavLink
					to={`${match.url}/1337`}
					activeStyle={{
						fontWeight: 'bold',
						color: 'red'
					}}>
					article 1337
				</NavLink>
			</li>
		</ul>

		<Route path={`${match.url}/42`} component={Article42}/>
		<Route path={`${match.url}/1337`} component={Article1337}/>
		{/*<Route exact path={match.url} render={() => (*/}
			{/*<h3>Please select a article.</h3>*/}
		{/*)}/>*/}
	</div>
)

const Article42 = () => (
	<div>
		<h3>It's article 42</h3>
	</div>
)

const Article1337 = () => (
	<div>
		<h3>It's article 1337</h3>
	</div>
)

const User = ({match}) => (
	<div>
		<h3>Hello, {match.params.user}!</h3>
	</div>
)

const ListItemLink = ({ to, ...rest }) => (
	<Route path={to} children={({ match }) => (
		<li className={match ? 'active' : ''}>
			<Link to= {to} {...rest} >{to}</Link>
		</li>
	)}/>
)


// function ListObject(props) {
// 	return (
// 		<div>
// 			{props.map(prop =>
// 				<Route path={Object.keys(prop)} children={({ match }) => (
// 					<li>
// 						<Link to={Object.keys(prop)}>Object.values(prop)</Link>
// 					</li>
// 				)}/>
// 			)}
// 		</div>
// 	);
// }
//
// const listArticle = {
// 	oneKey: 1,
// 	twoKey: 2,
// 	threeKey: 3
// };

/**
 * 4. Passing Props
 * @param props
 * @returns {*}
 * @constructor
 */
// const ArticleList = props => (
// 	// console.log("props: ", props)
// 	<h1>
// 		<div>
// 			{Object.keys(props).map(prop =>
// 				<div>{prop}</div>
// 			)}
// 			<ul>
// 				{props.map(prop =>{
// 						<Route path="/article/:articleId" children={({match}) => (
// 							<li>
// 								<Link to="/article/{prop.params.articleId}">prop.articleId</Link>
// 							</li>
// 						)}/>
// 					}
// 				)}
// 			</ul>
// 		</div>
// 	</h1>
// )

// const ListArticle = {
// 	article1: "34343",
// 	article2: "454545",
// 	article3: "323434",
// 	article4: "33242"
// }

const ListArticle = [
	"34343",
	"454545",
	"323434",
	"33242"
]

// const ArticleSingle = (prop) => (
// 	<div>
// 		<h3>prop.params.articleId</h3>
// 	</div>
// )
/*********************4.Passing Props***********************/



class App extends Component {

	render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
					<Router>
						<div>
							<ul>
								<li><Link to="/">Home</Link></li>
								<li><Link to="/about">About</Link></li>
								<li><Link to="/article">Article</Link></li>
								<li>
									<NavLink
										to="/aboutNav"
										activeStyle={{
											fontWeight: 'bold',
											color: 'red'
										}}
									>About navlink</NavLink>
								</li>
								<li>
									<NavLink
										to="/articleNav"
										activeStyle={{
											fontWeight: 'bold',
											color: 'red'
										}}
									>Article navlink</NavLink>
								</li>

								{/*<ListItemLink to="/Article42" />*/}
								<ListItemLink to="/Article1337" />
								<ListItemLink to={ListArticle}/>

								<li>
									<NavLink
										to="/articleList"
										activeStyle={{
											fontWeight: 'bold',
											color: 'red'
										}}
									>ArticleList</NavLink>
								</li>
							</ul>

							<hr/>
							<Switch>
								<Route exact path="/" component={Home}/>
								<Route path="/about" component={About}/>
								<Route path="/article" component={Article}/>
								<Route path="/aboutNav" component={AboutNav}/>
								<Route path="/articleNav" component={ArticleNav}/>



								{/*<Route path="/articleWithSingleProps" render={() => <ArticleWithSingleProps {...listArticle} />}/>*/}
								{/*<Route path="/articleList" render={() => <ArticleList {...ListArticle} />}/>*/}


								<Route path="/:user" component={User}/>

								<Route component={Home}/>
							</Switch>

						</div>
					</Router>
        </p>
      </div>
    );
  }
}

export default App;
