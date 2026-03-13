import React from 'react'
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom'
import instanceAxios from '../config/axiosConfig';

function Login() {

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const nav = useNavigate()

  const onSubmit = async (value) => {
    try {
      const res = await instanceAxios.post('/login',value)
      // console.log(res);
      localStorage.setItem('tokenWD20309', res.data.accessToken)
      alert("Đăng nhập thành công")
      nav('/tasks')
      
    } catch (error) {
      // console.log(error);
      alert(error.response.data)
    }
    
  }

  return (
     <div className='container'>
      <h1>Đăng nhập</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="text" className="form-control" id="email" {...register('email',{
            required: "Không để trống email",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
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

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}

export default Login