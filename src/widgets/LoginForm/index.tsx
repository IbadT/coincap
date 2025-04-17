"use client";

import React, {useState} from "react";
import {Button, Flex, Form, Input} from "antd";
import {FaArrowRight} from "react-icons/fa";
import {RxCross1} from "react-icons/rx";
import { Typography } from "antd";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";


interface FormData {
    loginOrEmail: string;
    password: string;
}

export const LoginForm = () => {
    const [formData, setFormData] = useState<FormData>({
        loginOrEmail: "",
        password: "",
    });
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setInterval(() => {
            console.log(formData);
            setLoading(false);
            setError(null);
        }, 1000)
    }

    return (
        // !!!!!!!!!!!!!!!!!! h-[calc(100%-88px)]
        <Flex justify={'end'} className={'h-[calc(100%-88px)]'}>
            <Form
                name="login"
                onFinish={handleSubmit}
                layout={"vertical"}
                style={{ padding: '40px'}}
                className={'w-[50%] bg-[#000000]'}
            >

                <Flex vertical justify={'space-between'} className={'h-full'}>
                    <div>
                    <Flex justify={'space-between'}>
                        <Typography.Title level={1} style={{color: 'white', fontSize: "60px"}}>Login</Typography.Title>
                        <div>
                            <RxCross1 className="text-[#A97CFE] hover:cursor-pointer text-6xl"/>
                        </div>
                    </Flex>
                    <Form.Item
                        name="loginOrEmail"
                        // label="Login Or Email"
                        label={<span style={{ color: "#8C74B4" }}>Login or email</span>}
                        rules={[{
                        required: true,
                        message: "Please input your login or email",
                    }]}>
                        {/*<Input onChange={handleChange} name="loginOrEmail" />*/}
                        <CustomInput placeholder={'loginOrEmail'}/>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        // label="Password"
                        label={<span style={{ color: "#8C74B4" }}>Password</span>}
                        rules={[{
                        required: true,
                        message: "Please input your password",
                    }]}>
                        {/*<Input.Password onChange={handleChange} name="password" />*/}
                        <CustomPasswordInput placeholder={'password'}/>
                    </Form.Item>

                    <div className={'text-[#8A4BF0] text-right'}>Forget password</div>

                    <Button
                        block
                        style={{
                            backgroundColor: "#5F29B7",
                            color: "white",
                            fontWeight: "bold",
                            border: 'none',
                            borderRadius: "20px",
                            height: 40,
                        }}
                        htmlType={"submit"}
                    >
                        Login
                        <FaArrowRight />
                    </Button>

                    </div>

                    {/**/}
                    <Flex justify={'space-between'} vertical className={'h-[12%]'}>
                        <div className={'text-[#7A6E8C]'}>Still not have account?</div>

                        <Button
                            block
                            style={{
                                border: 'solid',
                                color: 'white',
                                borderColor: '#5F29B7',
                                backgroundColor: 'transparent',
                                borderRadius: "20px",
                                height: 40,
                            }}
                        >
                            Create an account
                            <FaArrowRight />
                        </Button>

                    </Flex>

                </Flex>

            </Form>

        </Flex>
    )
};


const CustomInput = ({ placeholder }: { placeholder: string }) => {
        const [borderColor, setBorderColor] = useState("#685C7B");

        return (
            <input
                type="text"
                placeholder={placeholder}
                onFocus={() => setBorderColor("#A97CFE")}
                onBlur={() => setBorderColor("#685C7B")}
                className={'w-full'}
                style={{
                    border: "none",
                    borderBottom: `2px solid ${borderColor}`,
                    borderRadius: 0,
                    backgroundColor: "transparent",
                    color: "white",
                    padding: "10px 10px",
                    fontSize: "16px",
                    outline: "none",
                }}
            />
        );
};

const CustomPasswordInput = ({ placeholder }: { placeholder: string }) => {
    const [borderColor, setBorderColor] = useState("#685C7B");
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="relative w-full">
            <input
                type={isVisible ? "text" : "password"}
                placeholder={placeholder}
                onFocus={() => setBorderColor("#A97CFE")}
                onBlur={() => setBorderColor("#685C7B")}
                className="w-full pr-10"
                // className="w-full pr-10 placeholder-[#8C74B4]"
                style={{
                    border: "none",
                    borderBottom: `2px solid ${borderColor}`,
                    borderRadius: 0,
                    backgroundColor: "transparent",
                    color: "white",
                    padding: "10px 10px",
                    fontSize: "16px",
                    outline: "none",
                }}
            />
            <button
                type="button"
                onClick={() => setIsVisible(!isVisible)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white cursor-pointer"
            >
                {isVisible ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
            </button>
        </div>
    );
};