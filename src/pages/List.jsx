import { useEffect, useState } from "react";
import instanceAxios from "../config/axiosConfig";
import { Link } from "react-router-dom";

function List() {

  const [list, setList] = useState([]);

  useEffect(() => {

    const getAllTask = async () => {
      try {
        const { data } = await instanceAxios.get("/tasks");
        setList(data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllTask();

  }, []);


  const handDelete = async (id) => {
    try {

      if (window.confirm("Bạn có muốn xóa không?")) {

        await instanceAxios.delete(`/tasks/${id}`);

        alert("Xóa thành công");

        setList((prev) => {
          return prev.filter((item) => item.id !== id);
        });

      }

    } catch (error) {
      console.log(error);
    }
  };


  const toggleStatus = async (task) => {

    try {

      const updated = {
        ...task,
        status: !task.status
      };

      await instanceAxios.put(`/tasks/${task.id}`, updated);

      setList((prev) =>
        prev.map((item) =>
          item.id === task.id ? updated : item
        )
      );

    } catch (error) {
      console.log(error);
    }

  };


  return (
    <div>

      <h2 className="mb-4">📋 Danh sách công việc</h2>

      <table className="table table-bordered">

        <thead className="table-dark">
          <tr>
            <th>STT</th>
            <th>Tên công việc</th>
            <th>Mô tả</th>
            <th>Hoàn thành</th>
            <th>Hành động</th>
          </tr>
        </thead>

        <tbody>

          {list.map((item, index) => (

            <tr key={item.id}>

              <td>{index + 1}</td>

              <td>{item.title}</td>

              <td>{item.description}</td>

              <td>
                <input
                  type="checkbox"
                  checked={item.status}
                  onChange={() => toggleStatus(item)}
                />
              </td>

              <td>

                <button
                  onClick={() => handDelete(item.id)}
                  className="btn btn-danger me-2"
                >
                  Xóa
                </button>

                <Link
                  to={`/tasks/edit/${item.id}`}
                  className="btn btn-warning"
                >
                  Sửa
                </Link>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default List;