import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends Component {



    render() {
        console.log(this.props)
        const { posts } = this.props

        const postList = posts.length ? (
            posts.map((post) => {
                return (
                    <div className="post card center" key={post.id}>
                        <div className="card-content"></div>
                        <Link to={'/' + post.id}>
                            <span className="card-title">{post.title}</span>
                        </Link>
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

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)