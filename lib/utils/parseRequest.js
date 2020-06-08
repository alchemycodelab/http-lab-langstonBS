module.exports = rawRequest => {
  const arr = rawRequest.split(' ');
  const [method, path, , , body1] = arr;

  const body = body1.slice(body1.indexOf('{'), body1.lastIndexOf('}') + 1);

  if(method === 'GET') {
    return {
      method,
      path
    };
      
  } else {
    return {
      method,
      path,
      body
    };
  }
};
