import fn_Bookitem from './component/fn_Bookitem';
const fn_book = (props) =>{
    const books=props.books;
    console.log(books);
    return(
        <div>
            <fn_books books={books[0]}/>;
            <fn_books books={books[1]}/>;
            <fn_books books={books[2]}/>;
            <fn_books books={books[3]}/>;

        </div>
    )
}
export default fn_book;