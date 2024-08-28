import { doSomething } from "./mod";
import { jsFunction } from "./js"
import React from 'react';
import ReactDOM from "react-dom/client";
import ButtonComponent from './ButtonComponent';

const scores = {
    math: 100,
    english: "100"
} satisfies Record<string, string | number>

console.log(scores.english.toUpperCase())


let value: unknown
value = "test";

if(typeof value === 'string')
console.log(value.toUpperCase());

type Role = 'admin' | 'user' | 'guest';

const userPermissions: Record<string, string[]> = {
    admin: [],
    user: [],
    guest: []
}

doSomething();

type Person = {
    readonly iq: number
    readonly height: boolean
    readonly eyes: string
}

const nathan: Person = {
    iq: 180,
    height: true,
    eyes: "blue"
}

function breakTheLaw(nathan: any) {
    nathan.iq = 99;
}

breakTheLaw(nathan);

console.log(nathan.iq)

jsFunction();

const root = ReactDOM.createRoot(document.getElementsByTagName("body")[0]);

root.render(
    <React.StrictMode>
        <ButtonComponent />
    </React.StrictMode>
);