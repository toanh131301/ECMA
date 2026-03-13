import React from 'react'
import { useForm } from 'react-hook-form'
import instanceAxios from '../config/axiosConfig';
import { useNavigate } from 'react-router-dom';

function Register() {
  const {
    register,
    handleSubmit,
    formState: {errors},
    watch
  } = useForm();

  const nav = useNavigate()

  const onSubmit = async (value) => {
    // console.log(value);
    delete value.confirmPassword; // xóa thuộc tính dư thừa

    try {
      const res = await instanceAxios.post('/register',value);
      // console.log(res);
      alert("Đăng ký thành công")
      nav('/login')
      
    } catch (error) {
      console.log(error);
      if(error){
        alert(error.response.data)
      }
      
    }
    
  }

  return (
    <div className='container'>
      <h1>Đăng ký</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="text" className="form-control" id="email" {...register('email',{
            required: "Không để trống email",
            pattern: {
              // value: /^\S+@\S+\.\S+$/,
              value: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
            
              message: "Sai định dạng email"
            }
          })}/>

          {errors.email && <span className='text-danger'>{errors.email.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" {...register('password',{
            required: "Không để trống password",
            minLength: {
              value: 6,
              message: "Cần tối thiểu 6 ký tự"
            }
          })} />

          {errors.password && <span className='text-danger'>{errors.password.message}</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="confirmPassword" {...register('confirmPassword',{
            required: "Không để trống xác nhận mật khẩu",
            validate: (value) => {
              return value == watch('password') ? true : "Xác nhận mật khẩu không trùng với password"
            }
          })} />
          {errors.confirmPassword && <span className='text-danger'>{errors.confirmPassword.message}</span>}
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}

export default Register