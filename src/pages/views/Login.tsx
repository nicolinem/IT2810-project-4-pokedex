import { useNavigate } from "react-router-dom";
import Button from "../../common/components/button/Button";
import { useLogin } from "../../common/hooks/useLogin";

type Props = {
  onExit: () => void;
  onSignUp: () => void;
};

export default function LoginPage(props: Props) {
  const { login, error } = useLogin();
  const navigate = useNavigate();

  if (error) {
    console.log(JSON.stringify(error, null, 2));
  }

  type Credentials = {
    email: string;
    password: string;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const loginCredentials: Credentials = {
      email: data.get("email")!.toString(),
      password: data.get("password")!.toString(),
    };

    login(loginCredentials);
    props.onExit();
  };

  return (
    <div
      id="authentication-modal"
      aria-hidden="true"
      className="fixed top-0 right-0 z-50 w-full overflow-x-hidden overflow-y-auto text-gray-900 md:inset-0 h-modal md:h-full"
    >
      <div className="absolute right-0 w-full h-full max-w-md p-4 md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            onClick={props.onExit}
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h1 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Sign in to leave reviews
            </h1>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <Button buttonType="primary" type={"submit"}>
                Sign in
              </Button>
            </form>
            <div className="mt-5">
              Not registered?
              <a
                onClick={props.onSignUp}
                className="text-blue-700 hover:underline dark:text-blue-500 hover:cursor-pointer"
              >
                Create account
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
