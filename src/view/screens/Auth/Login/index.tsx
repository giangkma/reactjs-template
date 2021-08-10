import React, { FC, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { DataLogin } from 'src/domain/user';
import { UserAuthInfo } from 'src/domain/user/schema';
import { classValidatorFormResolverFactory } from 'src/helper/form';
import { showToatify } from 'src/helper/toat';
import { UserThunks } from 'src/state/thunks';
import { Alert } from 'src/view/components/alert';
import { Spinner } from 'src/view/components/loading/Spinner';
import { useMessageData } from 'src/view/hooks';
import { useIsMountedRef } from 'src/view/hooks/useIsMountedRef';
import { Screen } from 'src/view/routes/Router';

const userAuthInfoValidatorResolver = classValidatorFormResolverFactory<
    UserAuthInfo
>(UserAuthInfo);

const Login: FC = () => {
    const { register, handleSubmit, errors } = useForm<UserAuthInfo>({
        resolver: userAuthInfoValidatorResolver,
    });

    const dispatch = useDispatch();
    const history = useHistory();
    const mountedRef = useIsMountedRef();

    const { isSuccess, message, setMessage, clearMessage } = useMessageData();

    const [loading, setLoading] = useState<boolean>(false);

    const onSubmit = async (data: DataLogin): Promise<void> => {
        try {
            setLoading(true);
            await dispatch(UserThunks.onLoginThunk(data));
            showToatify('success', 'Chào mừng bạn !');
            history.push(Screen.Home);
        } catch (error) {
            setMessage({ message: error.message });
        } finally {
            if (!mountedRef.current) {
                return;
            }
            setLoading(false);
        }
    };

    return (
        <div className="h-full flex items-center justify-center bg-gray-800">
            <Spinner loading={loading} />
            <div className="w-full max-w-lg px-3 bg-gray-800">
                <form
                    className=" bg-white shadow-md rounded px-8 py-8 pt-8"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Alert
                        isSuccess={isSuccess}
                        message={message}
                        clearMessage={clearMessage}
                    />
                    <div className="pb-4">
                        <label
                            htmlFor="username"
                            className="text-sm block font-bold pb-2"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
                            placeholder="Enter your username"
                            ref={register}
                        />
                        {errors.username && (
                            <span className="text-red-600">
                                {errors.username.message}
                            </span>
                        )}
                    </div>
                    <div className="pb-4">
                        <label
                            htmlFor="password"
                            className="text-sm block font-bold pb-2"
                        >
                            Password
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
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
