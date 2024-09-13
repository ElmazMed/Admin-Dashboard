export default function SocialTraffic() {
  return (
    <>
      <div className="table-content">
        <div className="table-head flex justify-between items-center bg-white shadow-md rounded-t-md">
          <h3 className="font-medium text-lg">Social traffic</h3>
          <button
            type="button"
            className="text-white text-sm bg-indigo-500 px-2 h-9 font-medium rounded-md shadow-md"
          >
            See all
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto bg-white shadow-md rounded-md">
            <thead className="relative">
              <tr className="bg-gray-50">
                <th className="uppercase text-left">Referral</th>
                <th className="uppercase text-left">Visitors</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>/website/</td>
                <td>4,569</td>
                <td>340</td>
              </tr>
              <tr>
                <td>/website/index.html</td>
                <td>3,985</td>
                <td>319</td>
              </tr>
              <tr>
                <td>/website/dashboard.html</td>
                <td>3,513</td>
                <td>249</td>
              </tr>
              <tr>
                <td>/website/tables.html/website/</td>
                <td>2,050</td>
                <td>147</td>
              </tr>
              <tr>
                <td>/website/profile.html</td>
                <td>1,795</td>
                <td>190</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
