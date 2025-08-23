import React, {useId} from "react";

const defaultCurrencies = [
    { value: "usd", label: "US Dollar (USD)" },
    { value: "inr", label: "Indian Rupee (INR)" },
    { value: "aud", label: "Australian Dollar (AUD)" },
    { value: "cad", label: "Canadian Dollar (CAD)" },
    { value: "sgd", label: "Singapore Dollar (SGD)" },
    { value: "nzd", label: "New Zealand Dollar (NZD)" },
    { value: "hkd", label: "Hong Kong Dollar (HKD)" },
    { value: "eur", label: "Euro (EUR)" },
    { value: "gbp", label: "British Pound (GBP)" },
    { value: "jpy", label: "Japanese Yen (JPY)" },
    { value: "cny", label: "Chinese Yuan (CNY)" },
    { value: "zar", label: "South African Rand (ZAR)" },
    { value: "rub", label: "Russian Ruble (RUB)" },
    { value: "brl", label: "Brazilian Real (BRL)" },
    { value: "mxn", label: "Mexican Peso (MXN)" },
];

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChnage,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
}) {
    const amountInput = useId()
    // Merge default currencies with API currencies, avoiding duplicates
    const mergedOptions = [
        ...defaultCurrencies,
        ...currencyOptions.filter(
            c => !defaultCurrencies.some(dc => dc.value === c)
        ).map(c => ({ value: c, label: c.toUpperCase() }))
    ];
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInput} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInput}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange((Number(e.target.value)))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChnage && onCurrencyChnage(e.target.value)}
                    disabled={currencyDisabled}
                >
                    {mergedOptions.map((currency) => (
                        <option key={currency.value} value={currency.value}>
                            {currency.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;