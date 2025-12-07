import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../components/AdminLayout";

const NavbarEdit = () => {
  const [links, setLinks] = useState([]);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/navbar").then((res) => {
      setLinks(res.data.links);
      if (res.data.logo) {
        setLogoPreview("http://localhost:5000/" + res.data.logo);
      }
    });
  }, []);

  const handleAddLink = () => {
    setLinks([...links, { name: "", path: "" }]);
  };

  const handleSave = async () => {
    await axios.put("http://localhost:5000/api/navbar/update", { links });
    alert("Navbar Updated!");
  };

  const uploadLogo = async (e: any) => {
    const fd = new FormData();
    fd.append("logo", e.target.files[0]);

    const res = await axios.post("http://localhost:5000/api/navbar/logo", fd);
    setLogoPreview("http://localhost:5000/" + res.data.logo);
  };

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Edit Navbar</h1>

      {/* Logo Section */}
      <h2 className="font-semibold text-lg mb-3">Logo</h2>

      {logoPreview && (
        <img src={logoPreview} className="w-32 mb-3" alt="Logo" />
      )}

      <input type="file" onChange={uploadLogo} className="mb-6" />

      {/* Links Section */}
      <h2 className="font-semibold text-lg mb-3">Navigation Links</h2>

      <div className="space-y-3">
        {links.map((link: any, index: number) => (
          <div key={index} className="flex gap-4">
            <input
              className="p-2 border rounded w-1/2"
              placeholder="Name (e.g., HOME)"
              value={link.name}
              onChange={(e) => {
                const arr = [...links];
                arr[index].name = e.target.value;
                setLinks(arr);
              }}
            />
            <input
              className="p-2 border rounded w-1/2"
              placeholder="Path (e.g., /about)"
              value={link.path}
              onChange={(e) => {
                const arr = [...links];
                arr[index].path = e.target.value;
                setLinks(arr);
              }}
            />
          </div>
        ))}
      </div>

      <button
        onClick={handleAddLink}
        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
      >
        + Add Link
      </button>

      <button
        onClick={handleSave}
        className="mt-4 ml-4 px-6 py-2 bg-blue-600 text-white rounded"
      >
        Save Changes
      </button>
    </AdminLayout>
  );
};

export default NavbarEdit;
