const Login = (props) => {
   return (
     <section className="overflow-hidden flex flex-col justify-center h-screen text-center">
       <div className="z-[-1] w-full relative box-border flex flex-col justify-center items-center h-full min-h-screen bg-top bg-cover bg-no-repeat px-10 sm:px-15"
         style={{ backgroundImage: "url('/images/login-background.jpg')" }}>
            <img className="max-w-[1000px] mb-5 w-full block" src="/images/cta-logo-one.svg"></img>
            <a className="mb-5 max-w-[1000px] font-bold bg-[#0063e5] p-5 w-full rounded-lg cursor-pointer tracking-[5px] hover:bg-[#0483ee] transition duration-250">GET ALL THERE</a>
            <p className="mb-5 max-w-[1000px] w-full text-[hsla(0,0%,90%,1)] text-[20px] leading-[1.5] tracking-widest">Start watching from where you left off. personlise for kids and more</p>
            <img className="max-w-[1000px] mt-3 mb-5 w-full block" src="/images/cta-logo-two.png"></img>
       </div>
     </section>
   );
 };
 
 export default Login;
 