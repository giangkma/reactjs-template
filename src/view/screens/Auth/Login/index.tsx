import React, { FC } from 'react';

import { useForm } from 'react-hook-form';
import { UserAuthInfo } from 'src/domain/user/schema';
import { classValidatorFormResolverFactory } from 'src/helper/form';

const userAuthInfoValidatorResolver = classValidatorFormResolverFactory<
    UserAuthInfo
>(UserAuthInfo);

const Login: FC = () => {
    const { register, handleSubmit, errors } = useForm<UserAuthInfo>({
        resolver: userAuthInfoValidatorResolver,
    });
    // TODO: handle submit login
    const onSubmit = (data: any) => console.log(data);

    return (
        <div className="h-full flex items-center justify-center bg-gray-800">
            <div className="w-full max-w-lg px-3 bg-gray-800">
                <form
                    className=" bg-white shadow-md rounded px-8 py-8 pt-8"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="pb-4">
                        <label
                            htmlFor="email"
                            className="text-sm block font-bold pb-2"
                        >
                            EMAIL ADDRESS
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
                            placeholder="Johnbull@example.com"
                            ref={register}
                        />
                        {errors.email && (
                            <span className="text-red-600">
                                {errors.email.message}
                            </span>
                        )}
                    </div>
                    <div className="pb-4">
                        <label
                            htmlFor="password"
                            className="text-sm block font-bold pb-2"
                        >
                            PASSWORD
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                            placeholder="Enter your password"
                            ref={register}
                        />
                        {errors.password && (
                            <span className="text-red-600">
                                {errors.password.message}
                            </span>
                        )}
                    </div>
                    <div>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
