import React from 'react';
import './dropDown.css';

class dropDown extends React.Component {
    //Sebastian - created js and css file for drop-down menu to choose what to filter on to search through events
    state = {
        items: this.props.items || [],
        showItems: false,
        selectedItem: this.props.items && this.props.items[0], 
        searchFilter: this.props.searchFilter,
    }

    dropDown = () => {
        this.setState(prevState => ({
            showItems: !prevState.showItems
        }))
    }

    

    selectItem = (item) => 
    {
        this.setState ({
            selectedItem: item,
            showItems: false,
        })
        this.props.updateFilter(item)
    }

    render() {
        return <div>
            
                <div className="select-box--box"
                    style={{width: this.props.width || 180}}
                > 
                <div
                    className="select-box--container"    
                >
                    <div 
                        className="select-box--selected-item"
                    >{ this.state.selectedItem.value } </div>
                    <div
                        className = "select-box--arrow" 
                        onClick={this.dropDown}
                    >

                        <span className= {this.state.showItems ? 'select-box-arrow--up' : 'select-box-arrow--down'} />
                    </div>
                    
                    <div style={{display: this.state.showItems ? 'block' : 'none'}}
                        className="select-box--items"
                    >

                        {
                            this.state.items.map(item => <div 
                                key={item.id}
                                onClick={() => this.selectItem(item)}
                                className={this.state.selectedItem === item ? 'selected' : ''}
                            >
                                { item.value }
                            </div> )
                        }
                    </div>
                </div>
            </div>
        </div>
    }
}

export default dropDown;