import AuthLogin from "../components/Layout/AuthLayout";
import FormRegister from "../components/Fragments/FormRegister/FormRegister";   

const Register = () => {
    return (
        <AuthLogin title="Register" type="register">
            <FormRegister />
        </AuthLogin>
    )
}

export default Register;