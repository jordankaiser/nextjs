import Image from "next/image";
import styles from "./page.module.css";
import TestComponent from "@/app/ui/test-component";

export default function Test() {
  return (
    <>
      <div>
        <h1>test page</h1>
      </div>
      <div>
        <TestComponent initialNum1={22} initialNum2={10} />
      </div>
    </>
  );
}
