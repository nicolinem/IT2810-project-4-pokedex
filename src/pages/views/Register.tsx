import * as React from "react";
import Button from "../../common/components/button/Button";
import { useRegister } from "../../common/hooks/useRegister";

type Props = {
  onExit: () => void;
  onLogin: () => void;
}

const Register = (props: Props) => {

  type Credentials = {
    password: string;
    email: string;
    name: string;
  };


  const { register } = useRegister();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const credentials: Credentials = {
      email: data.get("email")!.toString(),
      password: data.get("password")!.toString(),
      name: data.get("name")!.toString(),
    };

    register(credentials);
    props.onExit()
  };

  return (
      <div id="authentication-modal"  aria-hidden="true" className=" overflow-y-auto  overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
    <div className="absolute right-0 p-4 w-full max-w-md h-full md:h-auto ">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button onClick={props.onExit} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
            </button>
            <div className="py-6 px-6 lg:px-8">
                <h1 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign up to leave reviews</h1>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
                        <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name" required/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
              </div>
              <Button buttonType="primary" type={"submit"}>Sign up</Button>
                    
            </form>
             <div className="mt-5">
              Have an account? <a onClick={props.onLogin}className="text-blue-700 hover:underline dark:text-blue-500 hover:cursor-pointer">Sign in</a>
            </div>
            </div>
        </div>
    </div>
</div> 

  );
};

export default Register;
