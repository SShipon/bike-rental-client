

type LogoImg = {
    logoImg: string,
    _id: number
  };
  
  const Popular = ({ logo }: { logo: LogoImg }) => {
    const { logoImg } = logo;
  
    return (
      <div className=''>
        <img className='h-20 w-26 ml-11' src={logoImg} alt="" />
      </div>
    );
  };
  
  export default Popular;