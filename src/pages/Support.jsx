import Nav from "../components/Nav";

export default function Support() {
  return (
    <>
      <div className="lg:flex">
        <Nav />
        <div className="w-full sm:p-8 p-4">
          <div className="bg-white dark:bg-blue-950 shadow-md p-4 rounded-md">
            <h1
              className="uppercase my-5 font-medium"
              style={{ color: "#8898aa" }}
            >
              Contact us:
            </h1>
            <hr />
            <form className="mt-8">
              <div className="flex w-full flex-col">
                <label>Email:</label>
                <input
                  type="email"
                  placeholder="john@doe.com"
                  className="p-3 rounded-md outline-none border-0 "
                />
              </div>
              <div className="flex w-full flex-col">
                <label>Subject:</label>
                <input
                  type="text"
                  placeholder="Client ..."
                  className="p-3 rounded-md outline-none border-0 "
                />
              </div>
              <div className="flex w-full flex-col">
                <label>Message:</label>
                <textarea
                  placeholder="Message ..."
                  className="p-3 rounded-md outline-none border-0 "
                />
              </div>
              <button className="text-white bg-blue-400 shadow-md w-full px-4 py-2 rounded-md">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
