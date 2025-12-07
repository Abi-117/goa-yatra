import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../components/AdminLayout";

interface FooterLinks {
  home: string;
  about: string;
  packages: string;
  services: string;
  contact: string;
}

interface FooterData {
  logo: string;
  address: string;
  phone: string;
  email: string;
  facebook: string;
  instagram: string;
  youtube: string;
  links: FooterLinks;
}

const FooterEdit = () => {
  const [form, setForm] = useState<FooterData>({
    logo: "",
    address: "",
    phone: "",
    email: "",
    facebook: "",
    instagram: "",
    youtube: "",
    links: {
      home: "/",
      about: "/about",
      packages: "/packages",
      services: "/services",
      contact: "/contact",
    },
  });

  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Backend URL
  const API_BASE = "http://localhost:5000";

  // Fetch footer data
  useEffect(() => {
    axios.get(`${API_BASE}/api/footer`).then((res) => {
      if (res.data) {
        setForm(res.data);

        if (res.data.logo)
          setLogoPreview(`${API_BASE}/uploads/${res.data.logo}`);
      }
    });
  }, []);

  // Submit Logic
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const fd = new FormData();

    fd.append("address", form.address);
    fd.append("phone", form.phone);
    fd.append("email", form.email);
    fd.append("facebook", form.facebook);
    fd.append("instagram", form.instagram);
    fd.append("youtube", form.youtube);
    fd.append("links", JSON.stringify(form.links));

    if (e.target.logo.files[0]) {
      fd.append("logo", e.target.logo.files[0]);
    }

    await axios.put(`${API_BASE}/api/footer/update`, fd, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    setLoading(false);
    alert("Footer Updated Successfully!");
  };

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Edit Footer</h1>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">

        {/* Logo */}
        <h2 className="font-semibold text-lg">Footer Logo</h2>

        {logoPreview && (
          <img
            src={logoPreview}
            className="w-40 h-auto rounded shadow mb-3"
            alt="Footer Logo"
          />
        )}

        <input
          type="file"
          name="logo"
          onChange={(e) => {
            setLogoPreview(URL.createObjectURL(e.target.files[0]));
          }}
        />

        {/* Address */}
        <textarea
          className="w-full p-3 rounded border h-32"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          placeholder="Full Address"
        />

        {/* Phone */}
        <input
          className="w-full p-3 rounded border"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          placeholder="Phone Number"
        />

        {/* Email */}
        <input
          className="w-full p-3 rounded border"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email Address"
        />

        {/* Social Links */}
        <input
          className="w-full p-3 rounded border"
          value={form.facebook}
          onChange={(e) => setForm({ ...form, facebook: e.target.value })}
          placeholder="Facebook URL"
        />

        <input
          className="w-full p-3 rounded border"
          value={form.instagram}
          onChange={(e) => setForm({ ...form, instagram: e.target.value })}
          placeholder="Instagram URL"
        />

        <input
          className="w-full p-3 rounded border"
          value={form.youtube}
          onChange={(e) => setForm({ ...form, youtube: e.target.value })}
          placeholder="YouTube URL"
        />

        {/* Quick Links Section */}
        <h2 className="font-semibold text-lg">Footer Quick Links</h2>

        <input
          className="w-full p-3 rounded border"
          value={form.links.home}
          onChange={(e) =>
            setForm({
              ...form,
              links: { ...form.links, home: e.target.value },
            })
          }
          placeholder="Home Link"
        />

        <input
          className="w-full p-3 rounded border"
          value={form.links.about}
          onChange={(e) =>
            setForm({
              ...form,
              links: { ...form.links, about: e.target.value },
            })
          }
          placeholder="About Link"
        />

        <input
          className="w-full p-3 rounded border"
          value={form.links.packages}
          onChange={(e) =>
            setForm({
              ...form,
              links: { ...form.links, packages: e.target.value },
            })
          }
          placeholder="Packages Link"
        />

        <input
          className="w-full p-3 rounded border"
          value={form.links.services}
          onChange={(e) =>
            setForm({
              ...form,
              links: { ...form.links, services: e.target.value },
            })
          }
          placeholder="Services Link"
        />

        <input
          className="w-full p-3 rounded border"
          value={form.links.contact}
          onChange={(e) =>
            setForm({
              ...form,
              links: { ...form.links, contact: e.target.value },
            })
          }
          placeholder="Contact Link"
        />

        {/* Button */}
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Footer"}
        </button>
      </form>
    </AdminLayout>
  );
};

export default FooterEdit;
