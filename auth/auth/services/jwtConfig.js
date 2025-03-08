const jwtConfig = {
    JWT_SECRET:process.env.JWT_SECRET||"supersecreto123",
    JWT_EXPIRES_IN:process.env.JWT_EXPIRES_IN||"1h"}

export default jwtConfig;