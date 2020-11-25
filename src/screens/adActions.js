import firebase from "./firebaseconfig";
import { ADS_FETCH } from "./adConstants";

/* export const getAds = () => {
   return (dispatch) => {
    firebase.database().ref("/ads").on("value", (snapshot) => {
      dispatch({
       type: ADS_FETCH,
         payload: snapshot.val(),
       });

     });
     let items = Object.values(userItem);
    self.setState({ items: items })
   };
 };*/

export const postAd = (title, details, price) => {
  return (dispatch) => {
    firebase.database().ref('/ads').push({title, details, price})
  }

  
}
export const deleteAd = (title) => {
  return(dispatch)=>{
    firebase.database().ref('/ads/' + title).remove();
   
  }
}