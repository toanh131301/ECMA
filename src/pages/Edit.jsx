import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import instanceAxios from '../config/axiosConfig';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const nav = useNavigate();
  const { id } = useParams();

  useEffect(() => {

    const getTaskById = async () => {

      try {
        const { data } = await instanceAxios.get(`/tasks/${id}`);
        reset(data);
      } catch (error) {
        console.log(error);
      }

    };

    getTaskById();

  }, [id, reset]);


  const onSubmit = async (value) => {

    try {

      await instanceAxios.put(`/tasks/${id}`, {
        ...value,
        status: value.status || false
      });

      alert("Cập nhật thành công");
      nav('/tasks');

    } catch (error) {
      console.log(error);
    }

  };


  return (
    <div className="container">

      <h2 className="mb-4">✏️ Sửa công việc</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-3">
          <label className="form-label">Tên công việc</label>

          <input
            type="text"
            className="form-control"
            {...register('title', {
              required: "Không được để trống",
              minLength: {
                value: 3,
                message: "Tối thiểu 3 ký tự"
              }
            })}
          />

          {errors.title && (
            <span className="text-danger">
              {errors.title.message}
            </span>
          )}

        </div>


        <div className="mb-3">
          <label className="form-label">Mô tả</label>

          <textarea
            className="form-control"
            rows="3"
            {...register('description', {
              required: "Không được để trống mô tả"
            })}
          />

          {errors.description && (
            <span className="text-danger">
              {errors.description.message}
            </span>
          )}

        </div>


        <div className="form-check mb-3">

          <input
            type="checkbox"
            className="form-check-input"
            {...register('status')}
          />

          <label className="form-check-label">
            Đã hoàn thành
          </label>

        </div>


        <button className="btn btn-warning">
          Cập nhật
        </button>

      </form>

    </div>
  );
}

export default Edit;