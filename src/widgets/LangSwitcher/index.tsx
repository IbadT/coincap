"use client";
import {Dropdown, Button, MenuProps} from "antd";
import { DownOutlined } from "@ant-design/icons";
import {useState} from "react";







export const LangSwitcher = () => {
    const items: MenuProps['items'] = [
        {
            label: 'en',
            key: '1',
        },
        {
            label: 'ru',
            key: '2',
        },
        {
            label: 'es',
            key: '3',
        },
        {
            label: 'cz',
            key: '4',
        },
    ];

    const [lang, setLang] = useState<string>('en');

    const handleMenuClick = (e) => {
        const newLang = items.find((i) => i?.key === e.key);
        setLang(newLang.label);
    };
    const menuProps = {
        items,
        className: "custom-dropdown",
        onClick: handleMenuClick,
    };
    return (
        <>
            <Dropdown menu={menuProps} trigger={["click"]}>
                <Button
                    style={{ backgroundColor: 'transparent', color: 'white', border: 'none', fontSize: 18 }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#904BFF")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                >
                    {lang} <DownOutlined />
                </Button>
            </Dropdown>
        </>
    )
}