import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../components/AdminLayout";

const AddService = () => {
  const nav = useNavigate();
  const [title, setTitle] = useState("");
  const [timing, setTiming] = useState("");
  const [items, setItems] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const submit = async (e: any) => {
    e.preventDefault();

    let form = new FormData();
    form.append("title", title);
    form.append("timing", timing);
    form.append("items", JSON.stringify(items.split(",")));
    if (image) form.append("image", image);

    await axios.post("http://localhost:5000/api/services", form);
    nav("/admin/services");
  };

  return (
    <AdminLayout>
    <form onSubmit={submit} className="space-y-4 max-w-lg">
      <input
        type="text"
        placeholder="Title"
        className="input"
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Timing"
        className="input"
        onChange={(e) => setTiming(e.target.value)}
      />

      <textarea
        placeholder="Items (comma separated)"
        className="input"
        onChange={(e) => setItems(e.target.value)}
      />

      <input type="file" onChange={(e) => setImage(e.target.files?.[0] || null)} />

      <button className="btn-primary">Add</button>
    </form>
    </AdminLayout>
  );
};

export default AddService;
