const React = require('react')
const Fragment = React.Fragment

const Book = props =>
  <Fragment>
    <li id='bookTitle' data-booktitle={props.title} className='list-group-item list-group-item-danger'>Title : {props.title}</li>
    <li id='bookAuthor' data-bookauthor={props.author} className='list-group-item list-group-item-warning'>Author : {props.author}</li>
    <li id='bookPages' data-bookpages={props.pages} className='list-group-item list-group-item-info'>Page Count : {props.pages}</li>
    <li id='bookCurrentPage' data-bookcurrentpage={props.currentPage} className='list-group-item list-group-item-light'>Currently on page {props.currentPage}</li>
    <li id='bookIsRead' data-bookisread={props.isRead} className='list-group-item list-group-item-dark'>{props.isRead ? 'I read this book already.' : 'I have not read this book yet.'}</li>
    <li className='list-group-item list-group-item-success'><button className='btn btn-warning' id='editBTN' data-id={props.title}>EDIT</button> <button className='btn btn-danger' id='deleteBTN' data-id={props.title}>DELETE</button></li>
    <br />
  </Fragment>

module.exports = Book
