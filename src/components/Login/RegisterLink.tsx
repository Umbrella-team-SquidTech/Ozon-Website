import { Link } from 'react-router-dom'

const RegisterLink = () => {
  return (
    <div className="flex md:hidden pt-2 flex-row items-center gap-1 justify-center">
    <p className="font-Outfit text-[14px] text-[#130E0A80/50] font-[400]">Vous n’avez pas de compte ?</p>
    <Link to="/register" className="text-PrimaryColor font-[700]">
    inscription
    </Link>
  </div>
  )
}

export default RegisterLink