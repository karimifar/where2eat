import axios from "axios";
import passport from "passport";
import LocalStrategy from "passport-local";

const API = {
  // Retrieves saved articles from the db
  getRestaurant: function(cuisine, zipCode) {
    return axios.get("/api/searchRestaurant/" + cuisine + "/" + zipCode);
  },
  // Saves a new article to the db
  saveRestaurant: function(savedRestaurant) {
    return axios.post("/api/saved", savedRestaurant);
  },
  // Deletes an article from the db
  deleteRestaurant: function(id) {
    return axios.delete(`/api/saved/${id}`);
  },
  // Send a Pick-Restaurant invite to friends
  sendPickInvite: function(data) {
    console.log("react send invite");
    return axios.post("/api/invite/sendPickInvite", data);
  },

  // search and add friend
  searchFriends: function(key,cb) {
    console.log(key);
    cb(["ww","hoho","haha"]);
  },
<<<<<<< HEAD

  addFriend: function(userName) {
    return axios.post("api/invite/addFriend",userName)
  },

=======
  
>>>>>>> b025a785e7da341ced47b103d2b435bca2e87fdb
  authenticate: function(data){
    return axios.post("/api/auth", data);
  },

  signUp: function(data){
    return axios.post("/api/signup", data);
  }
};

export default API;
