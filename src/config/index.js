const environmentUrls = new Map();
environmentUrls.set('localhost','http://localhost:8080')
environmentUrls.set('bookstore-flying-dog-web.herokuapp.com', 'https://bookstore-flying-dog-web.herokuapp.com/')
export default environmentUrls.get(window.location.hostname);