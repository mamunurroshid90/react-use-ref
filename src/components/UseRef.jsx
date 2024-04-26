import React, { useRef } from "react";

const UseRef = () => {
  const userNameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userName = userNameRef.current.value;
    const password = passwordRef.current.value;
    console.log({ userName, password });
  };
  return (
    <>
      <div className=" flex flex-col gap-5 justify-center items-center h-screen bg-slate-200">
        <form
          onSubmit={handleSubmit}
          className=" bg-white py-5 px-6 shadow-md rounded flex flex-col gap-2"
        >
          <div className=" flex flex-col gap-1">
            <label
              htmlFor="userName"
              className=" text-sm font-medium capitalize"
            >
              User Name:{" "}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              placeholder="Enter your name"
              ref={userNameRef}
              className=" py-1 pl-0.5 pr-1 rounded shadow"
            />
          </div>
          <div className=" flex flex-col gap-1">
            <label
              htmlFor="password"
              className=" text-sm font-medium capitalize"
            >
              Password:{" "}
            </label>
            <input
              type="text"
              placeholder="Enter a valid password"
              name="password"
              id="password"
              ref={passwordRef}
              className=" py-1 pl-0.5 pr-1 rounded shadow"
            />
          </div>
          <button
            type="submit"
            className=" bg-blue-700 text-white font-semibold py-1 px-3 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default UseRef;
