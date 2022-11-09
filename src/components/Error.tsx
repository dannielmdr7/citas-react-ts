
interface Props{
  mensaje:string;
}
export const Error = ( {mensaje}:Props ) => {
  return (
    <div className=" bg-red-800 text-white text-center px-2 py-4 uppercase font-bold mb-2 rounded-md " >
      <p  > {mensaje} </p>
    </div>
  )
}
