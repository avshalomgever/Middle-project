// import React from "react";
// import "./LogIn.css";
// import { useForm } from "react-hook-form";
// import { useContext, useEffect } from "react";
// import { Context } from "../../Context/Context";
// import { login } from "../../../user.json";

// const LogIn = () => {
//   const { users, setUsers } = useContext(Context);
//   useEffect(() => {
//    return setUsers(login);
//   }, []);
 





//   console.log(users);
  


//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (data) => console.log(data);
//   return (
//     <div className="login-section">
//       <div className="form-container">
//         <h2>Login</h2>
//         <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
//           <div>
//             <input
//               type="text"
//               id="username"
//               placeholder="Username"
//               {...register("Username", { required: true })}
//             />
//             {errors.Username && <span>This field is required</span>}
//           </div>
//           <div>
//             <input
//               type="password"
//               id="password"
//               placeholder="Password"
//               {...register("Password", { required: true })}
//             />
//             {errors.Password && <span>This field is required</span>}
//           </div>
//           <button type="submit">Login</button>
//         </form>

//         <form className="register-form">
//           <h2>Register</h2>
//           <div>
//             <input type="text" id="fullname" placeholder="Full Name" />
//           </div>
//           <div>
//             <input type="email" id="email" placeholder="Email" />
//           </div>
//           <div>
//             <input type="text" id="username" placeholder="Username" />
//           </div>
//           <div>
//             <input type="password" id="password" placeholder="Password" />
//           </div>
//           <button type="submit">Register</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LogIn;
