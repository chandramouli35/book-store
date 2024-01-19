import { Component } from "react";
import { FaSearch } from "react-icons/fa";
import './index.css'
class SearchInput extends Component{
    state={
        SearchInputValue:""
    }
    onChangeSearchInput=(event)=>{
       this.setState({SearchInputValue:event.target.value})
    }

    onSubmitSearchInput=(event)=>{
        event.preventDefault();
        const {searchBooks}=this.props;
        const {SearchInputValue}=this.state
        searchBooks(SearchInputValue)
    }

    render(){
        const{SearchInputValue}=this.state;

        return(
            <form className="input-container" onSubmit={this.onSubmitSearchInput}>
                <input type="text"
                placeholder="Search Here"
                value={SearchInputValue}
                onChange={this.onChangeSearchInput}
                className="search-icon"/>
                <button className="search-button">
                    <FaSearch className="search-icon"/>
                </button>
            </form>
        )
    }
}
export default SearchInput