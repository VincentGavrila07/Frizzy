import { FaTiktok, FaYoutube } from "react-icons/fa";

export default function Schedule() {
  return (
    <section className="py-20 px-6 bg-gray-900   text-white text-center" id="schedule">
      <h2 className="text-3xl font-bold mb-8 text-white"> Jadwal Live Streaming</h2>

      <div className="overflow-x-auto">
        <table className="table-auto mx-auto w-full max-w-3xl  ">
          <thead>
            <tr className="bg-purple-700 text-white">
              <th className="px-4 py-3 ">Hari</th>
              <th className="px-4 py-3 ">Waktu</th>
              <th className="px-4 py-3 ">Platform</th>
            </tr>
          </thead>
          <tbody className="text-gray-200">
            {[
              { hari: "Senin", waktu: "17.00 - 20.00 WIB", icon: <FaTiktok />, platform: "TikTok" },
              { hari: "Selasa", waktu: "19.00 - 21.30 WIB", icon: <FaTiktok />, platform: "TikTok" },
              { hari: "Rabu", waktu: "19.00 - 21.30 WIB", icon: <FaTiktok />, platform: "TikTok" },
              { hari: "Kamis", waktu: "17.00 - 20.00 WIB", icon: <FaTiktok />, platform: "TikTok" },
              { hari: "Jumat", waktu: "17.00 - 20.00 WIB", icon: <FaTiktok />, platform: "TikTok" },
              { hari: "Sabtu", waktu: "Libur Cuy 💤", libur: true },
              { hari: "Minggu", waktu: "18.00 - 21.00 WIB", icon: <FaTiktok />, platform: "TikTok" },
            ].map((item, index) => (
              <tr
                key={item.hari}
                className={`${
                  item.libur ? "bg-gray-800 text-gray-500" : "even:bg-gray-800 odd:bg-gray-700"
                } hover:bg-purple-900 transition`}
              >
                <td className="px-4 py-3 ">{item.hari}</td>
                <td className="px-4 py-3 " colSpan={item.libur ? 2 : 1}>
                  {item.waktu}
                </td>
                {!item.libur && (
                  <td className="px-4 py-3  flex justify-center items-center gap-2">
                    {item.icon} {item.platform}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
