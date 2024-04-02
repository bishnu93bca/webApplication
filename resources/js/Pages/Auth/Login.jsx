import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';


import { ArrowRightIcon } from "@heroicons/react/24/solid";
import UIButton from "@/Components/common/UIButton";
import {
  ICON_ALIGN_RIGHT,
  LOGO_DEFAULT_WIDTH,
  WIZARD_FORM_PAGE,
} from "@/constants";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <div>
                <Link href="/" aria-label="Login">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500 mx-auto my-0" />
                </Link>
            </div>
            <Head title="Log in" />
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ms-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            aria-label="Forgot your password?"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    {/*<PrimaryButton className="ms-4" disabled={processing}>
                        Log in
                    </PrimaryButton>*/}
                    <UIButton
                      text={"Log in"}
                      className={`ms-4 text-white bg-blue-600  border-blue-600 flex justify-center items-center   border-2  font-semibold rounded-md text-xs px-6 py-2 text-center uppercase`}
                      Icon={
                        <ArrowRightIcon
                          strokeWidth={0.8}
                          stroke="currentColor"
                          className="ml-2 w-5 h-4"
                        />
                      }
                      IconAlign={ICON_ALIGN_RIGHT}
                      disabled={processing}
                      type={"submit"}
                      
                    />
                </div>
            </form>
            
        </GuestLayout>
    );
}
