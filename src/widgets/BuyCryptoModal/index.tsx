"use client";
import {useState} from "react";

type BuyCryptoModalProps = {
    cryptoLabel: string
}

export const BuyCryptoModal = ({cryptoLabel}: BuyCryptoModalProps) => {
    const [count, setCount] = useState<string>("")
    return (
        <div>
            <h1>Купить {cryptoLabel}</h1>

            <form>
                <label>Введите колличество</label>
                <input value={count} onChange={(e) => setCount(e.target.value)} />
                <button>Купить</button>
            </form>
        </div>
    )
}