export class Router {
  constructor() {
    this.routes = {};
    this.handle = this.handle.bind(this);
    window.addEventListener('popstate', this.handle);
  }

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();

    const target = event.target;
    const route = target.getAttribute('href');

    // Update the URL without triggering a page reload
    window.history.pushState({}, '', route);

    // Handle the route change
    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || '404.html';

    // Fetch the page content
    fetch(route)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then((html) => {
        document.querySelector('#app').innerHTML = html;
      })
      .catch((error) => console.error('Error fetching page:', error));
  }
}

// Example usage
const router = new Router();
router.add('/', 'home.html');
router.add('/about', 'about.html');
router.add('404', '404.html');

// Initial route handling
window.addEventListener('load', () => router.handle());

// Handle navigation
document.addEventListener('click', (event) => {
  const target = event.target;
  if (target.tagName === 'A' && target.getAttribute('href')) {
    event.preventDefault();
    router.route(event);
  }
});
