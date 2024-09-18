import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";
import Cards from "../components/Cards";
import Nav from "../components/Nav";
import icon from "../assets/magnetic.png";
import userImg from "../assets/pexels-justin-shaifer-501272-1222271.jpg";

export default function Tables() {
  return (
    <>
      <div className="sm:flex">
        <Nav />
        <div className="w-full">
          <Cards />

          <div className="table-content sm:p-8">
            <div
              className="table-head flex justify-between items-center shadow-md rounded-t-md"
              style={{ backgroundColor: "#172b4d" }}
            >
              <h3 className="font-medium text-white text-lg">Card table</h3>
            </div>
            <div className="overflow-auto">
              <table className="projects-table table-auto shadow-md w-full rounded-md">
                <thead className="relative">
                  <tr className="bg-indigo-900">
                    <th className="uppercase flex text-left">Projects</th>
                    <th className="uppercase text-left">Budget</th>
                    <th className="uppercase text-left">Status</th>
                    <th className="uppercase text-left">Users</th>
                    <th className="uppercase text-left">Completion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="flex items-center gap-3 ">
                        <div className="h-11 w-11 bg-white rounded-full p-2">
                          <img src={icon} />
                        </div>{" "}
                        <span>Design System</span>
                      </div>
                    </td>
                    <td>$2,500 USD</td>
                    <td>
                      <div className="flex items-center gap-1 ">
                        <div className="bg-red-600 h-1 w-1 rounded-md"></div>
                        <span>pending</span>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-1">
                        <div className="h-8 w-8 bg-white rounded-full p-0.5 flex items-center justify-center">
                          <img
                            src={userImg}
                            alt="user"
                            className="h-full w-full rounded-full"
                          />
                        </div>
                        <div className="h-8 w-8 bg-white rounded-full p-0.5 flex items-center justify-center">
                          <img
                            src={userImg}
                            alt="user"
                            className="h-full w-full rounded-full"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2">
                        <span>60%</span>
                        <div className="bg-gray-300 rounded-md h-1 w-36">
                          <div
                            className="bg-red-500 h-1 w-3/5 rounded-md"
                            aria-valuemax={100}
                            aria-valuemin={0}
                            aria-valuenow={60}
                            role="progress"
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex items-center gap-3 ">
                        <div className="h-11 w-11 bg-white rounded-full p-2">
                          <img src={icon} />
                        </div>{" "}
                        <span>Design System</span>
                      </div>
                    </td>
                    <td>$2,500 USD</td>
                    <td>
                      <div className="flex items-center gap-1 ">
                        <div className="bg-red-600 h-1 w-1 rounded-md"></div>
                        <span>pending</span>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-1">
                        <div className="h-8 w-8 bg-white rounded-full p-0.5 flex items-center justify-center">
                          <img
                            src={userImg}
                            alt="user"
                            className="h-full w-full rounded-full"
                          />
                        </div>
                        <div className="h-8 w-8 bg-white rounded-full p-0.5 flex items-center justify-center">
                          <img
                            src={userImg}
                            alt="user"
                            className="h-full w-full rounded-full"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2">
                        <span>60%</span>
                        <div className="bg-gray-300 rounded-md h-1 w-36">
                          <div
                            className="bg-red-500 h-1 w-3/5 rounded-md"
                            aria-valuemax={100}
                            aria-valuemin={0}
                            aria-valuenow={60}
                            role="progress"
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex items-center gap-3 ">
                        <div className="h-11 w-11 bg-white rounded-full p-2">
                          <img src={icon} />
                        </div>{" "}
                        <span>Design System</span>
                      </div>
                    </td>
                    <td>$2,500 USD</td>
                    <td>
                      <div className="flex items-center gap-1 ">
                        <div className="bg-red-600 h-1 w-1 rounded-md"></div>
                        <span>pending</span>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-1">
                        <div className="h-8 w-8 bg-white rounded-full p-0.5 flex items-center justify-center">
                          <img
                            src={userImg}
                            alt="user"
                            className="h-full w-full rounded-full"
                          />
                        </div>
                        <div className="h-8 w-8 bg-white rounded-full p-0.5 flex items-center justify-center">
                          <img
                            src={userImg}
                            alt="user"
                            className="h-full w-full rounded-full"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2">
                        <span>60%</span>
                        <div className="bg-gray-300 rounded-md h-1 w-36">
                          <div
                            className="bg-red-500 h-1 w-3/5 rounded-md"
                            aria-valuemax={100}
                            aria-valuemin={0}
                            aria-valuenow={60}
                            role="progress"
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex items-center gap-3 ">
                        <div className="h-11 w-11 bg-white rounded-full p-2">
                          <img src={icon} />
                        </div>{" "}
                        <span>Design System</span>
                      </div>
                    </td>
                    <td>$2,500 USD</td>
                    <td>
                      <div className="flex items-center gap-1 ">
                        <div className="bg-red-600 h-1 w-1 rounded-md"></div>
                        <span>pending</span>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-1">
                        <div className="h-8 w-8 bg-white rounded-full p-0.5 flex items-center justify-center">
                          <img
                            src={userImg}
                            alt="user"
                            className="h-full w-full rounded-full"
                          />
                        </div>
                        <div className="h-8 w-8 bg-white rounded-full p-0.5 flex items-center justify-center">
                          <img
                            src={userImg}
                            alt="user"
                            className="h-full w-full rounded-full"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2">
                        <span>60%</span>
                        <div className="bg-gray-300 rounded-md h-1 w-36">
                          <div
                            className="bg-red-500 h-1 w-3/5 rounded-md"
                            aria-valuemax={100}
                            aria-valuemin={0}
                            aria-valuenow={60}
                            role="progress"
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex items-center gap-3 ">
                        <div className="h-11 w-11 bg-white rounded-full p-2">
                          <img src={icon} />
                        </div>{" "}
                        <span>Design System</span>
                      </div>
                    </td>
                    <td>$2,500 USD</td>
                    <td>
                      <div className="flex items-center gap-1 ">
                        <div className="bg-red-600 h-1 w-1 rounded-md"></div>
                        <span>pending</span>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-1">
                        <div className="h-8 w-8 bg-white rounded-full p-0.5 flex items-center justify-center">
                          <img
                            src={userImg}
                            alt="user"
                            className="h-full w-full rounded-full"
                          />
                        </div>
                        <div className="h-8 w-8 bg-white rounded-full p-0.5 flex items-center justify-center">
                          <img
                            src={userImg}
                            alt="user"
                            className="h-full w-full rounded-full"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2">
                        <span>60%</span>
                        <div className="bg-gray-300 rounded-md h-1 w-36">
                          <div
                            className="bg-red-500 h-1 w-3/5 rounded-md"
                            aria-valuemax={100}
                            aria-valuemin={0}
                            aria-valuenow={60}
                            role="progress"
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
