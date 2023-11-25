// Tags.jsx
import React from 'react';
import Badge from 'react-bootstrap/esm/Badge'; // Agrega la ruta específica para Badge

const Tags = ({ text, backgroundColor }) => {
  return <Badge style={{ backgroundColor }}>{text}</Badge>;
};

export default Tags;
