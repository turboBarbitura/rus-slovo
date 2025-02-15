"use client"

import {useForm} from 'react-hook-form';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import {Bounce, toast} from "react-toastify";
import {useState} from "react";
import {Button} from "@/components/Button";

type SubmitData = {
    name: string,
    phone: string,
    email: string,
    website: string,
    comment?: string,
}

export const OrderForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // Создаем схему валидации с помощью Yup
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Обязательное поле'),
        phone: Yup.string()
            .required('Обязательное поле')
            .matches(/^\+?\d{10,15}$/, 'Неверный формат телефона'),
        email: Yup.string().email('Неверный формат email').required('Обязательное поле'),
        website: Yup.string().url('Неверный формат URL').required('Обязательное поле'),
        comment: Yup.string()
    });

    // Инициализируем форму с помощью useForm
    const {
        resetField,
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            name: '',
            phone: '',
            email: '',
            website: '',
            comment: '',
        },
    });

    // Обработчик отправки формы
    const onSubmit = (data: SubmitData) => {
        setIsLoading(true);
        const templateParams = {
            name: data.name,
            phone: data.phone,
            email: data.email,
            website: data.website,
            comment: data.comment || 'Без комментария',
        };

        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
            )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                toast('Заявка успешно отправлена!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                    progressClassName: "progress",
                    className: "my_toast_body",
                });
                resetField("name")
                resetField("phone")
                resetField("email")
                resetField("website")
                resetField("comment")
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('FAILED...', error);
                alert('Произошла ошибка при отправке заявки.');
                setIsLoading(false);

            });
    };

    return (
        <section id="order-form" className="py-16 bg-gray-200">
            <div className="container mx-auto px-4 max-w-[500px] flex justify-center items-center flex-col">
                <h2 className="text-3xl font-bold text-center">Оставить заявку</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 w-full">
                    <div className="mb-4">
                        <input
                            type="text"
                            id="name"
                            {...register('name')}
                            placeholder="Имя*"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                        />
                        {errors.name && <div className="text-red-500">{errors.name.message}</div>}
                    </div>
                    <div className="mb-4">
                        <input
                            type="tel"
                            id="phone"
                            {...register('phone')}
                            placeholder="Телефон*"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                        />
                        {errors.phone && <div className="text-red-500">{errors.phone.message}</div>}
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            id="email"
                            {...register('email')}
                            placeholder="Email*"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                        />
                        {errors.email && <div className="text-red-500">{errors.email.message}</div>}
                    </div>
                    <div className="mb-4">
                        <input
                            type="url"
                            id="website"
                            {...register('website')}
                            placeholder="Ссылка на сайт*"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                        />
                        {errors.website && <div className="text-red-500">{errors.website.message}</div>}
                    </div>
                    <div className="mb-4">
                        <textarea
                            id="comment"
                            {...register('comment')}
                            placeholder="Комментарий (необязательно)"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="flex justify-end">
                        <Button disabled={isLoading} type="submit">
                            Отправить заявку
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
};
