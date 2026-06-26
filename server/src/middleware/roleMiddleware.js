// const authorizeRoles = (...roles) => {
//   return (req, res, next) => {

//     console.log("ROLE CHECK");
//     console.log("Allowed:", roles);
//     console.log("User:", req.user);

//     if (!roles.includes(req.user.role)) {
//       return res.status(403).json({
//         message: "Access Denied",
//       });
//     }

//     next();
//   };
// };

// export default authorizeRoles;



//temp code

const authorizeRoles = (...roles) => {
  return (req, res, next) => {

    console.log("ROLE CHECK");
    console.log("Allowed:", roles);
    console.log("User:", req.user);

    if (!roles.includes(req.user.role)) {
      console.log("ACCESS DENIED");

      return res.status(403).json({
        message: "Access Denied",
      });
    }

    next();
  };
};

export default authorizeRoles;