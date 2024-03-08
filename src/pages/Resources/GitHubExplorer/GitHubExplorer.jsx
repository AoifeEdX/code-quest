import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import RenderRepo from './RenderRepo.jsx';
import octocat from '/images/octocat.png';
import officeKnight from '/images/officeKnight.gif';

export default function GitHubExplorer() {
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [keyword, setKeyword] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchLanguages() {
      try {
        const response = await axios.get('https://api.github.com/languages');
        //! Uncomment to limit to specific languages
				// setLanguages(response.data.filter(lang => allowedLanguages.includes(lang.name)));
        setLanguages(response.data); // Remove filtering
      } catch (error) {
        setError('Error fetching languages: ' + error.message);
      }
    }

    fetchLanguages();
  }, []);

  //! Uncomment to limit to specific languages:
  // const allowedLanguages = ['HTML', 'CSS', 'Java', 'JavaScript', 'React', 'Ruby', 'PHP', 'Python'];

	const exploreRepos = async () => {
		try {
			const apiUrl = `https://api.github.com/search/repositories?q=language:${selectedLanguage}+${keyword}&sort=stars&order=desc`;
			const response = await axios.get(apiUrl);
			setRepositories(response.data.items.slice(0, 20));
		} catch (error) {
			setError('Error fetching repositories: ' + error.message);
		}
	};
	
	return (
		<Container>
			<Row>
				{/* GitHub Icon */}
				<Col md={6}>
				<Image src={officeKnight}  alt="GitHub Icon" className="img-fluid p-5" />
				</Col>
				<Col md={6} className="d-flex flex-column justify-content-center align-items-center mt-5">
					<h2>Explore <span className="text-warning">GitHub repositories</span> in your programming language
						of&nbsp;choice.</h2>
						<p className="fs-5 my-3 py-3">
						<span className="text-warning">GitHub Explorer</span> allows you to explore the most popular GitHub
						repositories based on the programming languages used.
					</p>
				</Col>
			</Row>
			<Row>
				<Col md={9} className="my-3 d-flex flex-column justify-content-center">
					<p className="fs-5">
						Select a <strong>language</strong>, enter <strong>keywords</strong> if you are looking for code related to a
						specific feature or topic, and find relevant repositories with ease.
					</p>
					<p className="fs-5">
						The <strong>top 20 repositories</strong> will be listed in order of their star ranking.
					</p>
				</Col>
				<Col md={3} className="d-flex flex-column justify-content-center align-items-center p-5">
					<Image src={octocat} alt="Knight working at a computer desk" className="img-fluid align-items-center" />
				</Col>
			</Row>

			{/* Language Selection and Keyword Search */}
			<Row className="mb-4">
				<h3 className="my-2 py-4">Explore GitHub Repositories:</h3>
				{/* Language Selection Column */}
				<Col md={6}>
					<Form.Group>
						<Form.Label className="fs-5">Select Language:</Form.Label>
						<Form.Select id="languageSelect" onChange={(e) => setSelectedLanguage(e.target.value)}>
							<option value="">Select a language</option>
							{languages.map(language => (
								<option key={language.name} value={language.name}>{language.name}</option>
							))}
						</Form.Select>
					</Form.Group>
				</Col>

				{/* Keyword Search Column */}
				<Col md={6}>
					<Form.Group>
						<Form.Label className="fs-5">Keyword Search (optional):</Form.Label>
						<Form.Control type="text" id="keywordSearch" placeholder="Enter a keyword" onChange={(e) => setKeyword(e.target.value)} />
					</Form.Group>
				</Col>
			</Row>

			{/* Explore Button */}
			<Button className="btn gradient-bg-orange rounded-pill px-4 fs-5" onClick={exploreRepos}>Explore</Button>

			{/* Error Message */}
			{error && <div className="my-3 py-3 text-danger">{error}</div>}

			{/* Repository List */}
			<div id="repoList" className="mt-4">
				{repositories.map((repo, index) => (
					index % 2 === 0 && (
						<Row key={repo.id}>
								<RenderRepo repo={repo} />
							{repositories[index + 1] && (
									<RenderRepo repo={repositories[index + 1]} />
							)}
						</Row>
					)
				))}
			</div>
		</Container>
	);
}

