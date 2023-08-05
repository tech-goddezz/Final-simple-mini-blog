import BlogList from './blogList';
import useFetch from './useFetch';


const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

        //return this
    return ( 
        <div className='home'>

            { blogs && <BlogList blogs={blogs} title="All blogs!"  />  }

            { isPending && <div>Loading...</div> }

            { error && <div> {error} </div> }

        </div>
     );
}
 
export default Home;


//[
 //   { tittle: 'My New Website', body: 'lorem ipsum...', author: 'Mario', id: 1 },
//    { tittle: 'Welcome Party', body: 'lorem ipsum...', author: 'Yoshi', id: 2 },
//    { tittle: 'Web dev top tips', body: 'lorem ipsum...', author: 'Mario', id: 3 }
//]