export default function SocialTraffic() {
  return (
    <>
      <div className="table-content">
        <div className="table-head flex justify-between items-center dark:bg-blue-950 bg-white shadow-md rounded-t-md">
          <h3 className="font-medium dark:text-white text-lg">
            Social traffic
          </h3>
          <button
            type="button"
            className="text-white text-sm bg-indigo-500 px-2 h-9 font-medium rounded-md shadow-md"
          >
            See all
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto overflow-hidden dark:bg-blue-950 bg-white w-full shadow-md rounded-b-md">
            <thead className="relative">
              <tr className="bg-gray-50 dark:bg-blue-950">
                <th className="uppercase text-left">Referral</th>
                <th className="uppercase text-left">Visitors</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Facebook</td>
                <td>4,569</td>
                <td className="flex items-center gap-3">
                  60%
                  <div className="bg-gray-300 rounded-md h-1 w-36">
                    <div
                      className="bg-red-500 h-1 w-3/5 rounded-md"
                      aria-valuemax={100}
                      aria-valuemin={0}
                      aria-valuenow={60}
                      role="progress"
                    ></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Google</td>
                <td>3,985</td>
                <td className="flex items-center gap-3">
                  20%
                  <div className="bg-gray-300 rounded-md h-1 w-36">
                    <div
                      className="bg-orange-500 h-1 w-1/5 rounded-md"
                      aria-valuemax={100}
                      aria-valuemin={0}
                      aria-valuenow={20}
                      role="progress"
                    ></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Instagram</td>
                <td>3,513</td>
                <td className="flex items-center gap-3">
                  75%
                  <div className="bg-gray-300 rounded-md h-1 w-36">
                    <div
                      className="bg-blue-500 h-1 w-3/4 rounded-md"
                      aria-valuemax={100}
                      aria-valuemin={0}
                      aria-valuenow={75}
                      role="progress"
                    ></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Tiktok</td>
                <td>7,230</td>
                <td className="flex items-center gap-3">
                  80%
                  <div className="bg-gray-300 rounded-md h-1 w-36">
                    <div
                      className="bg-green-500 h-1 w-4/5 rounded-md"
                      aria-valuemax={100}
                      aria-valuemin={0}
                      aria-valuenow={80}
                      role="progress"
                    ></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Pinterest</td>
                <td>1,795</td>
                <td className="flex items-center gap-3">
                  33%
                  <div className="bg-gray-300 rounded-md h-1 w-36">
                    <div
                      className="bg-orange-500 h-1 w-1/3 rounded-md"
                      aria-valuemax={100}
                      aria-valuemin={0}
                      aria-valuenow={33}
                      role="progress"
                    ></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
