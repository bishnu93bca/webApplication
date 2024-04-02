import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm, router } from '@inertiajs/react';


export default function Upload() {
    const { data, setData, post, processing, errors, reset, values } = useForm({
        avatar: '',
    });

    function handleChange(e) {

    const key = e.target.id;
    const value = e.target.value
    setValues(values => ({
        ...values,
        [key]: value,
    }))
  }
  const fd = new FormData();

  
    const submit = (e) => {
        e.preventDefault();

        post(route('upload'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit} method="post" enctype="multipart/form-data">
                
                <div className="mt-4">
                    <InputLabel htmlFor="file" value="file" />

                    <TextInput
                        id="file"
                        type="file"
                        name="avatar"
                        className="mt-1 block w-full"
                        autoComplete="username"
                         onChange={(e) => setData('avatar', e.target.files[0])}
                        required

                    />

                   <InputError message={errors.email} className="mt-2" />
                </div>
                

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
