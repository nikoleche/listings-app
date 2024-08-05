async function request(method, url, data) {
  const options = {};
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    options.headers = {
      ...options.headers,
      "X-Authorization": accessToken,
    };
  }

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

  if (response.status === 204) {
    return;
  }

  const result = await response.json();

  if (!response.ok) {
    throw response;
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
