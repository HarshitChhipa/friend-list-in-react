import React, {Component} from "react";
import FlipMove from 'react-flip-move';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome/index';


class FriendDetails extends Component {
    constructor(props) {
        super(props);
        this.createFriends = this.createFriends.bind(this);
    }

    /*This is the method for listing of friends*/
    
    createFriends(item) {
        return <li
            key={item.key}>
            {item.text}
            <div className="d-flex">
                <div className="pr-3">
                    <div className="p-1 border">
                        <i onClick={() => {
                            this.favourite(item.key);
                        }}
                           className={item.isFavourite === true ? "icon-star" : "icon-star-empty"}></i>
                    </div>
                </div>
                <div>
                    <FontAwesomeIcon
                        onClick={() => this.delete(item.key)}
                        className="p-2 border"
                        size="2x"
                        icon="trash-alt"/>
                </div>
            </div>
        </li>
    }

    delete(key) {
        this.props.delete(key);
    }

    favourite(key) {
        this.props.favourite(key);
    }

    render() {
        let friendsEntries = this.props.entries;
        let listOfFriends = friendsEntries.map(this.createFriends);

        return (
            <ul className="listing m-0">
                <FlipMove duration={250} easing="ease-out">
                    {listOfFriends}
                </FlipMove>
            </ul>
        )
    }
}

export default FriendDetails;
