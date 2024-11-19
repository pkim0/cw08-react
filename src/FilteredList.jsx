import React, { Component } from 'react';
import { DropdownButton, DropdownItem } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "All"
    };
  }

  onSearch = (event) => {
    this.setState({search: event.target.value.trim().toLowerCase()});
  }

  onFilter = (eventKey) => {
    this.setState({
      type: eventKey
    });
  }

  filterItem = (item) => {
    return item.name.toLowerCase().search(this.state.search) !== -1 && 
           (this.state.type === "All" || item.type === this.state.type);
  }

  render(){
    return (
        <div className="filter-list">
            <div className="filter-controls">
                <div className="filter-dropdown">
                    <DropdownButton 
                        id="typeDropdown" 
                        title={`Filter: ${this.state.type}`} 
                        onSelect={this.onFilter}
                        variant="dark"
                    >
                        <DropdownItem eventKey="All">All</DropdownItem>
                        <DropdownItem eventKey="Fruit">Fruit</DropdownItem>
                        <DropdownItem eventKey="Vegetable">Vegetable</DropdownItem>
                    </DropdownButton>
                </div>
                <input type="text" placeholder="Search" onChange={this.onSearch} />
            </div>
            <List items={this.props.items.filter(this.filterItem)} />
        </div>
    );
  }
}

export default FilteredList;
