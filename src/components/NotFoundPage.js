import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="not-found">
    <p>404: Page not found!</p><br></br>
    <Link to="/">Go home</Link>
  </div>
);

export default NotFoundPage;
