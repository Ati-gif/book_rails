import React from 'react';
import Book from './Book';

const Books = (props) => {
    
    const {bookz, updateBook,} = props

    const renderComponents = ()=>{
        if (bookz.length === 0){
            return <p>no books</p>
        }
        return bookz.map( book => {
            return <Book key={book.id} {...book} updateBook={updateBook}/>
            // return <Item 
            //          key={item.id}
            //          name={item.name} 
            //          description={item.description}
            //          likes={item.likes}
            //          category={item.category}
            //          />
        })
    }
    return (
        <div>
            <h1>Book component</h1>
            {renderComponents()}
        </div>
    )
}

export default Books 
