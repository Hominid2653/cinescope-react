import {useState} from 'react'
import MovieCard from '../components/MovieCard'

function Home() {
    const [searchQuery, setSearchQuery] = useState('')

    const movies = [
        {
            id: 1,
            title: "The Shawshank Redemption",
            release_date: "1994-09-23"},
        {            id: 2,
            title: "The Godfather",
            release_date: "1972-03-24"},
        {            id: 3,
            title: "The Dark Knight",
            release_date: "2008-07-18"}
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        // Logic to search for movies based on searchQuery
        alert(`Searching for: ${searchQuery}`)
        setSearchQuery('')
    }




    return(
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" 
                placeholder="Search for movies..." 
                className='search-input' 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} /> 
                ))}

            </div>
        </div>
    )
}

export default Home;