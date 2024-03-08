import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form } from 'react-bootstrap';
import FilmModal from './FilmModal';
import FilmSlider from './FilmSlider';

const FilmSection = () => {
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [programmingVideos, setProgrammingVideos] = useState([]);
  const [filter, setFilter] = useState('web');

	const formatTitle = (title) => {
		const phrasesToRemove = ['DOWNLOAD.COM', 'TUTSGALAXY', 'UDEMY', '\\[', '\\]', '\\. NET', 'FREE COURSE SITE\\.COM', 'DESIRE COURSE', 'PAID COURSES FOR FREE\\.COM', '\\.COM'];
	
		let formattedTitle = title.toUpperCase();
	
		phrasesToRemove.forEach(phrase => {
			formattedTitle = formattedTitle.replace(new RegExp(phrase, 'g'), '');
		});
	
		return formattedTitle.trim();
	};
	

  useEffect(() => {
    const fetchVideosData = async () => {
      try {
        let url = 'https://archive.org/advancedsearch.php?q=collection:(udemy)+AND+mediatype:(movies)';
        if (filter !== 'All') {
          url += `+AND+title:(${filter})`;
        }
        url += '&fl[]=title,description,identifier&output=json&rows=10';

        const response = await axios.get(url);
        const videos = response.data.response.docs.map(video => ({
          ...video,
          title: formatTitle(video.title)
        }));
        setProgrammingVideos(videos);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideosData();
  }, [filter]);

  const handleViewVideo = (film) => {
    setSelectedFilm(film);
  };

  const handleCloseModal = () => {
    setSelectedFilm(null);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Container className="mt-4">
			<hr></hr>
      <h3 className="my-3">Programming Videos</h3>
      <Row className="mb-4">
        <Col md={6}>
          <p className="mb-2">Filter:</p>
          <Form.Select
            value={filter}
            onChange={handleFilterChange}
            className="w-50 mb-3"
          >            
            <option value="All">All</option>
            <option value="Android">Android</option>
            <option value="Angular">Angular</option>
            <option value="C++">C++</option>
            <option value="CSS">CSS</option>
            <option value="Django">Django</option>
            <option value="Express">Express</option>
            <option value="HTML">HTML</option>
            <option value="iOS">iOS</option>
            <option value="Java">Java</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Node.js">Node.js</option>
            <option value="Python">Python</option>
            <option value="SQL">SQL</option>
            <option value="Web">Web</option>
          </Form.Select>
        </Col>
      </Row>
      <FilmSlider films={programmingVideos} handleViewVideo={handleViewVideo} />
      {selectedFilm && <FilmModal selectedFilm={selectedFilm} onCloseModal={handleCloseModal} />}
    </Container>
  );
};

export default FilmSection;
