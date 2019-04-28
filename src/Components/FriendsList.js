import React, {Component} from "react";
import FriendDetails from "./FriendDetails";
import '../assets/css/friendDetails.css';
import {DB_CONFIG} from '../config/config';
import firebase from 'firebase/app';

class FriendsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentPage: 1,
            todosPerPage: 3
        };
        /*Methods to add Friends, Delete Friend, and mark a Friend as Favourite*/
        this.addFriend = this.addFriend.bind(this);
        this.deleteFriend = this.deleteFriend.bind(this);
        this.markAsFavouriteFriend = this.markAsFavouriteFriend.bind(this);

        /*Method to handel pagination*/
        this.handleClick = this.handleClick.bind(this);
    }

    /*method to handel the pagination*/
    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    /*Method to add a Friend*/

    addFriend(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now(),
                isFavourite: false
            };

            this.setState((prevState) => {
                    return {
                        items: prevState.items.concat(newItem)
                    };
                }
            )
        }
        this._inputElement.value = "";
        e.preventDefault();
    }

    deleteFriend(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key)
        });
        this.setState({
            items: filteredItems
        })
    }

    markAsFavouriteFriend(key) {
        var favouriteFriend = this.state.items.filter(function (item) {
            if (item.key === key) {
                item.isFavourite = !item.isFavourite;
                return item;
            } else {
                return item;
            }
        });
        this.setState({
            items: favouriteFriend
        })
    }

    render() {
        const {items, currentPage, friendsPerPage} = this.state;

        // Logic for displaying Friend List.

        const indexOfLastFriend = currentPage * friendsPerPage;
        const indexOfFirstFriend = indexOfLastFriend - friendsPerPage;
        const currentTodos = items.slice(indexOfFirstFriend, indexOfLastFriend);

        return (
            <div>
                <div>
                    <div className="pb-2">
                        <div className="card text-white bg-secondary">
                            <div className="card-header">
                                The FriendList.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="friendList">
                    <div className="header">
                        <form onSubmit={this.addFriend}>
                            <input ref={(a) => this._inputElement = a}
                                   placeholder="Type the name of a friend">
                            </input>
                        </form>
                    </div>
                    <FriendDetails delete={this.deleteFriend}
                                   favourite={this.markAsFavouriteFriend}
                                   entries={this.state.items}/>
                </div>
            </div>
        )
    }
}

export default FriendsList;
