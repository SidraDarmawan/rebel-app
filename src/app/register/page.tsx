"use client"

import FormInput from "@/components/FormInput"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import useRegister from "@/hooks/api/auth/useRegister"
import { useRouter } from "next/navigation"
import { useFormik } from 'formik';
import { validationSchema } from './validationSchema';

const Register = () => {

    const { register } = useRegister()
    const router = useRouter()

    const { handleBlur, handleChange, handleSubmit, errors, values, touched } =
    useFormik({
      initialValues: {
        fullName: '',
        email: '',
        password: '',
        referralCode: '',
        point: 0,
      },

      validationSchema,
      onSubmit: (values) => {
        register(values as any);
      },
    });

    return (
        <main className="container fixed left-0 right-0 z-50 mx-auto grid h-[90vh] w-screen grid-flow-col grid-cols-1 bg-inherit p-0 xl:grid-cols-2">
            <section className="flex items-center justify-center xl:justify-start">
                <Card className="w-[450px] border-none p-8 shadow-none xl:p-0">
                    <CardHeader>
                        <CardTitle className="text-primary mb-8 text-3xl">
                            Register
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form >
                            <div className="grid w-full items-center gap-4 p-0">
                                <FormInput 
                                    name="fullName"
                                    label="Full Name"
                                    error={errors.fullName}
                                    isError={!!touched.fullName && !!errors.fullName}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder="full name"
                                    type="text"
                                    value={values.fullName}
                                />
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </section>
        </main>
    )
}

export default Register