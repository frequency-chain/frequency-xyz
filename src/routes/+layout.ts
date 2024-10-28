import '../style/app.css';
// since there's no server side data here, we can prerender
export const prerender = true;
export const ssr = false;
// For static deployment we want to create /x/index.html so /x/ works
export const trailingSlash = 'always';
