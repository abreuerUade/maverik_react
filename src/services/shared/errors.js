class Error {
    constructor(message) {
      this.message = message;
      this.name = "Error";
    }
  }
  
class ApiError extends Error {
  constructor(message) {
    super(message);
    this.source = "api";
  }
}

class UnknownError extends Error {
  static message = "something wrong happened";
  constructor(message) {
    super(UnknownError.message + " ->" + message);
    this.name = "UnknownError";
  }
}

class ApiUnreachableError extends ApiError {
  static message = "the api is unreachable, there is a network error";
  constructor() {
    super(ApiUnreachableError.message);
    this.name = "ApiUnreachableError";
  }
}

const handleError = (error) => {
  console.log(error);
  if (error.response) {
    const { response } = error;
    const { data, status } = response;
    throw new ApiError(error.message);
  } else if (error.request){
    if (error.message === "Network Error") {
      throw new ApiUnreachableError();
    } else {
      throw new ApiError(error.message);
    }
  } else {
    throw new UnknownError(error.message);
  }
}

export {
  ApiError,
  UnknownError,
  ApiUnreachableError,
  handleError,
};