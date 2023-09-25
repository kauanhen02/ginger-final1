class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
    this.appElement = document.querySelector('#app');
    window.addEventListener('popstate', () => this.handle());
  }

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  navigateTo(route) {
    window.history.pushState({}, '', route);
    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes['404'];

    // Fetch the page content
    fetch(route)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then((html) => {
        this.currentRoute = route;
        this.appElement.innerHTML = html;
      })
      .catch((error) => console.error('Error fetching page:', error));
  }
}

const router = new Router();

// Example usage
router.add('/', 'home.html');
router.add('/about', 'about.html');
router.add('404', '404.html');

// Handle initial page load
window.addEventListener('load', () => router.handle());

// Handle navigation
document.addEventListener('click', (event) => {
  const target = event.target;
  if (target.tagName === 'A' && target.getAttribute('href')) {
    event.preventDefault();
    router.navigateTo(target.getAttribute('href'));
  }
});
