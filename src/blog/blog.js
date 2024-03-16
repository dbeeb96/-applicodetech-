import React, { useState } from 'react';
import '../Blog.css'; // Import custom CSS for additional styling

const Blog = () => {
  // Sample blog posts
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Introduction to React',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere velit quis nibh condimentum, eu varius elit sagittis.',
      author: 'John Doe',
      date: 'March 10, 2024',
      likes: 0,
      dislikes: 0,
      comments: [
        { id: 1, author: 'Alice', content: 'Great post!' },
        { id: 2, author: 'Bob', content: 'I learned a lot, thanks!' }
      ],
      imageUrl: 'https://via.placeholder.com/150' // Sample image URL
    },
    {
        id: 1,
        title: 'Introduction to React',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere velit quis nibh condimentum, eu varius elit sagittis.',
        author: 'John Doe',
        date: 'March 10, 2024',
        likes: 0,
        dislikes: 0,
        comments: [
          { id: 1, author: 'Alice', content: 'Great post!' },
          { id: 2, author: 'Bob', content: 'I learned a lot, thanks!' }
        ],
        imageUrl: 'https://via.placeholder.com/150' // Sample image URL
      },
    // Add more blog posts as needed

  ]);

  const handleLike = (postId) => {
    setPosts(prevPosts => {
      return prevPosts.map(post => {
        if (post.id === postId) {
          return { ...post, likes: post.likes + 1 };
        }
        return post;
      });
    });
  };

  const handleDislike = (postId) => {
    setPosts(prevPosts => {
      return prevPosts.map(post => {
        if (post.id === postId) {
          return { ...post, dislikes: post.dislikes + 1 };
        }
        return post;
      });
    });
  };

  const handleComment = (postId, comment) => {
    setPosts(prevPosts => {
      return prevPosts.map(post => {
        if (post.id === postId) {
          return { ...post, comments: [...post.comments, comment] };
        }
        return post;
      });
    });
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">Blog</h2>
      {posts.map(post => (
        <div key={post.id} className="card mb-4">
          <img src={post.imageUrl} className="card-img-top" alt="Blog" />
          <div className="card-body">
            <h3 className="card-title">{post.title}</h3>
            <p className="card-text">{post.content}</p>
            <p className="card-text"><small className="text-muted">Author: {post.author} | Date: {post.date}</small></p>
            <div className="d-flex justify-content-between align-items-center">
              <button onClick={() => handleLike(post.id)} className="btn btn-primary btn-sm">
                <i className="fas fa-thumbs-up"></i> Like ({post.likes})
              </button>
              <button onClick={() => handleDislike(post.id)} className="btn btn-danger btn-sm">
                <i className="fas fa-thumbs-down"></i> Dislike ({post.dislikes})
              </button>
            </div>
            <div className="comments mt-3">
              <h4>Comments</h4>
              {post.comments.map(comment => (
                <div key={comment.id} className="comment mb-2">
                  <p className="mb-1">{comment.content}</p>
                  <p className="text-muted">By: {comment.author}</p>
                </div>
              ))}
              <textarea rows="3" placeholder="Add a comment..." className="form-control"></textarea>
              <button onClick={() => handleComment(post.id, { id: post.comments.length + 1, author: 'User', content: 'New comment' })} className="btn btn-primary mt-2">Add Comment</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
