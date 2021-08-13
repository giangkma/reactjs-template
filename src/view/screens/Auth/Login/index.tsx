import React, { FC, useEffect, useRef, useState } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { DataLogin } from 'src/domain/user';
import { UserAuthInfo } from 'src/domain/user/schema';
import { realtimeDatabase, firestore } from 'src/helper/firebase';
import { classValidatorFormResolverFactory } from 'src/helper/form';
import { showToatify } from 'src/helper/toat';
import { UserThunks } from 'src/state/thunks';
import { Alert } from 'src/view/components/alert';
import { Spinner } from 'src/view/components/loading/Spinner';
import { useMessageData } from 'src/view/hooks';
import { useIsMountedRef } from 'src/view/hooks/useIsMountedRef';
import { Screen } from 'src/view/routes/Router';
import firebase from 'firebase';

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
    const citiesRef = useRef(firestore.collection('cities'));

    const onSubmit = async (): Promise<void> => {
        try {
            setLoading(true);
            citiesRef.current.doc('SF').update({
                population: firebase.firestore.FieldValue.increment(500),
            });
            // await dispatch(UserThunks.onLoginThunk(data));
            // showToatify('success', 'Chào mừng bạn !');
            // history.push(Screen.Home);
        } catch (error) {
            setMessage({ message: error.message });
        } finally {
            if (!mountedRef.current) {
                return;
            }
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    };

    const test = async () => {
        const first = citiesRef.current.orderBy('population').limit(2);

        await first.get().then(documentSnapshots => {
            // Get the last visible document
            const lastVisible =
                documentSnapshots.docs[documentSnapshots.docs.length - 1];
            console.log('last', lastVisible.data());
            console.log(documentSnapshots.size);

            // Construct a new query starting at this document,
            // get the next 25 cities.
            const next = citiesRef.current
                .orderBy('population')
                .startAfter(lastVisible)
                .limit(2);

            console.log(next.get());
        });
    };

    const [name, setName] = useState<string>('');
    useEffect(() => {
        // const ref = realtimeDatabase.ref('name');
        // ref.on('value', snapshot => {
        //     const listDeveloper = snapshot.val();
        //     setName(listDeveloper);
        // });
        (async () => {
            console.log(test());
        })();
    }, []);

    return (
        <div className="h-full flex items-center justify-center bg-gray-800">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={onSubmit}
            >
                NSHDHDNDNDH
            </button>
            <Spinner loading={loading} />
            <div className="w-full max-w-lg px-3 bg-gray-800">
                <form
                    className=" bg-white shadow-md rounded px-8 py-8 pt-8"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <p>{name}</p>
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
