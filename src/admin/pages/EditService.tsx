import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../components/AdminLayout";

const EditService = () => {
  const { id } = useParams();
  const nav = useNavigate();

  const [data, setData] = useState<any>(null);
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/services/${id}`).then((res) => {
      setData(res.data);
    });
  }, [id]);

  const submit = async (e: any) => {
    e.preventDefault();

    let form = new FormData();
    form.append("title", data.title);
    form.append("timing", data.timing);
    form.append("items", JSON.stringify(data.items));
    if (image) form.append("image", image);

    await axios.put(`http://localhost:5000/api/services/${id}`, form);
    nav("/admin/services");
  };

  if (!data) return <>Loading...</>;

  return (
    <AdminLayout>
    <form onSubmit={submit} className="space-y-4 max-w-lg">
      <input
        className="input"
        value={data.title}
        onChange={(e) => setData({ ...data, title: e.target.value })}
      />

      <input
        className="input"
        value={data.timing}
        onChange={(e) => setData({ ...data, timing: e.target.value })}
      />

      <textarea
        className="input"
        value={data.items.join(",")}
        onChange={(e) =>
          setData({ ...data, items: e.target.value.split(",") })
        }
      />

      <input type="file" onChange={(e) => setImage(e.target.files?.[0] || null)} />

      <button className="btn-primary">Update</button>
    </form>
    </AdminLayout>
  );
};

export default EditService;
