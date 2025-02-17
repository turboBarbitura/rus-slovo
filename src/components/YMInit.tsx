"use client"
import { YMInitializer } from "react-yandex-metrika"

export const YmInitializer = () => {
    return <YMInitializer accounts={[99950050]} options={{ webvisor: true }} version="2"/>
}
