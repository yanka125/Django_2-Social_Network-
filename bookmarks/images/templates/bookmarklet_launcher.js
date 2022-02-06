(function(){
 if (window.myBookmarklet !== undefined){
 myBookmarklet();
 }
 else {
 document.body.appendChild(
 document.createElement('script')
 ).src='https://b56f-37-214-38-178.ngrok.io/static/js/bookmarklet.js?r=' +
 Math.floor(Math.random()*99999999999999999999);
 }
})();