import React from 'react';
import { useForm } from 'react-hook-form';
import instanceAxios from '../config/axiosConfig';
import { useNavigate } from 'react-router-dom';

function Add() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const nav = useNavigate();

  const onSubmit = async (value) => {
    try {

      await instanceAxios.post('/tasks', {
        ...value,
        status: false,
        createdAt: new Date().toISOString().split("T")[0]
      });

      alert("Thêm công việc thành công");
      nav('/book');

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">

      <h2 className="mb-4">➕ Thêm công việc</h2>

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


        <button type="submit" className="btn btn-success">
          Thêm công việc
        </button>

      </form>
    </div>
  );
}

export default Add;