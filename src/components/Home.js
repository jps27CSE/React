import React,{Component} from 'react'
import axios from 'axios'

class Home extends Component {

    state={
        posts:[]
    }

  componentDidMount()
  {
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res=>{
          console.log(res)
          this.setState({
              posts: res.data.slice(0,10)
          })
      })
  }
 
    render() {
        const {posts} = this.state

        const postList = posts.length ? (
            posts.map((post)=>{
                return(
                    <div className="post card center" key={post.id}>
                       <div className="card-content"></div>
                       <span className="card-title">{post.title}</span>
                       <p>{post.body}</p>
                    </div>
                )
            })
        ) : (<div className="center">Error 404 Not Found</div>)

        return (
            <div className='container'>
                <h4 className='center'>Home</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus leo magna, mattis eget mi eget, tempus hendrerit quam. Vivamus vel nisi ipsum. Donec tempor nisl in metus maximus tincidunt. Mauris lobortis eleifend ullamcorper. Curabitur vitae ligula sit amet nulla aliquam iaculis eget ac turpis. Morbi malesuada, eros ac tincidunt placerat, risus est rutrum ante, commodo feugiat augue nisl vitae ligula. Nullam dapibus eget lorem vitae maximus. Maecenas elementum volutpat velit, sit amet ultrices sem cursus vel. In efficitur nunc ut placerat rutrum. Cras interdum volutpat tellus.</p>
                {postList}
            </div>
        )
    }

}
    

export default Home