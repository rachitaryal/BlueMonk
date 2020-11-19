class DispatchError extends Error {
    constructor(message:string) {
      super(message)
      this.name = "DispatchError"; 
    }
  }

export default DispatchError
