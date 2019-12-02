import React, { Component } from 'react'

class Search extends Component {
    filterUpdate = (e) => {
		const val = this.myValue.value
		this.props.filterUpdate(val)
    } 
    
    render() {
        return (
            <form>
                <input 
                    type = {this.props.filterOn != "date" ? "text" : "date"}

                    ref = { (value) => {this.myValue = value}}
                    placeholder=" Type to Filter" 

                    onChange =  {
						this.filterUpdate.bind(this)
					}
                >
                </input>
            </form>
        )
    }
}

export default Search;