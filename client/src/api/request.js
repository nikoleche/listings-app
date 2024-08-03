async function request(method, url, data) {
  const options = {};

  if (method !== "GET") {
    options.method = method;
  }

  if (data) {
    options.headers = {
      ...options.headers,
      "Content-Type": "application/json",
    };
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);
  const result = await response.json();

  if (!response.ok) {
    throw Error;
  }
  return result;
}

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const put = request.bind(null, "PUT");
export const remove = request.bind(null, "DELETE");

// export const get = (url, data) => request("GET", url, data);

export default {
  get,
  post,
  put,
  remove,
};
